import LogoHeaderNew from "../../assets/LogoHeaderNew.png";
import { NavLink } from "react-router-dom";
export const Header = () => {
    
    return (
        <div className="bg-[#03032C] flex justify-between items-center px-2 w-auto">
            <div className="flex items-center">
                <img
                    src={LogoHeaderNew}
                    alt="LogoHeader"
                    className="h-14 sm:h-16"
                />
                <h1 className="text-center text-white text-base sm:text-lg md:text-3xl">
                    Career Cruise
                </h1>
            </div>
            <div className="">
            </div>
            <div className=" text-white text-base sm:text-xl sm:mx-4">
                {/* <NavLink to="/student-dashboard" className="pr-4 hover:text-green-700">Student Dashboard</NavLink>
                <NavLink to="/dashboard" className="pr-4 hover:text-green-700">My Dashboard</NavLink>
                <NavLink to="/faculty-dashboard" className="pr-4 hover:text-green-700">Faculty Dashboard</NavLink> */}
                <NavLink to="/access-control" className="px-4 py-1 text-center bg-[#008000] rounded-lg shadow-lg hover:text-white-700 hover:bg-[#116BC7]">
                    Login
                </NavLink>
            </div>
        </div>
    );
};
