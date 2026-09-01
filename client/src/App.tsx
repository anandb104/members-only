import './App.css'
import{Outlet} from "react-router";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import type { usertype } from './types/usertype.ts';
type appprops={
  user:usertype|null,
  setuser:React.Dispatch<React.SetStateAction<usertype|null>>
}
function App({user,setuser}:appprops) {
  return (
  <div className='flex flex-col flex-1 h-screen'>
    <Header user={user} setuser={setuser}/>
    <div className='flex flex-1 h-full w-full overflow-y-scroll items-center justify-center font-["Lobster_Two"]'>
    <Outlet/>
    </div>
    <Footer/>
  </div>
  )
}

export default App
