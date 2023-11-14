'use client'
import { doc, deleteDoc } from "firebase/firestore"
import { ref, deleteObject } from "firebase/storage"
import { db, storage } from "@/app/firebase"
import { useState } from "react"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import LoadingSpin from "../common/LoadingSpin"

type Props = {
  collection: string;
  docId: string;
  image: string;
}

export default function DeleteBtn({ collection, docId, image }: Props) {
  const [isDeleting, setDeleting] = useState(false)
  const router = useRouter()

  async function clickHandle() {
    const imageRef = ref(storage, `images/${image}`)
    
    setDeleting(true)
    await toast.promise(Promise.all([deleteObject(imageRef), deleteDoc(doc(db, collection, docId))]), {
      loading: 'Siliniyor...',
      success: 'Başarıyla silindi!',
      error: 'Silme başarısız!',
    })
    setDeleting(false)

    router.refresh()
  }

  return (
    <button disabled={isDeleting} onClick={clickHandle} className="font-semibold text-white text-sm py-3 px-5 bg-red-600 disabled:bg-transparent border border-red-600 disabled:border-primary-50 rounded-lg w-full">{isDeleting ? <LoadingSpin className="mx-auto w-5 h-5" /> : 'Sil'}</button>
  )
}