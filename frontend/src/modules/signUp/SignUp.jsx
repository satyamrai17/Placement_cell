import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { apiClient } from "../../shared/services/api-client.js";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const SignUp = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const pwdRef = useRef();

    const handleClose = () => setOpen(false);
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

    const adminRegister = async () => {
        console.log("Admin is Registering...");
        const adminInfo = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            password: pwdRef.current.value,
        }
        try {
            console.log("Admin Info is: ", adminInfo);
            const response = await apiClient.post("http://localhost:8789/register", adminInfo);
            setMessage(response.data.message);
            setOpen(true);
            console.log("Response is: ", response);
        } catch (err) {
            setMessage("Error in Register...");
            setOpen(true);
            console.log("Error is: ", err);
        }
    }

    return (
        <div className="bg-[#9FE2BF] p-4">
            <div className="md:w-1/2 m-auto bg-[#fff] p-4 rounded-lg shadow-lg">
                <h1 className="text-center text-xl sm:text-2xl">Registration Yourself</h1>
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
                            id="outlined-name"
                            inputRef={nameRef}
                            label="Name"
                            type="text"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            id="outlined-email"
                            inputRef={emailRef}
                            label="Enter your email id"
                            type="email"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            id="outlined-phone"
                            inputRef={phoneRef}
                            label="Phone Number"
                            type="number"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            id="outlined-password"
                            inputRef={pwdRef}
                            label="Password"
                            type="password"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="text-center m-2">
                        <Button
                            variant="contained"
                            className="mx-2"
                            onClick={adminRegister}
                        >
                            Register
                        </Button>
                    </div>
                </Box>
                <p className="text-center">
                    Have you already an Account?{" "}
                    <NavLink to="/login" className="text-[#1177DF]">Login</NavLink>
                </p>
            </div>
        </div>
    );
};
