import { BsCalendar2Date } from "react-icons/bs"
import { GoArrowUpRight } from "react-icons/go"

export default function BlogSection() {
  return (
    <section className="py-[150px]">
      <div className="container mx-auto">
        <h3 className="text-2xl text-primary-600">Blog</h3>
        <h1 className="mt-2 text-5xl font-semibold text-white">Yazılarım</h1>
        <div className="mt-[50px] flex justify-between gap-x-8">
          {[...Array(4).keys()].map((item) => (
            <div className="w-[326px]">
              <div className="bg-[url('/blogbg.jpg')] bg-cover bg-no-repeat rounded-[12px] h-[220px] px-[10px] py-[15px]">
                <div className="text-primary-500 text-xs font-medium bg-primary-100 rounded-md py-1 px-4 inline-block">Tasarım</div>
              </div>
              <div className="px-[10px] py-[15px]">
                <h1 className="text-xl font-semibold text-white">UI/UX Nedir, Nasıl Yapılır?</h1>
                <p className="mt-[10px] text-xs text-global-text">
                  Lorem ipsum dolor sit amet consectetur. Etiam viverra rutrum libero duis. Nibh nulla nulla iaculis ac morbi. Fermentum cras in nulla orci.
                </p>
                <div className="mt-[10px] flex items-center gap-x-2">
                  <BsCalendar2Date className="text-global-text w-5 h-5" />
                  <span className="text-xs text-global-text">11 Eylül 2023</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-[50px] mx-auto px-5 py-3 flex items-center gap-x-2 bg-[#182E53] rounded-lg">
          <span className="font-semibold text-primary-600">Tüm Yazılarım</span>
          <GoArrowUpRight className="w-5 h-5 text-primary-600" />
        </button>
      </div>
    </section>
  )
}