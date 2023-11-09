import { BsCalendar2Date } from "react-icons/bs"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/app/firebase"
import Link from "next/link"
import { formatDate } from "@/lib/helpers"

async function getPosts() {
  const querySnapshot = await getDocs(collection(db, 'posts'))

  const posts: any[] = []

  querySnapshot.forEach((doc) => {
    const postData = doc.data()
    const postId = doc.id
    posts.push({ id: postId, ...postData })
  })

  return posts
}

export default async function PostsPage() {
  const posts = await getPosts()

  return (
    <div className="mt-[50px] grid grid-cols-4 justify-between gap-8">
      {posts.map((post) => (
        <div key={post.id} className="max-w-[326px]">
          <Link href={`../posts/${post.slug}`}>
            <div className="bg-[url('/blogbg.jpg')] bg-cover bg-no-repeat rounded-[12px] h-[220px] px-[10px] py-[15px]">
              <div className="text-primary-500 text-xs font-medium bg-primary-100 rounded-md py-1 px-4 inline-block">{post.category}</div>
            </div>
          </Link>
          <div className="px-[10px] py-[15px]">
            <Link href={`../posts/${post.slug}`}><h1 className="text-xl font-semibold text-white">{post.title}</h1></Link>
            <p className="mt-[10px] text-xs text-global-text">
              {post.content}
            </p>
            <div className="mt-[10px] flex items-center gap-x-2">
              <BsCalendar2Date className="text-global-text w-5 h-5" />
              <span className="text-xs text-global-text">{formatDate(post.createdAt.toMillis())}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}