// import { AdminNavbar } from "./AdminNavbar";
// import AdminProfilePage from "./AdminProfilePage";


// export const AdminPanel = () =>{
//     return(<div className="bg-[#EFF8F6]">
//         <div className="bg-[#fff] px-4 m-auto ">
//             <h1 className="bg-[#0000FF] text-center text-white p-4 text-xl">Admin Panel</h1>
//             <div className="sm:flex">
//                 <div className=" bg-[#008080] text-white w-1/3 p-2"><AdminNavbar/></div>
//                 <div className="w-2/3 p-2"><AdminProfilePage/></div>
//             </div>
//         </div>
//     </div>)
// }





import React, { useState, useEffect } from "react";
import { AdminNavbar } from "./AdminNavbar";
import AdminProfilePage from "./AdminProfilePage";

export const AdminPanel = () => {
    const [AdminData, setAdminData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('AdminData');
        console.log('Retrieved Admin data from localStorage:', storedData);
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                console.log('Parsed Admin data:', parsedData);
                setAdminData(parsedData);
            } catch (error) {
                console.error('Error parsing Admin data from localStorage:', error);
            }
        }
    }, []);

    return (
        <div className="bg-[#EFF8F6] min-h-screen">
            <div className="bg-[#fff] px-4 m-auto">
                <h1 className="bg-[#0000FF] text-center text-white p-4 text-xl">Admin Panel</h1>
                <div className="sm:flex">
                    <div className="bg-[#008080] text-white w-1/3 p-2">
                        <AdminNavbar />
                    </div>
                    <div className="w-2/3 p-2">
                        {AdminData ? (
                            <AdminProfilePage AdminData={AdminData} />
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
