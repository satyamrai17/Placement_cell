//StudentPanel.jsx
// import { StudentAccess } from "./StudentAccess.jsx"
// import { StudentProfile } from "./StudentProfile.jsx"

// export const StudentPanel = () =>{
//     return(<div className="bg-[#EFF8F6]">
//         <div className="bg-[#fff] px-4 m-auto ">
//             <h1 className="bg-[#0000FF] text-center text-white p-4 text-xl">Student Dashboard</h1>
//             <div className="sm:flex">
//                 <div className=" bg-[#008080] text-white w-1/3 p-2"><StudentAccess/></div>
//                 <div className="w-2/3 p-2"><StudentProfile/></div>
//             </div>
//         </div>
//     </div>)
// }






// import React, { useState, useEffect } from "react";
// import { StudentAccess } from "./StudentAccess";
// import { StudentProfile } from "./StudentProfile";

// export const StudentPanel = () => {
//     const [studentData, setStudentData] = useState(null);

//     useEffect(() => {
//         const storedData = localStorage.getItem('studentData');
//         console.log('Retrieved student data from localStorage:', storedData);
//         if (storedData) {
//             try {
//                 const parsedData = JSON.parse(storedData);
//                 console.log('Parsed student data:', parsedData);
//                 setStudentData(parsedData);
//             } catch (error) {
//                 console.error('Error parsing student data from localStorage:', error);
//             }
//         }
//     }, []);
    

//     return (
//         <div className="bg-[#EFF8F6] min-h-screen">
//             <div className="bg-[#fff] px-4 m-auto">
//                 <h1 className="bg-[#0000FF] text-center text-white p-4 text-xl">Student Dashboard</h1>
//                 <div className="sm:flex">
//                     <div className="bg-[#008080] text-white w-1/3 p-2">
//                         <StudentAccess />
//                     </div>
//                     <div className="w-2/3 p-2">
//                     {studentData ? (
//     <StudentProfile studentData={studentData} />
    

// ) : (
//     <p>Loading...</p>
// )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };



import React, { useState, useEffect } from "react";
import { StudentAccess } from "./StudentAccess";
import { StudentProfile } from "./StudentProfile";
// import StudentResults from "./StudentResults";

export const StudentPanel = () => {
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('studentData');
        console.log('Stored data:', storedData); // Log the raw stored data
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                console.log('Parsed student data:', parsedData); // Log the parsed data
                setStudentData(parsedData);
            } catch (error) {
                console.error('Error parsing student data from localStorage:', error);
            }
        }
    }, []);

    if (!studentData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-[#EFF8F6] min-h-screen">
            <div className="bg-[#fff] px-4 m-auto">
                <h1 className="bg-[#0000FF] text-center text-white p-4 text-xl">Student Dashboard</h1>
                <div className="sm:flex">
                    <div className="bg-[#008080] text-white w-1/3 p-2">
                        <StudentAccess />
                    </div>
                    <div className="w-2/3 p-2">
                        <StudentProfile studentData={studentData} />
                        {/* <StudentResults studentId={studentData._id} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
