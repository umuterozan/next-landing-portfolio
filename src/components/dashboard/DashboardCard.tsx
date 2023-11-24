type Props = {
  icon: React.ReactNode;
  title: number;
  description: string;
}

export default function DashboardCard({ icon, title, description }: Props) {
  return (
    <div className="bg-global-section-bg border-2 border-global-section-bg rounded-[25px] p-[30px] text-center xl:text-left flex flex-col-reverse gap-y-4 xl:flex-row xl:gap-y-0 items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="mt-3 text-sm text-global-text">{description}</p>
      </div>
      <div className="bg-primary-50 rounded-[10px] p-[10px] flex justify-center items-center w-[66px] h-[66px]">
        {icon}
      </div>
    </div>
  )
}