import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,

} from "@/components/ui/card"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useNavigate } from "react-router"
type joinformprops=
  React.ComponentProps<"div"> & {setuser: React.Dispatch<React.SetStateAction<usertype | null>>;};
export default function Joinform({
    setuser,
  className,
  ...props
}: joinformprops) {
  const navigate=useNavigate();
  const [secretpassdata,setsecretpassdata]=useState({
    passcode:""
  });
  function handlechange(e:React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
    setsecretpassdata({
        ...secretpassdata,
        [e.target.name]:e.target.value
    }
    )
  }
  async function handlesubmit(e: React.SubmitEvent<HTMLFormElement>){
    e.preventDefault();
    const response=await fetch(`${import.meta.env.VITE_URL}/join`,{
      method:"POST",
      headers:{
       "Content-Type":"application/json"
      },
      credentials:"include",
     body:JSON.stringify(secretpassdata)
    })
    const data=await response.json();
    setuser(data.user);
    navigate("/");
  }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardContent>
          <form onSubmit={handlesubmit}>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="passcode">Passcode</FieldLabel>
                <Input
                  id="passcode"
                  type="text"
                  placeholder="Its Secret"
                  name="passcode"
                  onChange={handlechange}
                  required
                />
              </Field>
              <Field>
                <Button type="submit">Submit</Button>
               
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}