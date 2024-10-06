// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { NavLink} from "react-router-dom";
// import { useRef, useState } from "react";
// import { apiClient } from "../../shared/services/api-client.js";
// import Snackbar from '@mui/material/Snackbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// // import { AdminPanel } from "../admin/components/AdminPanel.jsx";

// export const Login = () => {

//     const [open, setOpen] = useState(false);
//     const [message, setMessage] = useState('');
//     const emailRef = useRef();
//     const pwdRef = useRef();
    
//     // const navigate=useNavigate();

//     const handleClose = () =>setOpen(false);
//     const action = <>
//         <IconButton
//         size="small"
//         aria-label="close"
//         color="inherit"
//         onClick={handleClose}
//       >
//         <CloseIcon fontSize="small" />
//       </IconButton>
//     </>

//     const adminLogin = async() =>{
//         console.log("Admin is signing in ...");
//         const adminInfo = {
//             email: emailRef.current.value,
//             password: pwdRef.current.value,
//         }
//         try{
//             console.log("Admin Info is : ", adminInfo);
//             const response = await apiClient.post('http://localhost:8789/login', adminInfo);
//             setMessage(response.data.message);
//             setOpen(true);
//             console.log("Response in Admin login at frontend", response);
//             // navigate("/dashboard");
            

//         }
//         catch(err){
//             setMessage("Error in Login");
//             console.log("Error in Login at frontend", err);
//         }
//     }
//     return (
//         <div className="bg-[#9FE2BF] p-12">
//             <div className="md:w-1/2 m-auto bg-[#fff] p-4 rounded-lg shadow-lg">
//                 <h1 className="text-center text-xl sm:text-2xl">Please login to get access</h1>
//                 <Box className="m-4">
//                 <Snackbar
//                     open={open}
//                     autoHideDuration={6000}
//                     onClose={handleClose}
//                     message={message}
//                     action={action}
//                 />
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
//                             onClick={adminLogin}
//                         >
//                             Login
//                         </Button>
//                     </div>
//                 </Box>

//                 <p className="text-center">
//                     Are you new user?{" "}
//                     <NavLink to="/SignUp" className="text-[#1177DF]">Create an Account</NavLink>
//                 </p>
//             </div>
//         </div>
//     );
// };




import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { apiClient } from "../../shared/services/api-client";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const Login = () => {
    const emailRef = useRef();
    const pwdRef = useRef();
    const navigate = useNavigate();
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    const handleClose = () => setOpen(false);
    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    const adminLogin = async () => {
        const adminInfo = {
            email: emailRef.current.value,
            password: pwdRef.current.value,
        };
    
        try {
            const response = await apiClient.post("http://localhost:8789/login", adminInfo);
            setMessage(response.data.message);
            setOpen(true);
    
            if (response.data.message.includes('Welcome')) {
                const adminData = response.data.admin;
                console.log('Storing admin data:', adminData);
                localStorage.setItem('AdminData', JSON.stringify(adminData));
                navigate("/dashboard");
            }
        } catch (err) {
            console.log("Error in admin login", err);
            setMessage("Error in login. Please check your credentials and try again.");
        }
    };
    

    return (
        <div className="bg-[#9FE2BF] p-12 min-h-screen flex items-center justify-center">
            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                <h1 className="text-center text-2xl font-bold mb-4">Login to get access as Admin</h1>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={message}
                    action={action}
                />
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
                            onClick={adminLogin}
                            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                            Login
                        </button>
                    </div>
                </div>
                <p className="text-center mt-4">
                    Are you a new user?{" "}
                    <NavLink to="/SignUp" className="text-blue-500">
                        Create an Account
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

