import { PiUserCircle, PiPhone, PiUserList, PiInstagramLogo, PiTwitterLogo, PiBehanceLogo, PiGithubLogo } from "react-icons/pi"
import { AiOutlineMail } from "react-icons/ai"

export default function ContactSection() {
  return (
    <section className="pb-[150px]">
      <div className="container mx-auto">
        <h3 className="text-2xl text-primary-600">İletişim</h3>
        <h1 className="mt-2 text-5xl font-semibold text-white">Benimle İletişime Geçin</h1>
        <div className="mt-[50px] grid grid-cols-2 gap-x-8">
          <div>
            <form>
              <div className="grid grid-cols-2 gap-x-5 gap-y-8">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-white">İsim Soyisim</label>
                  <div className="mt-[6px] text-global-text flex items-center h-[42px] px-3 bg-global-section-bg border border-global-section-bg hover:border-primary-500 focus-within:border-2 focus-within:border-primary-500 rounded-lg">
                    <PiUserCircle className="w-[22px] h-[22px]" />
                    <input className="text-sm placeholder:text-sm w-full h-full px-3 bg-transparent outline-none text-white" id="name" type="text" placeholder="Muzaffer Bayraktar" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-white">E-Posta Adresiniz</label>
                  <div className="mt-[6px] text-global-text flex items-center h-[42px] px-3 bg-global-section-bg border border-global-section-bg hover:border-primary-500 focus-within:border-2 focus-within:border-primary-500 rounded-lg">
                    <AiOutlineMail className="w-[22px] h-[22px]" />
                    <input className="text-sm placeholder:text-sm w-full h-full px-3 bg-transparent outline-none text-white" id="email" type="text" placeholder="muzafferbayraktar51@gmail.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-white">Telefon Numarası</label>
                  <div className="mt-[6px] text-global-text flex items-center h-[42px] px-3 bg-global-section-bg border border-global-section-bg hover:border-primary-500 focus-within:border-2 focus-within:border-primary-500 rounded-lg">
                    <PiPhone className="w-[22px] h-[22px]" />
                    <input className="text-sm placeholder:text-sm w-full h-full px-3 bg-transparent outline-none text-white" id="name" type="phone" placeholder="0000 000 00 00" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-white">Konu</label>
                  <div className="mt-[6px] text-global-text flex items-center h-[42px] px-3 bg-global-section-bg border border-global-section-bg hover:border-primary-500 focus-within:border-2 focus-within:border-primary-500 rounded-lg">
                    <PiUserList className="w-[22px] h-[22px]" />
                    <input className="text-sm placeholder:text-sm w-full h-full px-3 bg-transparent outline-none text-white" id="subject" type="text" />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-white">Mesajınız</label>
                  <textarea className="h-40 mt-1 block w-full py-[10px] px-3 bg-global-section-bg text-white text-sm placeholder:text-sm placeholder:text-global-text border border-global-section-bg hover:border-primary-500 focus:border-2 focus:border-primary-500 rounded-lg outline-none" placeholder="En fazla 500 karakter..." id="message" />
                </div>
                <button className="mt-8 font-semibold text-white py-3 px-5 bg-primary-600 border border-primary-600 rounded-lg">Mesajı Gönder</button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-y-[10px]">
            <div className="flex items-center gap-x-[30px] bg-global-section-bg hover:bg-primary-50 transition-all py-5 px-[30px] rounded-[14px]">
              <PiInstagramLogo className="w-9 h-9 text-primary-500" />
              <div>
                <h1 className="font-medium text-white">Instagram</h1>
                <h2 className="mt-[5px] text-sm font-medium text-global-text">@muzaffer.byrktrr</h2>
              </div>
            </div>
            <div className="flex items-center gap-x-[30px] bg-global-section-bg hover:bg-primary-50 transition-all py-5 px-[30px] rounded-[14px]">
              <PiTwitterLogo className="w-9 h-9 text-primary-500" />
              <div>
                <h1 className="font-medium text-white">Twitter (X)</h1>
                <h2 className="mt-[5px] text-sm font-medium text-global-text">@twitter</h2>
              </div>
            </div>
            <div className="flex items-center gap-x-[30px] bg-global-section-bg hover:bg-primary-50 transition-all py-5 px-[30px] rounded-[14px]">
              <PiBehanceLogo className="w-9 h-9 text-primary-500" />
              <div>
                <h1 className="font-medium text-white">Behance</h1>
                <h2 className="mt-[5px] text-sm font-medium text-global-text">behance.net/byrktr</h2>
              </div>
            </div>
            <div className="flex items-center gap-x-[30px] bg-global-section-bg hover:bg-primary-50 transition-all py-5 px-[30px] rounded-[14px]">
              <PiGithubLogo className="w-9 h-9 text-primary-500" />
              <div>
                <h1 className="font-medium text-white">Github</h1>
                <h2 className="mt-[5px] text-sm font-medium text-global-text">github.com/MuzafferBYRKTR</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}