import { GalleryVerticalEnd } from "lucide-react"
import Joinform from "../components/Joinform.tsx"
import type{usertype} from "../types/usertype"
type joinprop={
    setuser: React.Dispatch<React.SetStateAction<usertype | null>>
 }
export default function Join({setuser}:joinprop) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10 w-full">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          The Inner Circle
        </a>
        <Joinform setuser={setuser}/>
      </div>
    </div>
  )
}
