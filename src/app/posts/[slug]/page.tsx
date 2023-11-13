import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "@/app/firebase"
import { BsCalendar2Date } from "react-icons/bs"
import { formatDate } from "@/lib/helpers"
import { notFound } from "next/navigation"

async function getPostBySlug(slug: string) {
  const querySnapshot = await getDocs(query(collection(db, 'posts'), where('slug', '==', slug)))

  if (querySnapshot.size === 0) {
    notFound()
  }

  const doc = querySnapshot.docs[0]

  const postData = doc.data()
  const postId = doc.id

  return { id: postId, ...postData }
}

export default async function Post({ params }: { params: { slug: string }}) {
  const post: any = await getPostBySlug(params.slug)

  return (
    <section className="py-[50px]">
      <div className="container mx-auto">
        <div>
          <div className="bg-cover bg-no-repeat rounded-[12px] h-[620px] px-[10px] py-[15px]" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/next-landing-portfolio.appspot.com/o/images%2F${post.image}?alt=media&token=c1c79610-6ee9-4320-89fe-4550ccf3bc24')` }}>
            <div className="text-primary-500 text-xs font-medium bg-primary-100 rounded-md py-1 px-4 inline-block">{post.category}</div>
          </div>
          <div className="px-[10px] py-[30px]">
            <h1 className="text-xl font-semibold text-white">{post.title}</h1>
            <p className="mt-[20px] text-xs text-global-text">
              {post.content}
            </p>
            <div className="mt-[20px] flex items-center gap-x-2">
              <BsCalendar2Date className="text-global-text w-5 h-5" />
              <span className="text-xs text-global-text">{formatDate(post.createdAt.toMillis())}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}