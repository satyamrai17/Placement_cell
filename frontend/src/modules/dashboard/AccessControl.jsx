import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const AccessControl = () => {
    return (
        <div className="bg-[#EFF8F6] p-4 md:p-12">
            <div className="bg-[#084399] p-8 w-full  md:w-2/3 m-auto rounded-lg shadow-xl">
                <h1 className="text-center text-white p-8 md:p-8 text-2xl md:text-5xl font-semibold">
                    Who Are You ?
                </h1>
                <div className="text-center w-full md:w-1/2 m-auto pb-6 md:pb-8">
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        className="justify-center items-center"
                    >
                        <NavLink to="/admin" className="w-full md:w-auto mb-2 md:mb-0">
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                endIcon={<AdminPanelSettingsIcon />}
                                className="w-full md:w-auto"
                            >
                                Admin
                            </Button>
                        </NavLink>
                        <NavLink to="/faculty-signup" className="w-full md:w-auto mb-2 md:mb-0">
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                endIcon={<AdminPanelSettingsIcon />}
                                className="w-full md:w-auto"
                            >
                                Faculty
                            </Button>
                        </NavLink>
                        <NavLink to="/student" className="w-full md:w-auto">
                            <Button
                                variant="contained"
                                color="success"
                                size="large"
                                startIcon={<AccountCircleIcon />}
                                className="w-full md:w-auto"
                            >
                                Student
                            </Button>
                        </NavLink>
                    </Stack>
                </div>
            </div>
        </div>
    );
};
