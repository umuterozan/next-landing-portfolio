import RedImage from "../../public/red.png"
import GreenImage from "../../public/green.png"
import Image from "next/image"

export default function SkillsSection() {
  return (
    <section className="py-[150px] relative">
      <Image className="absolute right-0 top-0 opacity-30 pointer-events-none" src={RedImage} alt="Red Image" />
      <div className="container mx-auto">
        <h2 className="text-2xl text-primary-600">Yeteneklerim</h2>
        <h1 className="mt-2 text-5xl font-semibold text-white">Neler Yapıyorum?</h1>
        <p className="mt-2 text-global-text leading-6 w-[683px]">
          Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a. Scelerisque tristique nulla morbi duis tempor nec lectus vitae dictumst. Enim at in. Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a
        </p>
        <div className="mt-[50px] grid grid-cols-4 gap-x-8 gap-y-[50px]">
          {[...Array(8).keys()].map((item) => (
            <div className="bg-global-section-bg border-2 border-global-section-bg rounded-[25px] w-[326px] p-[30px]">
              <div className="bg-primary-50 rounded-[10px] p-[10px] flex justify-center items-center w-[66px] h-[66px]">
                <svg width="32" height="46" viewBox="0 0 32 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Group">
                    <path id="Vector" d="M8.33329 46C12.5653 46 16 42.5653 16 38.3333V30.6666H8.33329C4.10129 30.6666 0.666626 34.1013 0.666626 38.3333C0.666626 42.5653 4.10129 46 8.33329 46Z" fill="#0ACF83"/>
                    <path id="Vector_2" d="M0.666626 23C0.666626 18.768 4.10129 15.3334 8.33329 15.3334H16V30.6667H8.33329C4.10129 30.6667 0.666626 27.232 0.666626 23Z" fill="#A259FF"/>
                    <path id="Vector_3" d="M0.666626 7.66667C0.666626 3.43467 4.10129 0 8.33329 0H16V15.3333H8.33329C4.10129 15.3333 0.666626 11.8987 0.666626 7.66667Z" fill="#F24E1E"/>
                    <path id="Vector_4" d="M16 0H23.6667C27.8987 0 31.3333 3.43467 31.3333 7.66667C31.3333 11.8987 27.8987 15.3333 23.6667 15.3333H16V0Z" fill="#FF7262"/>
                    <path id="Vector_5" d="M31.3333 23C31.3333 27.232 27.8987 30.6667 23.6667 30.6667C19.4347 30.6667 16 27.232 16 23C16 18.768 19.4347 15.3334 23.6667 15.3334C27.8987 15.3334 31.3333 18.768 31.3333 23Z" fill="#1ABCFE"/>
                  </g>
                </svg>
              </div>
              <h2 className="mt-[15px] text-xl font-semibold text-white">Web Tasarımı</h2>
              <p className="mt-3 text-sm text-global-text">2021 yılından bu yana Figma ile kullanıcı arayüzleri geliştiriyorum.</p>
              <span className="mt-[15px] inline-block text-sm font-medium text-white">HTML, CSS, PHP</span>
            </div>
          ))}
        </div>
      </div>
      <Image className="absolute left-0 bottom-0 opacity-30 pointer-events-none" src={GreenImage} alt="Green Image" />
    </section>
  )
}