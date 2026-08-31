import { Button } from "@/components/ui/button"
import {Link} from "react-router"
export default function Header(){
    return (
     <div className="h-20 flex justify-between items-center bg-green-200 text-2xl p-10">
      <div>The Inner Circle</div>
      <div className="flex gap-7 items-center">
        <div>Status:Guest</div>
     <Link to="signup"> <Button>Sign Up</Button></Link>
     <Link to="login"> <Button>Log In</Button></Link>
      </div>
     </div>
    );
}