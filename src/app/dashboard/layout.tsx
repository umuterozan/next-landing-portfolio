'use client'

import Link from "next/link";
import { useAuth } from '@/context/AuthContext'
import { useState, useEffect } from "react"
import LoadingSpin from "@/components/common/LoadingSpin";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, signInAsAdmin, logOut }: any = useAuth()
  const [loading, setLoading] = useState(true)
  const pathname = usePathname()

  const handleSignIn = async () => {
    const email = prompt("E-posta adresi:")
    const password = prompt("Şifre:")
    await signInAsAdmin(email, password)
  }

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 250))
      setLoading(false)
    }

    checkAuthentication()
  }, [user])

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpin className="w-10 h-10 text-white" />
      </div>
    )
  }

  return (
    <section className="py-[150px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap xl:flex-nowrap items-center gap-4 border-b-2 border-primary-600 pb-2">
          {user ? (
            <>
              <Link href="/dashboard" className={`font-semibold text-white py-3 px-5 hover:bg-primary-50 transition-all border border-primary-600 rounded-lg w-full flex justify-center items-center ${pathname === '/dashboard' ? 'bg-primary-50' : 'bg-primary-600'}`}>
                Dashboard
              </Link>
              <Link href="/dashboard/projects" className={`font-semibold text-white py-3 px-5 hover:bg-primary-50 transition-all border border-primary-600 rounded-lg w-full flex justify-center items-center ${pathname === '/dashboard/projects' ? 'bg-primary-50' : 'bg-primary-600'}`}>
                Projeleri Listele
              </Link>
              <Link href="/dashboard/posts" className={`font-semibold text-white py-3 px-5 hover:bg-primary-50 transition-all border border-primary-600 rounded-lg w-full flex justify-center items-center ${pathname === '/dashboard/posts' ? 'bg-primary-50' : 'bg-primary-600'}`}>
                Yazıları Listele
              </Link>
              <Link href="/dashboard/add-project" className={`font-semibold text-white py-3 px-5 hover:bg-primary-50 transition-all border border-primary-600 rounded-lg w-full flex justify-center items-center ${pathname === '/dashboard/add-project' ? 'bg-primary-50' : 'bg-primary-600'}`}>
                Proje Ekle
              </Link>
              <Link href="/dashboard/add-post" className={`font-semibold text-white py-3 px-5 hover:bg-primary-50 transition-all border border-primary-600 rounded-lg w-full flex justify-center items-center ${pathname === '/dashboard/add-post' ? 'bg-primary-50' : 'bg-primary-600'}`}>
                Yazı Ekle
              </Link>
              <button onClick={logOut} className="font-semibold text-white py-3 px-5 bg-primary-600 hover:bg-primary-50 transition-all border border-primary-600 rounded-lg w-full flex justify-center items-center">
                Çıkış Yap
              </button>
            </>
          ): (
            <button onClick={handleSignIn} className="font-semibold text-white py-3 px-5 bg-primary-600 hover:bg-primary-50 transition-all border border-primary-600 rounded-lg w-full flex justify-center items-center">
              Giriş Yap
            </button>
          )}
        </div>
        {user ? (
          <>
            <h1 className="mt-2 text-white text-center text-sm">{user.email} - Son Giriş Tarihi: {new Date(user.metadata.lastSignInTime).toLocaleDateString('tr-TR', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            })}</h1>
            {children}
          </>
        ) : (
          <h1 className="mt-2 text-white text-center">Sayfayı görüntülemek için giriş yapın.</h1>
        )}
      </div>
    </section>
  );
}
