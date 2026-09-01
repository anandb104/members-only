import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import {
    Bubble,
    BubbleContent,
  } from "@/components/ui/bubble"
  import {
    Message,
    MessageAvatar,
    MessageContent,
    MessageHeader,
    MessageFooter,
  } from "@/components/ui/message"
import type { usertype } from "@/types/usertype"
import { useEffect, useState } from "react"
import type { messagetype } from "@/types/usertype"
  type MessageAvatarDemoprops={
    user:usertype|null
  }
  import {
    Field,
    FieldDescription,
    FieldLabel,
  } from "@/components/ui/field"
  import { Input } from "@/components/ui/input"
  import { Button } from "@/components/ui/button"
    export default function MessageAvatarDemo({user}:MessageAvatarDemoprops) {
    const[message,setmessage]=useState<messagetype[]>([]);
    const[newmessage,setnewmessage]=useState("");
    useEffect(()=>{
    async function findallmessage(){
      const response=await fetch(`${import.meta.env.VITE_URL}/message`);
      const data=await response.json();
     setmessage(data.messages);
    }
    findallmessage();
  },[])
  function handlechange(e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>){
    setnewmessage(e.target.value);
  }
  async function handlesubmit(){
    const response=await fetch(`${import.meta.env.VITE_URL}/message`,{
      method:"POST",
      credentials:"include",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        text:newmessage
      })
    });
    if(!response.ok)return;
    const response2 = await fetch(`${import.meta.env.VITE_URL}/message`);
    const data = await response2.json();
    setmessage(data.messages);
    setnewmessage("");
  }
    return (
      <div className="flex">
      {message.map((item)=>{
        return (
         <Message key={item.id}>
         <MessageAvatar>
         <Avatar>
         <AvatarImage src="https://github.com/shadcn.png" alt="avatar"/>
         <AvatarFallback>U</AvatarFallback>
         </Avatar>
         </MessageAvatar>
         <MessageContent>
         {user?.is_member && (
          <>
          <MessageHeader>{item.username}</MessageHeader>
          <MessageFooter>
          {new Date(item.timestamp).toLocaleString()}
        </MessageFooter>
        </>
         )
         }
        <Bubble>
            <BubbleContent>
              {item.text}
            </BubbleContent>
          </Bubble>
        </MessageContent>
         </Message>
        )
      })}
      <div>
      {user?.is_member && <>
        <Field orientation="horizontal">
      <Input type="text" placeholder="Enter your message" name="text" value={newmessage} onChange={handlechange} />
      <Button onClick={handlesubmit}>Submit</Button>
    </Field>
      </>
      }
      {!user?.is_member && <>
        <Field data-disabled>
      <FieldLabel htmlFor="input-demo-disabled">Your Message</FieldLabel>
      <Input
        id="input-demo-disabled"
        type="text"
        placeholder="Login to write a message"
        disabled
      />
      <FieldDescription>This field is currently disabled.</FieldDescription>
    </Field>
      </>
      }
      </div>
      </div>
    )
  }
  