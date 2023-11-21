'use client'

import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="mt-[50px]">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link href="/" className="hover:text-primary-500 transition-all"><span className="font-bold text-2xl">BYRKTR</span></Link>
        <nav>
          <ul className="font-medium text-xl flex items-center gap-x-10">
            <Link href="/#about" className="hover:text-primary-500 transition-all"><li>Hakkımda</li></Link>
            <Link href="/#skills" className="hover:text-primary-500 transition-all"><li>Yeteneklerim</li></Link>
            <Link href="/projects" className={`hover:text-primary-500 transition-all ${pathname === '/projects' ? 'active' : ''}`}><li>Çalışmalarım</li></Link>
            <Link href="/blog" className={`hover:text-primary-500 transition-all ${pathname === '/blog' ? 'active' : ''}`}><li>Blog</li></Link>
            <Link href="/#contact" className="hover:text-primary-500 transition-all"><li>İletişim</li></Link>
          </ul>
        </nav>
      </div>
    </header>
  )
}
