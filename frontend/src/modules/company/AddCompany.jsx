import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import {apiClient} from "../../shared/services/api-client.js"
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

export const AddCompany = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');

    const Company = useRef();
    const Profile = useRef();
    const Skills = useRef();
    const Package = useRef();
    const Eligibility = useRef();
    const Location = useRef();
    const Roles = useRef();
    const applylink = useRef();
    const careerlink = useRef();

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

    const addCompany = async()=> {
        console.log("Company is adding...");
        const CompanyValue = Company.current.value;
        const ProfileValue = Profile.current.value;
        const SkillsValue = Skills.current.value;
        const PackageValue = Package.current.value;
        const EligibilityValue = Eligibility.current.value;
        const LocationValue = Location.current.value;
        const RolesValue = Roles.current.value;
        const Applylink = applylink.current.value;
        const Careerlink = careerlink.current.value;
        

        const CompanyData = {
            company:CompanyValue,
            profile:ProfileValue,
            skills:SkillsValue,
            package:PackageValue,
            eligibility:EligibilityValue,
            location:LocationValue,
            Roles:RolesValue,
            applylink:Applylink,
            careerlink:Careerlink
        }
        try{
            console.log("Company Data are ...", CompanyData);
            const response= await apiClient.post('http://localhost:8789/company/register', CompanyData);
            setMessage(response.data.message);
            setOpen(true);
            console.log("response of company data",response);
        }
        catch(err){
            setMessage("Not register");
            console.log("Error in adding in company to db ",err);
        }

    }
    return (
        <>
            <div className="m-8 p-4 bg-[#F6DDCC] rounded">
                <h1 className="text-center text-xl text-[#34495E] font-semibold">
                    Add Company Information
                </h1>
                <div>
                    <Box flexDirection="column" display="flex">
                    <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={message}
                    action={action}
                />
                        <div className="m-2">
                            <TextField
                                id=""
                                inputRef={Company}
                                label="Name of the Company"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id=""
                                inputRef={Profile}
                                label="Profile Offered"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={Skills}
                                label="Skill Required"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={Package}
                                label="Package"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={Eligibility}
                                label="Eligibility"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={Location}
                                label="Location of Company"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={Roles}
                                label="Roles & Responsibility"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={applylink}
                                label="Apply Link"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        <div className="m-2">
                            <TextField
                                id="outlined-search"
                                inputRef={careerlink}
                                label="Career Link"
                                type="text"
                                className="w-[100%]"
                            />
                        </div>
                        
                            <Button
                                variant="contained"
                                color="success"
                                onClick={addCompany}
                            >
                                Add Company
                            </Button>
                        
                    </Box>
                </div>
            </div>
        </>
    );
};
