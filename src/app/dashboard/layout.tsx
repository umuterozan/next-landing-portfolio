import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-[150px]">
      <div className="container mx-auto">
        <div className="flex items-center gap-x-4 border-b-2 border-primary-600 pb-2">
          <Link href="/dashboard" className="font-semibold text-white py-3 px-5 bg-primary-600 border border-primary-600 rounded-lg w-full flex justify-center items-center">
            Dashboard
          </Link>
          <Link href="/dashboard/projects" className="font-semibold text-white py-3 px-5 bg-primary-600 border border-primary-600 rounded-lg w-full flex justify-center items-center">
            Projeleri Listele
          </Link>
          <Link href="/dashboard/posts" className="font-semibold text-white py-3 px-5 bg-primary-600 border border-primary-600 rounded-lg w-full flex justify-center items-center">
            Yazıları Listele
          </Link>
          <Link href="/dashboard/add-project" className="font-semibold text-white py-3 px-5 bg-primary-600 border border-primary-600 rounded-lg w-full flex justify-center items-center">
            Proje Ekle
          </Link>
          <Link href="/dashboard/add-post" className="font-semibold text-white py-3 px-5 bg-primary-600 border border-primary-600 rounded-lg w-full flex justify-center items-center">
            Yazı Ekle
          </Link>
        </div>
        {children}
      </div>
    </section>
  );
}
