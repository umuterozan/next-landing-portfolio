import { PiBehanceLogo, PiFigmaLogo, PiInstagramLogo, PiGithubLogo, PiDribbbleLogo, PiTwitterLogo } from "react-icons/pi"
import MeImage from "../../public/me.png"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="bg-global-section-bg py-[50px]">
      <div className="container mx-auto flex gap-x-[90px]">
        <div className="w-[586px]">
          <div>
            <h2 className="text-2xl text-primary-600">Hakkımda</h2>
            <h1 className="mt-2 text-4xl font-semibold text-white">Beni Tanıyın</h1>
            <p className="mt-2 text-global-text leading-6">
              Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a. Scelerisque tristique nulla morbi duis tempor nec lectus vitae dictumst. Enim at in. Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a. Scelerisque tristique nulla morbi duis tempor nec lectus vitae dictumst. Enim at in. Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a. Scelerisque tristique nulla morbi duis tempor nec lectus vitae dictumst. Enim at in. Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a
            </p>
            <div className="mt-[30px] flex items-center gap-x-[15px]">
              <button className="p-2 border border-[#005CFF] bg-[#005CFF] rounded-[35px] text-white"><PiBehanceLogo className="w-7 h-7" /></button>
              <button className="p-2 border border-[#A259FF] bg-[#A259FF] rounded-[35px] text-white"><PiFigmaLogo className="w-7 h-7" /></button>
              <button className="p-2 border border-[#D62976] bg-[#D62976] rounded-[35px] text-white"><PiInstagramLogo className="w-7 h-7" /></button>
              <button className="p-2 border border-[#2B3137] bg-[#2B3137] rounded-[35px] text-white"><PiGithubLogo className="w-7 h-7" /></button>
              <button className="p-2 border border-[#EA4C89] bg-[#EA4C89] rounded-[35px] text-white"><PiDribbbleLogo className="w-7 h-7" /></button>
              <button className="p-2 border border-[#1DA1F2] bg-[#1DA1F2] rounded-[35px] text-white"><PiTwitterLogo className="w-7 h-7" /></button>
            </div>
          </div>
          <div className="mt-[60px]">
            <h2 className="text-white text-2xl font-bold">Kişisel Bilgiler</h2>
            <div className="mt-[30px] flex items-start gap-x-[15px]">
              <div className="flex items-center gap-x-[15px]">
                <div className="font-medium text-global-text flex flex-col gap-y-[10px]">
                  <span>İsim Soyisim:</span>
                  <span>Yaş:</span>
                  <span>Şehir/Ülke:</span>
                </div>
                <div className="text-white flex flex-col gap-y-[10px]">
                  <span>Muzaffer Bayraktar</span>
                  <span>20</span>
                  <span>Gaziantep / Türkiye</span>
                </div>
              </div>
              <div className="flex items-center gap-x-[15px]">
                <div className="font-medium text-global-text flex flex-col gap-y-[10px]">
                  <span>E-Posta:</span>
                  <span>Telefon:</span>
                </div>
                <div className="text-white flex flex-col gap-y-[10px]">
                  <span>info@muzafferbayraktar.com</span>
                  <span>+90 536 554 52 25</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={MeImage} alt="Me Image" />
        </div>
      </div>
    </section>
  )
}