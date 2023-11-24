'use client'

import { PiUserCircle, PiPhone, PiUserList } from "react-icons/pi"
import { AiOutlineMail } from "react-icons/ai"
import toast from "react-hot-toast"
import { Formik, FormikHelpers } from "formik"
import * as Yup from "yup"
import LoadingSpin from "../common/LoadingSpin"
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react"

interface IValues {
  from_name: string;
  from_email: string;
  from_phone: string;
  subject: string;
  message: string;
  "g-recaptcha-response": string;
}

export default function ContactForm() {
  const recaptchaRef: any = useRef()

  return (
    <Formik
      initialValues={{
        from_name: '',
        from_email: '',
        from_phone: '',
        subject: '',
        message: '',
        "g-recaptcha-response": "",
      }}
      validationSchema={Yup.object().shape({
        from_name: Yup.string()
          .min(2, 'İsim çok kısa.')
          .max(100, 'İsim çok uzun.')
          .required('İsim alanının doldurulması zorunludur.'),
        from_email: Yup.string()
          .min(2, 'E-posta çok kısa.')
          .max(100, 'E-posta çok uzun.')
          .required('E-posta alanının doldurulması zorunludur.'),
        from_phone: Yup.string()
          .min(2, 'Telefon numarası çok kısa.')
          .max(100, 'Telefon numarası çok uzun.'),
        subject: Yup.string()
          .min(2, 'Konu çok kısa.')
          .max(100, 'Konu çok uzun.')
          .required('Konu alanının doldurulması zorunludur.'),
        message: Yup.string()
          .min(2, 'Mesaj çok kısa.')
          .max(1500, 'Mesaj çok uzun.')
          .required('Mesaj alanının doldurulması zorunludur.'),
      })}
      onSubmit={async (
        values: IValues,
        { setSubmitting, resetForm }: FormikHelpers<IValues>
      ) => {
        values["g-recaptcha-response"] = await recaptchaRef.current.executeAsync()

        await toast.promise(emailjs.send(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
          values as any,
          process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID
        ), {
          loading: 'Mesaj gönderiliyor...',
          success: 'Başarıyla gönderildi!',
          error: 'Gönderme başarısız!',
        })

        recaptchaRef.current.reset();
        resetForm();
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-8">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-white">İsim Soyisim</label>
              <div className={`${errors.from_name && touched.from_name ? "border-[#C05353]" : "border-global-section-bg hover:border-primary-500 focus-within:border-primary-500"} mt-[6px] text-global-text flex items-center h-[42px] px-3 bg-global-section-bg border focus-within:border-2 rounded-lg`}>
                <PiUserCircle className="w-[22px] h-[22px]" />
                <input onChange={handleChange} onBlur={handleBlur} value={values.from_name} className="text-sm placeholder:text-sm w-full h-full px-3 bg-transparent outline-none text-white" name="from_name" id="name" type="text" placeholder="Muzaffer Bayraktar" />
              </div>
              {errors.from_name && touched.from_name && <small className="text-[#C05353] font-medium text-sm block mt-1 ml-1">{errors.from_name}</small>}
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-white">E-Posta Adresiniz</label>
              <div className={`${errors.from_email && touched.from_email ? "border-[#C05353]" : "border-global-section-bg hover:border-primary-500 focus-within:border-primary-500"} mt-[6px] text-global-text flex items-center h-[42px] px-3 bg-global-section-bg border focus-within:border-2 rounded-lg`}>
                <AiOutlineMail className="w-[22px] h-[22px]" />
                <input onChange={handleChange} onBlur={handleBlur} value={values.from_email} className="text-sm placeholder:text-sm w-full h-full px-3 bg-transparent outline-none text-white" name="from_email" id="email" type="text" placeholder="muzafferbayraktar51@gmail.com" />
              </div>
              {errors.from_email && touched.from_email && <small className="text-[#C05353] font-medium text-sm block mt-1 ml-1">{errors.from_email}</small>}
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-white">Telefon Numarası</label>
              <div className={`${errors.from_phone && touched.from_phone ? "border-[#C05353]" : "border-global-section-bg hover:border-primary-500 focus-within:border-primary-500"} mt-[6px] text-global-text flex items-center h-[42px] px-3 bg-global-section-bg border focus-within:border-2 rounded-lg`}>
                <PiPhone className="w-[22px] h-[22px]" />
                <input onChange={handleChange} onBlur={handleBlur} value={values.from_phone} className="text-sm placeholder:text-sm w-full h-full px-3 bg-transparent outline-none text-white" name="from_phone" id="phone" type="text" placeholder="0000 000 00 00" />
              </div>
              {errors.from_phone && touched.from_phone && <small className="text-[#C05353] font-medium text-sm block mt-1 ml-1">{errors.from_phone}</small>}
            </div>
            <div>
              <label htmlFor="subject" className="text-sm font-medium text-white">Konu</label>
              <div className={`${errors.subject && touched.subject ? "border-[#C05353]" : "border-global-section-bg hover:border-primary-500 focus-within:border-primary-500"} mt-[6px] text-global-text flex items-center h-[42px] px-3 bg-global-section-bg border focus-within:border-2 rounded-lg`}>
                <PiUserList className="w-[22px] h-[22px]" />
                <input onChange={handleChange} onBlur={handleBlur} value={values.subject} className="text-sm placeholder:text-sm w-full h-full px-3 bg-transparent outline-none text-white" name="subject" id="subject" type="text" placeholder="Konu..." />
              </div>
              {errors.subject && touched.subject && <small className="text-[#C05353] font-medium text-sm block mt-1 ml-1">{errors.subject}</small>}
            </div>
          </div>
          <div className="mt-8">
            <div>
              <label htmlFor="message" className="text-sm font-medium text-white">Mesajınız</label>
              <textarea onChange={handleChange} onBlur={handleBlur} value={values.message} className={`${errors.message && touched.message ? "border-[#C05353]" : "border-global-section-bg hover:border-primary-500 focus:border-primary-500"} h-40 mt-1 block w-full py-[10px] px-3 bg-global-section-bg text-white text-sm placeholder:text-sm placeholder:text-global-text border focus:border-2 rounded-lg outline-none`} placeholder="En fazla 1500 karakter..." name="message" id="message" />
              {errors.message && touched.message && <small className="text-[#C05353] font-medium text-sm block mt-1 ml-1">{errors.message}</small>}
            </div>

            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
              size="invisible"
            />
            
            <button disabled={isSubmitting} type="submit" className="mt-8 font-semibold text-white py-3 px-5 bg-primary-600 hover:bg-primary-50 disabled:bg-primary-50 transition-all border border-primary-600 rounded-lg">{isSubmitting ? (<span className="flex items-center gap-x-2"><LoadingSpin className="mx-auto w-5 h-5" /> Gönderiliyor</span>) : 'Mesajı Gönder'}</button>
          </div>
        </form>
      )}
    </Formik>
  )
}