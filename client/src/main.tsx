import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Signup from "./components/Signup.tsx";
import Login from "./components/Login.tsx";
import Message from "./components/Message.tsx";
import type { usertype } from './types/usertype.ts';
import { createBrowserRouter,RouterProvider } from 'react-router';
function Main(){
  const [user,setuser]=useState<usertype|null>(null);
  useEffect(()=>{
    async function getuser(){
     const response=await fetch(`${import.meta.env.VITE_URL}/auth/me`,{
      credentials:"include"
     })
     const data=await response.json();
     setuser(data.user);
    }
    getuser();
  },[])
  const router=createBrowserRouter([
    {
      path:"/",
    element:<App user={user}/>,
    children:[
      {path:"signup",element:<Signup/>},
      {path:"login",element:<Login setuser={setuser}/>},
      {path:"/",element:<Message/>},
    ]
  },
  ]);
  return <RouterProvider router={router}/>
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main/>
  </StrictMode>,
)

