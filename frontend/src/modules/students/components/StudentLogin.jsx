
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { NavLink, useNavigate } from "react-router-dom";
// import { useRef, useState } from "react";
// import { apiClient } from "../../../shared/services/api-client";

// export const StudentLogin = () => {
//     const emailRef = useRef();
//     const pwdRef = useRef();

//     const navigate=useNavigate();

//     const [message, setMessage] = useState();

//     const studentLogin = async() =>{
//         console.log("Student is signing in ...");
//         const studentInfo = {
//             email: emailRef.current.value,
//             password: pwdRef.current.value,
//         }
//         console.log("Student Info is : ", studentInfo);
//         try{
//             const response = await apiClient.post("http://localhost:8789/student/student-login", studentInfo);
//             setMessage(response.data.message);
//             console.log("student login response is ", response);
//             navigate("/student-dashboard");
//         }
//         catch(err){
//             console.log("Error in student login", err);
//         }
//     }
//     return (
//         <div className="bg-[#9FE2BF] p-12">
//             <div className="md:w-1/2 m-auto bg-[#fff] p-4 rounded-lg shadow-lg">
//                 <h1 className="text-center text-xl sm:text-2xl">login to get access as Student</h1>
//                 <Box className="m-4">
//                 <p>{message}</p>
//                     <div className="m-2">
//                         <TextField
//                             id="outlined-search"
//                             inputRef={emailRef}
//                             label="Enter User name Or Email id"
//                             type="search"
//                             className="w-[100%]"
//                         />
//                     </div>
//                     <div className="m-2">
//                         <TextField
//                             id="outlined-search"
//                             inputRef={pwdRef}
//                             label="Password"
//                             type="search"
//                             className="w-[100%]"
//                         />
//                     </div>
//                     <div className="text-center m-2">
//                         <Button
//                             variant="contained"
//                             className="mx-2"
//                             onClick={studentLogin}
//                         >
//                             Login
//                         </Button>
//                     </div>
//                 </Box>

//                 <p className="text-center">
//                     Are you new user?{" "}
//                     <NavLink to="/student-register" className="text-[#1177DF]">Create an Account</NavLink>
//                 </p>
//             </div>
//         </div>
//     );
// };





import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { apiClient } from "../../../shared/services/api-client";

export const StudentLogin = () => {
    const emailRef = useRef();
    const pwdRef = useRef();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");

    const studentLogin = async () => {
        const studentInfo = {
            email: emailRef.current.value,
            password: pwdRef.current.value,
        };

        try {
            const response = await apiClient.post("http://localhost:8789/student/student-login", studentInfo);
            setMessage(response.data.message);

            if (response.data.message.includes('Welcome')) {
                const studentData = response.data.student;
                console.log('Storing student data:', studentData);
                localStorage.setItem('studentData', JSON.stringify(studentData));
                navigate("/student-dashboard");
            }
        } catch (err) {
            console.log("Error in student login", err);
            setMessage("Error in login. Please check your credentials and try again.");
        }
    };

    return (
        <div className="bg-[#9FE2BF] p-12 min-h-screen flex items-center justify-center">
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-center text-2xl font-bold mb-4">Login to get access as Student</h1>
                {message && <p className="text-center text-red-600">{message}</p>}
                <div className="space-y-4">
                    <div>
                        <input
                            ref={emailRef}
                            type="email"
                            placeholder="Enter User name Or Email id"
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <input
                            ref={pwdRef}
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="text-center">
                        <button
                            onClick={studentLogin}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </div>
                </div>
                <p className="text-center mt-4">
                    Are you a new user?{" "}
                    <NavLink to="/student-register" className="text-blue-500">
                        Create an Account
                    </NavLink>
                </p>
            </div>
        </div>
    );
};
