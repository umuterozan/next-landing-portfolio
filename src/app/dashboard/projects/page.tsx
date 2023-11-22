import { BiSearch } from "react-icons/bi"
import { collection, getDocs, query, orderBy } from "firebase/firestore"
import { db } from "@/app/firebase"
import Link from "next/link"
import { formatDate } from "@/lib/helpers"
import DeleteBtn from "@/components/dashboard/DeleteBtn"

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

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <div className="mt-[50px] grid grid-cols-3 gap-x-[25px] gap-y-[22px]">
      {projects.map((project) => (
        <div key={project.id}>
          <Link href={project.url} target="blank">
            <div className="bg-cover bg-no-repeat max-w-[450px] h-[400px] rounded-[25px] group" style={{ backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/next-landing-portfolio.appspot.com/o/images%2F${project.image}?alt=media&token=c1c79610-6ee9-4320-89fe-4550ccf3bc24')` }}>
              <div className="w-full h-full group-hover:h-0 transition-all duration-300 px-[30px] py-[50px] group-hover:p-0 overflow-hidden rounded-[25px] bg-black bg-opacity-80">
                <div className="flex flex-col w-full h-full justify-center items-center gap-y-[15px]">
                  <h2 className="text-sm font-medium text-[#AAB5C2] break-all">{project.category}</h2>
                  <h1 className="text-3xl font-semibold text-white break-all">{project.title}</h1>
                  <h3 className="text-sm text-white">{formatDate(project.createdAt.toMillis())}</h3>
                </div>
                <button className="flex items-center gap-x-2 mx-auto">
                  <BiSearch className="w-5 h-5 text-primary-200" />
                  <span className="font-semibold text-primary-200">Görüntüle</span>
                </button>
              </div>
            </div>
          </Link>
          <DeleteBtn collection="projects" docId={project.id} image={project.image} />
        </div>
      ))}
    </div>
  )
}