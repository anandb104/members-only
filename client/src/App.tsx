import './App.css'
import{Outlet} from "react-router";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import type { usertype } from './types/usertype.ts';
type appprops={
  user:usertype
}
function App({user}:appprops) {
  return (
  <div className='flex flex-col flex-1 h-screen'>
    <Header user={user}/>
    <div className='flex flex-1 h-full w-full overflow-y-scroll font-["Lobster_Two"]'>
    <Outlet/>
    </div>
    <Footer/>
  </div>
  )
}

export default App
