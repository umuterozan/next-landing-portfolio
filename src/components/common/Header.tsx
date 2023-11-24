'use client'

import { Toaster } from "react-hot-toast";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const title = "BYRKTR"

export default function Header() {
  const pathname = usePathname()
  const [isHamburgerOpen, setHamburgerOpen] = useState(false)

  return (
    <header className="mt-[50px]">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="container mx-auto flex items-center justify-between text-white">
        <Link href="/" className="hover:text-primary-500 transition-all"><span className="font-bold text-2xl">{title}</span></Link>
        <nav>
          <ul className="font-medium text-xl hidden lg:flex items-center gap-x-10">
            <Link href="/#about" className="hover:text-primary-500 transition-all"><li>Hakkımda</li></Link>
            <Link href="/#skills" className="hover:text-primary-500 transition-all"><li>Yeteneklerim</li></Link>
            <Link href="/projects" className={`hover:text-primary-500 transition-all ${pathname === '/projects' ? 'active' : ''}`}><li>Çalışmalarım</li></Link>
            <Link href="/blog" className={`hover:text-primary-500 transition-all ${pathname === '/blog' ? 'active' : ''}`}><li>Blog</li></Link>
            <Link href="/#contact" className="hover:text-primary-500 transition-all"><li>İletişim</li></Link>
          </ul>
        </nav>
        <div className="block lg:hidden">
          {isHamburgerOpen ? <button onClick={() => setHamburgerOpen(false)}><MdClose className="text-4xl" /></button> : <button onClick={() => setHamburgerOpen(true)}><MdMenu className="text-4xl" /></button>}
        </div>
      </div>
      {isHamburgerOpen && (
        <div className="block lg:hidden mt-4 bg-global-section-bg">
          <nav>
            <ul className="font-medium text-xl text-white text-center grid">
              <Link href="/#about" className="hover:text-primary-500 px-2 py-4 hover:bg-primary-50 transition-all"><li>Hakkımda</li></Link>
              <Link href="/#skills" className="hover:text-primary-500 px-2 py-4 hover:bg-primary-50 transition-all"><li>Yeteneklerim</li></Link>
              <Link href="/projects" className={`hover:text-primary-500 px-2 py-4 hover:bg-primary-50 transition-all ${pathname === '/projects' ? 'active bg-primary-50' : ''}`}><li>Çalışmalarım</li></Link>
              <Link href="/blog" className={`hover:text-primary-500 px-2 py-4 hover:bg-primary-50 transition-all ${pathname === '/blog' ? 'active bg-primary-50' : ''}`}><li>Blog</li></Link>
              <Link href="/#contact" className="hover:text-primary-500 px-2 py-4 hover:bg-primary-50 transition-all"><li>İletişim</li></Link>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}
