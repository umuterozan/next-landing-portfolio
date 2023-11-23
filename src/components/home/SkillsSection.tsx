import RedImage from "../../../public/red.png"
import GreenImage from "../../../public/green.png"
import Image from "next/image"
import { FaFigma } from "react-icons/fa";

const skills = {
  description: "Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a. Scelerisque tristique nulla morbi duis tempor nec lectus vitae dictumst. Enim at in. Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a",
  skills: [
    {
      icon: <FaFigma className="w-full h-full text-primary-400" />,
      title: "Web Tasarımı",
      description: "2021 yılından bu yana Figma ile kullanıcı arayüzleri geliştiriyorum.",
      sub: "HTML, CSS, PHP",
    },
    {
      icon: <FaFigma className="w-full h-full text-primary-400" />,
      title: "Web Tasarımı",
      description: "2021 yılından bu yana Figma ile kullanıcı arayüzleri geliştiriyorum.",
      sub: "HTML, CSS, PHP",
    },
    {
      icon: <FaFigma className="w-full h-full text-white" />,
      title: "Web Tasarımı",
      description: "2021 yılından bu yana Figma ile kullanıcı arayüzleri geliştiriyorum.",
      sub: "HTML, CSS, PHP",
    },
    {
      icon: <FaFigma className="w-full h-full text-white" />,
      title: "Web Tasarımı",
      description: "2021 yılından bu yana Figma ile kullanıcı arayüzleri geliştiriyorum.",
      sub: "HTML, CSS, PHP",
    },
    {
      icon: <FaFigma className="w-full h-full text-white" />,
      title: "Web Tasarımı",
      description: "2021 yılından bu yana Figma ile kullanıcı arayüzleri geliştiriyorum.",
      sub: "HTML, CSS, PHP",
    },
    {
      icon: <FaFigma className="w-full h-full text-white" />,
      title: "Web Tasarımı",
      description: "2021 yılından bu yana Figma ile kullanıcı arayüzleri geliştiriyorum.",
      sub: "HTML, CSS, PHP",
    },
    {
      icon: <FaFigma className="w-full h-full text-white" />,
      title: "Web Tasarımı",
      description: "2021 yılından bu yana Figma ile kullanıcı arayüzleri geliştiriyorum.",
      sub: "HTML, CSS, PHP",
    },
    {
      icon: <FaFigma className="w-full h-full text-white" />,
      title: "Web Tasarımı",
      description: "2021 yılından bu yana Figma ile kullanıcı arayüzleri geliştiriyorum.",
      sub: "HTML, CSS, PHP",
    },
  ]
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-[150px] relative">
      <Image className="absolute right-0 top-0 opacity-30 pointer-events-none" src={RedImage} alt="Red Image" />
      <div className="container mx-auto">
        <h2 className="text-2xl text-primary-600">Yeteneklerim</h2>
        <h1 className="mt-2 text-5xl font-semibold text-white">Neler Yapıyorum?</h1>
        <p className="mt-2 text-global-text leading-6 w-[683px]">
          {skills.description}
        </p>
        <div className="mt-[50px] grid grid-cols-4 gap-x-8 gap-y-[50px]">
          {skills.skills.map((skill, index) => (
            <div key={index} className="bg-global-section-bg border-2 border-global-section-bg rounded-[25px] w-[326px] p-[30px]">
              <div className="bg-primary-50 rounded-[10px] p-[10px] flex justify-center items-center w-[66px] h-[66px]">
                {skill.icon}
              </div>
              <h2 className="mt-[15px] text-xl font-semibold text-white">{skill.title}</h2>
              <p className="mt-3 text-sm text-global-text">{skill.description}</p>
              <span className="mt-[15px] inline-block text-sm font-medium text-white">{skill.sub}</span>
            </div>
          ))}
        </div>
      </div>
      <Image className="absolute left-0 bottom-0 opacity-30 pointer-events-none" src={GreenImage} alt="Green Image" />
    </section>
  )
}