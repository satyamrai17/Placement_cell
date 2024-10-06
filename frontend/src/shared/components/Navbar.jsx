import { Home } from "../../modules/home/Home.jsx"
import { Header } from "./Header"
import { Navigation } from "./Navigation"

export const Navbar = () =>{
    return(
        <>
        <div className="">
            <Header/>
            <Navigation/>
        </div>
        <Home/>
        </>)
}