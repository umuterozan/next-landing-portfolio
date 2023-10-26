export default function Header() {
  return (
    <header className="mt-[50px]">
      <div className="container mx-auto flex items-center justify-between text-white">
        <span className="font-bold text-2xl">BYRKTR</span>
        <nav>
          <ul className="font-medium text-xl flex items-center gap-x-10">
            <li>Hakkımda</li>
            <li>Yeteneklerim</li>
            <li>Çalışmalarım</li>
            <li>Blog</li>
            <li>İletişim</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
