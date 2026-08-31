import { Button } from "@/components/ui/button"
import {Link} from "react-router"
import type {usertype} from "../types/usertype"
import { GalleryVerticalEnd } from "lucide-react"

type headerprops={
  user:usertype
}
export default function Header({user}:headerprops){
  let status="Guest";
 if(user){
 if(user.is_admin){
 status="Admin"
 }
 else if(user.is_member){
  status="Member"
 }
}
    return (
     <div className="h-20 flex justify-between items-center bg-green-200 text-3xl p-10 font-['Permanent_Marker']">
      <div className="flex justify-center items-center gap-5"><GalleryVerticalEnd className="size-10" />
      <Link to="/">The Inner Circle</Link></div>
      <div className="flex gap-10 items-center">
        <div>Status:{status}</div>
     <Link to="signup"> <Button className="w-20 h-12">Sign Up</Button></Link>
     <Link to="login"> <Button className="w-20 h-12">Log In</Button></Link>
      </div>
     </div>
    );
}