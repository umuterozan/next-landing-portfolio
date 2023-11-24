import { PiInstagramLogo, PiTwitterLogo, PiBehanceLogo, PiGithubLogo } from "react-icons/pi"
import Link from "next/link"

const links = [
  {
    href: "#",
    icon: <PiInstagramLogo className="w-9 h-9 hover:text-primary-500" />,
  },
  {
    href: "#",
    icon: <PiTwitterLogo className="w-9 h-9 hover:text-primary-500" />,
  },
  {
    href: "#",
    icon: <PiBehanceLogo className="w-9 h-9 hover:text-primary-500" />,
  },
  {
    href: "#",
    icon: <PiGithubLogo className="w-9 h-9 hover:text-primary-500" />,
  },
]

export default function Footer() {
  return (
    <footer className="bg-global-section-bg py-[57px]">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-8 sm:gap-0 sm:justify-between">
        <h1 className="text-white font-medium">2023 © Tüm hakları saklıdır.</h1>
        <div className="flex flex-wrap justify-center items-center gap-[30px] text-global-text">
          {links.map((link, index) => (
            <Link key={index} href={link.href}>{link.icon}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}