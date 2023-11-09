import { BiSearch } from "react-icons/bi"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/app/firebase"
import Link from "next/link"
import { formatDate } from "@/lib/helpers"

async function getProjects() {
  const querySnapshot = await getDocs(collection(db, 'projects'))

  const projects: any[] = []

  querySnapshot.forEach((doc) => {
    const projectData = doc.data()
    const projectId = doc.id
    projects.push({ id: projectId, ...projectData })
  })

  return projects
}

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="mt-[50px] grid grid-cols-3 gap-x-[25px] gap-y-[22px]">
      {projects.map((project) => (
        <div key={project.id} className="bg-[url('/projectbox.png')] bg-cover bg-no-repeat max-w-[450px] h-[400px] rounded-[25px] group">
          <div className="w-full h-0 group-hover:h-full transition-all duration-300 p-0 group-hover:px-[30px] group-hover:py-[50px] overflow-hidden rounded-[25px] bg-black bg-opacity-80">
            <div className="flex flex-col w-full h-full justify-center items-center gap-y-[15px]">
              <h2 className="text-sm font-medium text-[#AAB5C2]">{project.category}</h2>
              <h1 className="text-3xl font-semibold text-white">{project.title}</h1>
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
  )
}