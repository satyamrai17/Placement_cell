//Registration.jsx
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { apiClient } from "../../../shared/services/api-client.js";
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

export const Registration = (props) => {
    const [message,setMessage]=useState();
    const [open, setOpen] = useState(false);
    const Name = useRef();
    const Father_name = useRef();
    const Email_Id = useRef();
    const Mobile_No = useRef();
    const Branch = useRef();
    const Year = useRef();
    const Address = useRef();
    const Password = useRef();

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

    // const [value, setValue] = useState();

    const register =async () => {
        console.log("Registration is being...");
        const NameValue = Name.current.value;
        const Father_nameValue = Father_name.current.value;
        const Email_IdValue = Email_Id.current.value;
        const Mobile_NoValue = Mobile_No.current.value;
        const BranchValue = Branch.current.value;
        const YearValue = Year.current.value;
        const AddressValue = Address.current.value;
        const PasswordValue = Password.current.value;

        // const DOB = value ? dayjs(value).format() : "";

        const studentInfo = {
            name: NameValue,
            father: Father_nameValue,
            email: Email_IdValue,
            mobile: Mobile_NoValue,
            branch: BranchValue,
            year: YearValue,
            address: AddressValue,
            password: PasswordValue,
        };
        // props.fn(studentData);
        console.log("Student Data are ...", studentInfo);
        try{
            console.log("Student Info is : ", studentInfo);
            const response = await apiClient.post("http://localhost:8789/student/student-register", studentInfo);
            setMessage(response.data.message);
            setOpen(true);
            console.log("Response is  ", response);
            // navigate("/student-login");
        }
        catch(err){
            setMessage("Error in Register...");
            console.log("Error is ", err);
        }
    };

    return (
        <div className="bg-[#9FE2BF] p-4">
            <div className="w-2/3 m-auto bg-[#fff] p-4 rounded-lg">
                <h1 className="text-center text-2xl font-semibold p-4">
                    Student Registration Form
                </h1>
                <Box flexDirection="column" display="flex">
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={message}
                    action={action}
                />
                    <div className="m-1">
                        <TextField
                            id="outlined-search"
                            inputRef={Name}
                            label="Name"
                            type="text"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Father's Name"
                            inputRef={Father_name}
                            type="text"
                            className="w-[100%]"
                        />
                    </div>

                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date of Birth"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </LocalizationProvider> */}
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Email Id"
                            inputRef={Email_Id}
                            type="search"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Mobile No."
                            inputRef={Mobile_No}
                            type="number"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Branch"
                            inputRef={Branch}
                            type="text"
                            className="w-[100%]"
                        />
                    </div>

                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Year"
                            inputRef={Year}
                            type="number"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Address"
                            inputRef={Address}
                            multiline
                            maxRows={4}
                            type="text"
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-1">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Password"
                            inputRef={Password}
                            type="password"
                            className="w-[100%]"
                        />
                    </div>

                    <Button
                        onClick={register}
                        variant="contained"
                        color="success"
                    >
                        {" "}
                        Register{" "}
                    </Button>
                    <p className="text-center m-2 text-lg">
                        If you have already registered then GoTo{" "}
                        <NavLink to="/student-login" className="text-[#1177DF]">
                            {" "}
                            Login{" "}
                        </NavLink>{" "}
                    </p>
                </Box>
            </div>
        </div>
    );
};
