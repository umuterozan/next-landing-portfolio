import { BsCalendar2Date } from "react-icons/bs"
import { GoArrowUpRight } from "react-icons/go"
import { collection, getDocs, query, limit, orderBy } from "firebase/firestore"
import { db } from "@/app/firebase"
import Link from "next/link"
import { formatDate } from "@/lib/helpers"

async function getPosts() {
  const querySnapshot = await getDocs(query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(4)))

  const posts: any[] = []

  querySnapshot.forEach((doc) => {
    const postData = doc.data()
    const postId = doc.id
    posts.push({ id: postId, ...postData })
  })

  return posts
}

export default async function BlogSection() {
  const posts = await getPosts()

  return (
    <section className="py-[150px]">
      <div className="container mx-auto">
        <h3 className="text-2xl text-primary-600">Blog</h3>
        <h1 className="mt-2 text-5xl font-semibold text-white">Yazılarım</h1>
        <div className="mt-[50px] flex justify-between gap-x-8">
          {posts.map((post) => (
            <div key={post.id} className="w-[326px]">
              <Link href={`/posts/${post.slug}`}>
                <div className="bg-[url('/blogbg.jpg')] bg-cover bg-no-repeat rounded-[12px] h-[220px] px-[10px] py-[15px]">
                  <div className="text-primary-500 text-xs font-medium bg-primary-100 rounded-md py-1 px-4 inline-block">{post.category}</div>
                </div>
              </Link>
              <div className="px-[10px] py-[15px]">
                <Link href={`/posts/${post.slug}`}><h1 className="text-xl font-semibold text-white">{post.title}</h1></Link>
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
        <button className="mt-[50px] mx-auto px-5 py-3 flex items-center gap-x-2 bg-[#182E53] rounded-lg">
          <span className="font-semibold text-primary-600">Tüm Yazılarım</span>
          <GoArrowUpRight className="w-5 h-5 text-primary-600" />
        </button>
      </div>
    </section>
  )
}