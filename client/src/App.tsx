import { useState } from 'react'
import './App.css'
import{Outlet} from "react-router";
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx";
function App() {
  return (
  <div className='flex flex-col flex-1 h-screen'>
    <Header/>
    <div className='flex flex-1'>
    <Outlet/>
    </div>
    <Footer/>
  </div>
  )
}

export default App
