import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink} from "react-router-dom";
import { useRef, useState } from "react";
import { apiClient } from "../../../shared/services/api-client";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const FacultySignUp = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const pwdRef = useRef();
    // const navigate=useNavigate();

    const handleClose = () =>setOpen(false);
    const action = <>
        <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>

    const facultyRegister = async () =>{
        console.log("Faculty is Registering...");
        const facultyInfo = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            password: pwdRef.current.value,
        }
        try{
            console.log("Faculty Info is : ", facultyInfo);
            const response = await apiClient.post("http://localhost:8789/faculty/faculty-register", facultyInfo); // Adjust the API endpoint
            setMessage(response.data.message);
            setOpen(true);
            console.log("Response is  ", response);
        }
        catch(err){
            setMessage("Error in Register...");
            console.log("Error is ", err);
        }
        // navigate("/faculty-login");

    }
    return (
        <div className="bg-[#9FE2BF] p-4">
            <div className="md:w-1/2 m-auto bg-[#fff] p-4 rounded-lg shadow-lg">
                <h1 className="text-center text-xl sm:text-2xl">Faculty Registration Form</h1>
                <Box className="m-4">
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={message}
                    action={action}
                />
                    <div className="m-2">
                        <TextField
                            id="outlined-search"
                            inputRef={nameRef}
                            label="Name"
                            type="text"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            id="outlined-search"
                            inputRef={emailRef}
                            label="Enter your email id"
                            type="search"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            id="outlined-search"
                            inputRef={phoneRef}
                            label="Phone Number"
                            type="Number"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            id="outlined-search"
                            inputRef={pwdRef}
                            label="Password"
                            type="password"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="text-center m-2">
                        <Button
                            variant="contained"
                            width="full"
                            className="mx-2"
                            onClick={facultyRegister}
                        >
                            Register
                        </Button>
                    </div>
                </Box>

                <p className="text-center">
                    Have you already an Account?{" "}
                    <NavLink to="/faculty-login" className="text-[#1177DF]">Login</NavLink>
                </p>
            </div>
        </div>
    );
};
