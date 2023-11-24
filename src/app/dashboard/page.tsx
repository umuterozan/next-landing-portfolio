import { IoIosApps } from "react-icons/io"
import { BsFileText } from "react-icons/bs"
import { FaPeopleGroup } from "react-icons/fa6"
import DashboardCard from "@/components/dashboard/DashboardCard"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

async function getCounts() {
  const projects = await getDocs(collection(db, 'projects'))
  const posts = await getDocs(collection(db, 'posts'))

  return {
    projectsCount: projects.size,
    postsCount: posts.size,
  }
}

export default async function Dashboard() {
  const { projectsCount, postsCount } = await getCounts()

  return (
    <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[50px]">
      <DashboardCard icon={<IoIosApps className="text-3xl text-white" />} title={projectsCount} description="Yüklenmiş projelerin sayısı" />
      <DashboardCard icon={<BsFileText className="text-3xl text-white" />} title={postsCount} description="Yüklenmiş yazıların sayısı" />
      <DashboardCard icon={<FaPeopleGroup className="text-3xl text-white" />} title={254} description="Siteyi ziyaret edenlerin sayısı" />
    </div>
  )
}