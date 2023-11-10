'use client'
import { doc, deleteDoc } from "firebase/firestore"
import { ref, deleteObject } from "firebase/storage"
import { db, storage } from "@/app/firebase"
import { useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import toast from "react-hot-toast"

type Props = {
  collection: string;
  docId: string;
  image: string;
}

export default function DeleteBtn({ collection, docId, image }: Props) {
  const [isDeleting, setDeleting] = useState(false)

  async function clickHandle() {
    const imageRef = ref(storage, `images/${image}`)
    
    setDeleting(true)
    await toast.promise(Promise.all([deleteObject(imageRef), deleteDoc(doc(db, collection, docId))]), {
      loading: 'Siliniyor...',
      success: 'Başarıyla silindi!',
      error: 'Silme başarısız!',
    })
    setDeleting(false)
  }

  return (
    <button disabled={isDeleting} onClick={clickHandle} className="font-semibold text-white text-sm py-3 px-5 bg-red-600 disabled:bg-transparent border border-red-600 disabled:border-primary-50 rounded-lg w-full">{isDeleting ? <AiOutlineLoading3Quarters className="animate-spin mx-auto w-5 h-5" /> : 'Sil'}</button>
  )
}