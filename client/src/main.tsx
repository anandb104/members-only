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
  // let [user,setuser]=useState<usertype|null>(null);
  // useEffect(()=>{
  //   async function getuser(){
  //    let response=fetch("http://localhost:3000/auth/me")
  //   }
  // })
  const router=createBrowserRouter([
    {
      path:"/",
    element:<App/>,
    children:[
      {path:"signup",element:<Signup />},
      {path:"login",element:<Login/>},
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

