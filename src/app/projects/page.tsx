import { BiSearch } from "react-icons/bi"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "@/app/firebase"
import { formatDate } from "@/lib/helpers"
import Link from "next/link"

async function getProjects() {
  const querySnapshot = await getDocs(query(collection(db, 'projects'), orderBy('createdAt', 'desc')))

  const projects: any[] = []

  querySnapshot.forEach((doc) => {
    const projectData = doc.data()
    const projectId = doc.id
    projects.push({ id: projectId, ...projectData })
  })

  return projects
}

export default async function Projects() {
  const projects = await getProjects()

  return (
    <section className="py-[50px]">
      <div className="container mx-auto">
        <h2 className="text-2xl text-primary-600">Çalışmalarım</h2>
        <h1 className="mt-2 text-5xl font-semibold text-white">Yaptığım Projeler ve İşler</h1>
        <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[25px] gap-y-[22px]">
          {projects.map((project) => (
            <div key={project.id} className="bg-cover bg-no-repeat md:max-w-[450px] h-[400px] rounded-[25px] group" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/next-landing-portfolio.appspot.com/o/images%2F${project.image}?alt=media&token=c1c79610-6ee9-4320-89fe-4550ccf3bc24')` }}>
              <div className="w-full h-0 group-hover:h-full transition-all duration-300 p-0 group-hover:px-[30px] group-hover:py-[50px] overflow-hidden rounded-[25px] bg-black bg-opacity-80">
                <div className="flex flex-col w-full h-full justify-center items-center gap-y-[15px]">
                  <h2 className="text-sm font-medium text-[#AAB5C2] break-all">{project.category}</h2>
                  <h1 className="text-3xl font-semibold text-white break-all">{project.title}</h1>
                  <h3 className="text-sm text-white">{formatDate(project.createdAt.toMillis())}</h3>
                </div>
                <button className="flex items-center gap-x-2 mx-auto">
                  <BiSearch className="w-5 h-5 text-primary-200" />
                  <Link href={project.url} target="blank"><span className="font-semibold text-primary-200">Görüntüle</span></Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}