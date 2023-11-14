import { AiOutlineLoading3Quarters } from "react-icons/ai"

export default function LoadingSpin({ className }: { className: string }) {
  return (
    <AiOutlineLoading3Quarters className={`${className} animate-spin`} />
  )
}