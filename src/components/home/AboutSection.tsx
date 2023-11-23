import { PiBehanceLogo, PiFigmaLogo, PiInstagramLogo, PiGithubLogo, PiDribbbleLogo, PiTwitterLogo } from "react-icons/pi"
import MeImage from "../../../public/me.jpg"
import Image from "next/image"
import Link from "next/link"

const about = {
  description: "Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a. Scelerisque tristique nulla morbi duis tempor nec lectus vitae dictumst. Enim at in. Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a. Scelerisque tristique nulla morbi duis tempor nec lectus vitae dictumst. Enim at in. Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a. Scelerisque tristique nulla morbi duis tempor nec lectus vitae dictumst. Enim at in. Lorem ipsum dolor sit amet consectetur. Felis elit turpis imperdiet auctor a",
  links: [
    {
      href: "#",
      color: "#005CFF",
      icon: <PiBehanceLogo className="w-7 h-7" />,
    },
    {
      href: "#",
      color: "#A259FF",
      icon: <PiFigmaLogo className="w-7 h-7" />,
    },
    {
      href: "#",
      color: "#D62976",
      icon: <PiInstagramLogo className="w-7 h-7" />,
    },
    {
      href: "#",
      color: "#2B3137",
      icon: <PiGithubLogo className="w-7 h-7" />,
    },
    {
      href: "#",
      color: "#EA4C89",
      icon: <PiDribbbleLogo className="w-7 h-7" />,
    },
    {
      href: "#",
      color: "#1DA1F2",
      icon: <PiTwitterLogo className="w-7 h-7" />,
    },
  ],
  me: {
    fullName: "Muzaffer Bayraktar",
    email: "info@muzafferbayraktar.com",
    age: 20,
    phone: "+90 536 554 52 25",
    country: "Gaziantep / Türkiye",
  },
}

export default function AboutSection() {
  return (
    <section id="about" className="bg-global-section-bg py-[50px]">
      <div className="container mx-auto flex gap-x-[90px]">
        <div className="w-[586px]">
          <div>
            <h2 className="text-2xl text-primary-600">Hakkımda</h2>
            <h1 className="mt-2 text-4xl font-semibold text-white">Beni Tanıyın</h1>
            <p className="mt-2 text-global-text leading-6">
              {about.description}
            </p>
            <div className="mt-[30px] flex items-center gap-x-[15px]">
              {about.links.map((link, index) => (
                <Link key={index} href={link.href} className="p-2 border rounded-[35px] text-white" style={{ borderColor: link.color, backgroundColor: link.color }}>{link.icon}</Link>
              ))}
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
                  <span>{about.me.fullName}</span>
                  <span>{about.me.age}</span>
                  <span>{about.me.country}</span>
                </div>
              </div>
              <div className="flex items-center gap-x-[15px]">
                <div className="font-medium text-global-text flex flex-col gap-y-[10px]">
                  <span>E-Posta:</span>
                  <span>Telefon:</span>
                </div>
                <div className="text-white flex flex-col gap-y-[10px]">
                  <span>{about.me.email}</span>
                  <span>{about.me.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[680px] h-[750px] relative rounded-[40px]" style={{ background: "linear-gradient(to bottom, #2781E9, #2781E900)" }}>
          <Image src={MeImage} fill className="object-cover p-2 rounded-[40px] pointer-events-none" alt="Me Image" />
        </div>
      </div>
    </section>
  )
}