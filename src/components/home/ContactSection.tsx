import { PiInstagramLogo, PiTwitterLogo, PiBehanceLogo, PiGithubLogo } from "react-icons/pi"
import ContactForm from "./ContactForm"

export default function ContactSection() {
  return (
    <section id="contact" className="pb-[150px]">
      <div className="container mx-auto">
        <h3 className="text-2xl text-primary-600">İletişim</h3>
        <h1 className="mt-2 text-5xl font-semibold text-white">Benimle İletişime Geçin</h1>
        <div className="mt-[50px] grid grid-cols-2 gap-x-8">
          <div>
            <ContactForm />
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