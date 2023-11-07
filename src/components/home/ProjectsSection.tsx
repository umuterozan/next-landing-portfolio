import { BiSearch } from "react-icons/bi"
import { GoArrowUpRight } from "react-icons/go"

export default function ProjectsSection() {
  return (
    <section className="bg-global-section-bg py-[50px]">
      <div className="container mx-auto">
        <h2 className="text-2xl text-primary-600">Çalışmalarım</h2>
        <h1 className="mt-2 text-5xl font-semibold text-white">Yaptığım Projeler ve İşler</h1>
        <div className="mt-[50px] grid grid-cols-3 gap-x-[25px] gap-y-[22px]">
          {[...Array(6).keys()].map((item) => (
            <div className="bg-[url('/projectbox.png')] bg-cover bg-no-repeat max-w-[450px] h-[400px] rounded-[25px] group">
              <div className="w-full h-0 group-hover:h-full transition-all duration-300 p-0 group-hover:px-[30px] group-hover:py-[50px] overflow-hidden rounded-[25px] bg-black bg-opacity-80">
                <div className="flex flex-col w-full h-full justify-center items-center gap-y-[15px]">
                  <h2 className="text-sm font-medium text-[#AAB5C2]">Arayüz Tasarımı</h2>
                  <h1 className="text-3xl font-semibold text-white">VPN App Design</h1>
                  <h3 className="text-sm text-white">28 Eylül 2023</h3>
                </div>
                <button className="flex items-center gap-x-2 mx-auto">
                  <BiSearch className="w-5 h-5 text-primary-200" />
                  <span className="font-semibold text-primary-200">Görüntüle</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-[50px] mx-auto px-5 py-3 flex items-center gap-x-2 bg-[#182E53] rounded-lg">
          <span className="font-semibold text-primary-600">Daha Fazla Göster</span>
          <GoArrowUpRight className="w-5 h-5 text-primary-600" />
        </button>
      </div>
    </section>
  )
}