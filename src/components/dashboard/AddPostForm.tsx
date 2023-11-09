'use client'

import { collection, addDoc } from "firebase/firestore"
import { ref, uploadBytes } from "firebase/storage"
import { db, storage } from "@/app/firebase"
import { v4 } from "uuid"
import toast from "react-hot-toast"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { Formik, FormikHelpers } from "formik"
import * as Yup from "yup"
import { generateSlug } from "@/lib/helpers"
import { serverTimestamp } from "firebase/firestore"

interface IValues {
  category: string;
  title: string;
  content: string;
  image: any;
}

const MAX_FILE_SIZE: number = 2 * 1024 * 1024; // 2 MB

const validFileExtensions: { [key: string]: string[] } = { image: ['jpg', 'png', 'jpeg', 'webp'] };

function isValidFileType(fileName: string, fileType: string): any {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop() as string) > -1;
}

export default function AddPostForm() {

  return (
    <Formik
      initialValues={{
        category: '',
        title: '',
        content: '',
        image: '',
      }}
      validationSchema={Yup.object().shape({
        category: Yup.string()
          .min(2, 'Kategori ismi çok kısa, minimum 2 karakter olabilir.')
          .max(50, 'Kategori ismi çok uzun, maksimum 50 karakter olabilir.')
          .required('Kategori alanının doldurulması zorunludur.'),
        title: Yup.string()
          .min(2, 'Başlık çok kısa, minimum 2 karakter olabilir.')
          .max(50, 'Başlık çok uzun, maksimum 50 karakter olabilir.')
          .required('Başlık alanının doldurulması zorunludur.'),
        content: Yup.string()
          .min(2, 'İçerik çok kısa, minimum 2 karakter olabilir.')
          .max(1500, 'İçerik çok uzun, maksimum 1500 karakter olabilir.')
          .required('İçerik alanının doldurulması zorunludur.'),
        image: Yup.mixed()
          .required('Görsel alanının doldurulması zorunludur.')
          .test("is-valid-type", "Geçersiz dosya türü, sadece .jpg, .png .jpeg, .webp desteklenir.",
            (value: any) => isValidFileType(value && value.name.toLowerCase(), "image"))
          .test("is-valid-size", "Dosyanın boyutu en fazla 2 MB olabilir.",
            (value: any) => value && value.size <= MAX_FILE_SIZE),
      })}
      onSubmit={async (
        values: IValues,
        { setSubmitting, resetForm }: FormikHelpers<IValues>
      ) => {
        const imageUpload: any = values.image
        const image: any = v4() + imageUpload.name
        const imageRef = ref(storage, `images/${image}`)
        const slug = v4() + generateSlug(values.title)

        await toast.promise(Promise.all([uploadBytes(imageRef, imageUpload), addDoc(collection(db, 'posts'), {
          category: values.category,
          title: values.title,
          content: values.content,
          slug,
          image,
          createdAt: serverTimestamp(),
        })]), {
          loading: 'Yazı yükleniyor...',
          success: 'Başarıyla yüklendi!',
          error: 'Yükleme başarısız!',
        })

        setSubmitting(false);
        resetForm();
        // @ts-ignore
        document.getElementById('image').value = '';
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
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-y-8">
          <div>
            <label htmlFor="category" className="text-sm font-medium text-white">Kategori</label>
            <input onChange={handleChange} onBlur={handleBlur} value={values.category} className={`${errors.category && touched.category ? "border-[#C05353]" : "border-global-section-bg hover:border-primary-500 focus:border-primary-500"} mt-1 block w-full py-[15px] px-3 bg-global-section-bg text-white text-sm placeholder:text-sm placeholder:text-global-text border focus:border-2 rounded-lg outline-none`} type="text" placeholder="Tasarım" name="category" id="category" />
            {errors.category && touched.category && <small className="text-[#C05353] font-medium text-sm block mt-1">{errors.category}</small>}
          </div>
          <div>
            <label htmlFor="title" className="text-sm font-medium text-white">Başlık</label>
            <input onChange={handleChange} onBlur={handleBlur} value={values.title} className={`${errors.title && touched.title ? "border-[#C05353]" : "border-global-section-bg hover:border-primary-500 focus:border-primary-500"} mt-1 block w-full py-[15px] px-3 bg-global-section-bg text-white text-sm placeholder:text-sm placeholder:text-global-text border focus:border-2 rounded-lg outline-none`} type="text" placeholder="UI/UX Nedir, Nasıl Yapılır?" name="title" id="title" />
            {errors.title && touched.title && <small className="text-[#C05353] font-medium text-sm block mt-1">{errors.title}</small>}
          </div>
          <div>
            <label htmlFor="content" className="text-sm font-medium text-white">İçerik</label>
            <textarea onChange={handleChange} onBlur={handleBlur} value={values.content} className={`${errors.content && touched.content ? "border-[#C05353]" : "border-global-section-bg hover:border-primary-500 focus:border-primary-500"} h-40 mt-1 block w-full py-[10px] px-3 bg-global-section-bg text-white text-sm placeholder:text-sm placeholder:text-global-text border focus:border-2 rounded-lg outline-none`} placeholder="En fazla 1500 karakter..." name="content" id="content" />
            {errors.content && touched.content && <small className="text-[#C05353] font-medium text-sm block mt-1">{errors.content}</small>}
          </div>
          <div>
            <label htmlFor="image" className="text-sm font-medium text-white">Görsel</label>
            <input onChange={(e: any) => setFieldValue('image', e.target.files[0])} onBlur={handleBlur} className={`${errors.image && touched.image ? "border-[#C05353]" : "border-global-section-bg hover:border-primary-500 focus:border-primary-500"} mt-1 block w-full py-[15px] px-3 bg-global-section-bg text-white text-sm placeholder:text-sm placeholder:text-global-text border focus:border-2 rounded-lg outline-none`} type="file" name="image" id="image" accept=".jpg, .png, .jpeg, .webp" />
            {errors.image && touched.image && <small className="text-[#C05353] font-medium text-sm block mt-1">{errors.image}</small>}
          </div>
          <button disabled={isSubmitting} type="submit" className="font-semibold text-white py-3 px-5 bg-primary-600 disabled:bg-primary-50 border border-primary-600 rounded-lg">{isSubmitting ? <AiOutlineLoading3Quarters className="animate-spin mx-auto w-5 h-5" /> : 'Yazıyı Ekle'}</button>
        </form>
      )}
    </Formik>
  )
}