import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {Link} from "react-router"
import { useState } from "react"
import { useNavigate } from "react-router"
export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
    const navigate=useNavigate();
    const [form,setform]=useState({
        firstname:"",
        lastname:"",
        username:"",
        password:"",
        confirmpassword:""});

        function handlechange(e:React.ChangeEvent<HTMLInputElement>){
            setform(
                {
                    ...form,
                    [e.target.name]:e.target.value
                }
            );
        }
       async function handlesubmit(e:React.SubmitEvent<HTMLFormElement>){
           e.preventDefault();
          await fetch(`${import.meta.env.VITE_URL}/signup`,
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                 },
                 credentials:"include",
               body:JSON.stringify(form)
            }
          )
          navigate("/login");
        }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handlesubmit} >
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="firstname">First Name</FieldLabel>
                <Input id="firstname" type="text" placeholder="John" name="firstname" required onChange={handlechange}/>
              </Field>
              <Field>
                <FieldLabel htmlFor="lastname">Last Name</FieldLabel>
                <Input id="lastname" type="text" placeholder="Doe" name="lastname" onChange={handlechange} required />
              </Field>
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input
                  id="username"
                  type="text"
                  placeholder="mb103"
                  name="username"
                  onChange={handlechange}
                  required
                />
              </Field>
              
              <Field>
                <Field className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="password">Password</FieldLabel>
                    <Input id="password" type="password" name="password" onChange={handlechange} required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="confirmpassword">
                      Confirm Password
                    </FieldLabel>
                    <Input id="confirmpassword" type="password" onChange={handlechange} required name="confirmpassword" />
                  </Field>
                </Field>
                <FieldDescription>
                  Must be at least 8 characters long.
                </FieldDescription>
              </Field>
              <Field>
                <Button type="submit">Create Account</Button>
                <FieldDescription className="text-center">
                  Already have an account? <Link to="/login">Sign in</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}
