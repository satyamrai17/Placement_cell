import { NavLink, useNavigate } from "react-router-dom"

export const FacultyNavbar = () =>{
    const navigate = useNavigate();
    const logout = () =>{
        alert("are you sure to Logout ?");
        navigate('/');
    }
    return(<div className="">
        
        <div >
            <NavLink to="/add-company" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Add Company</NavLink>
            <NavLink to="/assign-test" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Assign test</NavLink>
            {/* <NavLink to="/delete" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Remove Company</NavLink> */}
            {/* <NavLink to="/search" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Search Company</NavLink> */}
            <NavLink to="/drive" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Companies List</NavLink>
            <NavLink to="/admin-upload-notes" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Upload Notes</NavLink>
            <NavLink to="/all-results" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Students Results</NavLink>
            {/* <NavLink to="/assign-test" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Assign test</NavLink>*/}
            <NavLink to="/student-list" className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff]">Student List</NavLink> 
            <button onClick={logout} className="block text-lg hover:text-green-900 p-2 hover:bg-[#fff] w-[100%] text-left">Logout</button>
        </div>
    </div>)
}