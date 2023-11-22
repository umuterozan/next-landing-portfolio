import { PiInstagramLogo, PiTwitterLogo, PiBehanceLogo, PiGithubLogo } from "react-icons/pi"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-global-section-bg py-[57px]">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white font-medium">2023 © Tüm hakları saklıdır.</h1>
        <div className="flex items-center gap-x-[30px] text-global-text">
          <Link href="#"><PiInstagramLogo className="w-9 h-9" /></Link>
          <Link href="#"><PiTwitterLogo className="w-9 h-9" /></Link>
          <Link href="#"><PiBehanceLogo className="w-9 h-9" /></Link>
          <Link href="#"><PiGithubLogo className="w-9 h-9" /></Link>
        </div>
      </div>
    </footer>
  )
}