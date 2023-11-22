import { PiInstagramLogo, PiTwitterLogo, PiBehanceLogo, PiGithubLogo } from "react-icons/pi"
import ContactForm from "./ContactForm"
import Link from "next/link"

const links = [
  {
    href: "#",
    name: "Instagram",
    username: "@muzaffer.byrktrr",
    icon: <PiInstagramLogo className="w-9 h-9 text-primary-500" />,
  },
  {
    href: "#",
    name: "Twitter (X)",
    username: "@twitter",
    icon: <PiTwitterLogo className="w-9 h-9 text-primary-500" />,
  },
  {
    href: "#",
    name: "Behance",
    username: "behance.net/byrktr",
    icon: <PiBehanceLogo className="w-9 h-9 text-primary-500" />,
  },
  {
    href: "#",
    name: "Github",
    username: "github.com/MuzafferBYRKTR",
    icon: <PiGithubLogo className="w-9 h-9 text-primary-500" />,
  },
]

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
            {links.map((link, index) => (
              <Link key={index} href={link.href}>
                <div className="flex items-center gap-x-[30px] bg-global-section-bg hover:bg-primary-50 transition-all py-5 px-[30px] rounded-[14px]">
                  {link.icon}
                  <div>
                    <h1 className="font-medium text-white">{link.name}</h1>
                    <h2 className="mt-[5px] text-sm font-medium text-global-text">{link.username}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}