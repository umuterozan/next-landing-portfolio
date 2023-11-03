export default function AddPostForm() {
  return (
    <form className="mt-8 flex flex-col gap-y-8">
      <div>
        <label htmlFor="category" className="text-sm font-medium text-white">Kategori</label>
        <input className="mt-1 block w-full py-[15px] px-3 bg-global-section-bg text-white text-sm placeholder:text-sm placeholder:text-global-text border border-global-section-bg hover:border-primary-500 focus:border-2 focus:border-primary-500 rounded-lg outline-none" type="text" placeholder="Arayüz Tasarımı" name="category" id="category" />
      </div>
      <div>
        <label htmlFor="title" className="text-sm font-medium text-white">Başlık</label>
        <input className="mt-1 block w-full py-[15px] px-3 bg-global-section-bg text-white text-sm placeholder:text-sm placeholder:text-global-text border border-global-section-bg hover:border-primary-500 focus:border-2 focus:border-primary-500 rounded-lg outline-none" type="text" placeholder="VPN App Design" name="title" id="title" />
      </div>
      <div>
        <label htmlFor="content" className="text-sm font-medium text-white">İçerik</label>
        <textarea className="h-40 mt-1 block w-full py-[10px] px-3 bg-global-section-bg text-white text-sm placeholder:text-sm placeholder:text-global-text border border-global-section-bg hover:border-primary-500 focus:border-2 focus:border-primary-500 rounded-lg outline-none" placeholder="En fazla 5000 karakter..." name="content" id="content" />
      </div>
      <div>
        <label htmlFor="image" className="text-sm font-medium text-white">Görsel</label>
        <input className="mt-1 block w-full py-[15px] px-3 bg-global-section-bg text-white text-sm placeholder:text-sm placeholder:text-global-text border border-global-section-bg hover:border-primary-500 focus:border-2 focus:border-primary-500 rounded-lg outline-none" type="file" name="image" id="image" />
      </div>
      <button type="submit" className="font-semibold text-white py-3 px-5 bg-primary-600 border border-primary-600 rounded-lg">Yazıyı Ekle</button>
    </form>
  )
}