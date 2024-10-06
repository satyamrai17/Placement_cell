import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <>
            <div className="flex justify-evenly text-center text-base md:text-xl py-2 w-auto md:mx-24">
                <NavLink to="/" className="hover:text-blue-800 font-semibold">Home</NavLink>
                <NavLink to="/about" className="hover:text-blue-800 font-semibold">About</NavLink>
                <NavLink to="/internship" className="hover:text-blue-800 font-semibold">Internship</NavLink>
                <NavLink to="/drive" className="hover:text-blue-800 font-semibold">Drive</NavLink>
                <NavLink to="/contact" className="hover:text-blue-800 font-semibold">Contact</NavLink>
            </div>
        </>
    );
};
