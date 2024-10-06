import { NavLink } from "react-router-dom";
import LogoHeaderNew from "../../assets/LogoHeaderNew.png"

export const Footer = () => {
    return (<div className="bg-[#03032C]">
        <div className="md:flex justify-evenly text-white text-justify p-4 h-auto">
            <div className="md:w-1/3 p-8 ">
                <img src={LogoHeaderNew} alt="Logo" className="h-20 m-auto"/>
                <p className="text-xl">
                    Career Cruise is a software project designed to streamline
                    job opportunities for fresh graduates. Contributes to the
                    professional growth of freshers while aiding companies in
                    identifying and hiring emerging talent.
                </p>
            </div>
            <div className="md:w-1/3 p-8">
                <h1 className="text-xl px-1 py-4">IMPORTANT LINKS</h1>
                <NavLink
                    to="/"
                    className="block text-lg hover:text-green-800"
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className="block text-lg hover:text-green-800"
                >
                    About us
                </NavLink>
                <NavLink
                    to="/internship"
                    className="block text-lg hover:text-green-800"
                >
                    Internship
                </NavLink>
                <NavLink
                    to="/drive"
                    className="block text-lg hover:text-green-800"
                >
                    Drive
                </NavLink>
                <NavLink
                    to="/contact"
                    className="block text-lg hover:text-green-800"
                >
                    Contact us
                </NavLink>
            </div>
            <div className="md:w-1/3 p-8">
                <h1 className="text-xl md:text-2xl px-1 py-4 font-bold">
                    Developed By Career Cruise Team
                </h1>
                <p className="">
                    <span className="text-xl font-semibold ">
                        Team Members :
                    </span>
                    <br />
                    <span className="text-lg">Abhishek Shukla</span>
                    <br />
                    <span className="text-lg">Dayashankar Yadav</span>
                    <br />
                    <span className="text-lg">Satyam Rai</span>
                    <br />
                    <span className="text-lg">Priyanshu Jaiswal</span>
                    
                    
                </p>
            </div>
        </div>
            <p className="text-[#fff] text-center block text-xl pb-4">All Rights Reserved</p>
    </div>);
};
