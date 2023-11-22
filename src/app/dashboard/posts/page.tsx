import { BsCalendar2Date } from "react-icons/bs"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "@/app/firebase"
import Link from "next/link"
import { formatDate } from "@/lib/helpers"
import DeleteBtn from "@/components/dashboard/DeleteBtn"

async function getPosts() {
  const querySnapshot = await getDocs(query(collection(db, 'posts'), orderBy('createdAt', 'desc')))

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
        <div key={post.id}>
          <div className="max-w-[326px]">
            <Link href={`../blog/${post.slug}`}>
              <div className="bg-cover bg-no-repeat rounded-[12px] h-[220px] px-[10px] py-[15px]" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/next-landing-portfolio.appspot.com/o/images%2F${post.image}?alt=media&token=c1c79610-6ee9-4320-89fe-4550ccf3bc24')` }}>
                <div className="text-primary-500 text-xs font-medium bg-primary-100 rounded-md py-1 px-4 inline-block">{post.category.slice(0,10)}</div>
              </div>
            </Link>
            <div className="px-[10px] py-[15px]">
              <Link href={`../blog/${post.slug}`}><h1 className="text-xl font-semibold text-white">{post.title.slice(0,27)}</h1></Link>
              <p className="mt-[10px] text-xs text-global-text">
                {post.content.slice(0, 138)}
              </p>
              <div className="mt-[10px] flex items-center gap-x-2">
                <BsCalendar2Date className="text-global-text w-5 h-5" />
                <span className="text-xs text-global-text">{formatDate(post.createdAt.toMillis())}</span>
              </div>
            </div>
          </div>
          <DeleteBtn collection="posts" docId={post.id} image={post.image} />
        </div>
      ))}
    </div>
  )
}