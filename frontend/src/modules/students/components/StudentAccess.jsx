//StudentAccess.jsx
import { NavLink, useNavigate } from "react-router-dom"

export const StudentAccess = () =>{
    const navigate = useNavigate();
    const logout = () =>{
        alert("are you sure to Logout ?");
        navigate('/');
    }
    return(<>
        <div >
            <NavLink to="" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Profile</NavLink>
            <NavLink to="/drive" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Companies</NavLink>
            <NavLink to="/student-prepare" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Prepare</NavLink>
            <NavLink to="/test-list" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Test Yourself</NavLink>
            <NavLink to="/student-results" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Performance</NavLink>
            <NavLink to="https://www.linkedin.com/jobs/" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Off Campus Job</NavLink>
            {/* <NavLink to="/" className="block p-2 text-lg hover:text-white hover:bg-[#808000]">Logout</NavLink> */}
            <button onClick={logout} className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff] w-[100%] text-left">Logout</button>

        </div>
    </>)
}