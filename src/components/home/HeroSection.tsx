import Image from "next/image"
import SalyImage from "../../../public/saly.png"
import OrangeImage from "../../../public/orange.png"
import PurpleImage from "../../../public/purple.png"
import { PiUser, PiCodesandboxLogo } from "react-icons/pi"

export default function HeroSection() {
  return (
    <section className="py-[150px] relative">
      <Image className="absolute left-0 top-0 opacity-30 pointer-events-none" src={OrangeImage} alt="Orange Image" />
      <div className="container mx-auto flex items-center justify-between">
        <div className="w-[586px]">
          <h2 className="text-3xl text-white">Merhaba,</h2>
          <h1 className="mt-[15px] text-5xl font-semibold text-white">Ben <span className="text-[#893EE9]">Muzaffer Bayraktar</span></h1>
          <p className="mt-[15px] text-global-text leading-6">
            Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a. Scelerisque tristique nulla morbi duis tempor nec lectus vitae dictumst. Enim at in.
          </p>
          <div className="mt-[30px] font-semibold flex items-center gap-x-7">
            <button className="flex items-center gap-x-2 py-3 px-5 bg-primary-600 text-white border border-primary-600 rounded-lg">
              <PiUser className="text-white w-5 h-5" />
              <span>Hakkımda</span>
            </button>
            <button className="flex items-center gap-x-2 py-3 px-5 text-primary-600 border border-primary-600 rounded-lg">
              <PiCodesandboxLogo className="text-primary-600 w-5 h-5" />
              <span>Çalışmalarım</span>
            </button>
          </div>
        </div>
        <div>
          <Image src={SalyImage} alt="Saly Image" width={623} height={445} />
        </div>
      </div>
      <Image className="absolute right-0 bottom-0 opacity-30 pointer-events-none" src={PurpleImage} alt="Purple Image" />
    </section>
  )
}