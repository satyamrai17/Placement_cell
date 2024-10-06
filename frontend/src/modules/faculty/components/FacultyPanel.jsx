//FacultyPanel.jsx
// import { FacultyNavbar } from "./FacultyNavbar"
// import FacultyProfilePage from "./FacultyProfilePage"
// // import { FacultyWork } from "./FacultyWork"

// export const FacultyPanel = () =>{
//     return(<div className="bg-[#EFF8F6]">
//         <div className="bg-[#fff] px-4 m-auto ">
//             <h1 className="bg-[#0000FF] text-center text-white p-4 text-xl">Faculty Panel</h1>
//             <div className="sm:flex">
//                 <div className=" bg-[#008080] text-white w-1/3 p-2"><FacultyNavbar/></div>
//                 <div className="w-2/3 p-2"><FacultyProfilePage/></div>
//             </div>
//         </div>
//     </div>)
// }







import React, { useState, useEffect } from "react";
import { FacultyNavbar } from "./FacultyNavbar";
import FacultyProfilePage from "./FacultyProfilePage";

export const FacultyPanel = () => {
    const [facultyData, setFacultyData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('facultyData');
        console.log('Retrieved faculty data from localStorage:', storedData);
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                console.log('Parsed faculty data:', parsedData);
                setFacultyData(parsedData);
            } catch (error) {
                console.error('Error parsing faculty data from localStorage:', error);
            }
        }
    }, []);

    return (
        <div className="bg-[#EFF8F6] min-h-screen">
            <div className="bg-[#fff] px-4 m-auto">
                <h1 className="bg-[#0000FF] text-center text-white p-4 text-xl">Faculty Panel</h1>
                <div className="sm:flex">
                    <div className="bg-[#008080] text-white w-1/3 p-2">
                        <FacultyNavbar />
                    </div>
                    <div className="w-2/3 p-2">
                        {facultyData ? (
                            <FacultyProfilePage facultyData={facultyData} />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
