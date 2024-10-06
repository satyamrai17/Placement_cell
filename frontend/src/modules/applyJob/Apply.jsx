import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { apiClient } from '../../shared/services/api-client'; // Ensure this points to your API client

export const Apply = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
    });

    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phone', formData.phone);
        formDataToSend.append('resume', formData.resume);

        try {
            const response = await apiClient.post('/api/apply', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data.message);
            setOpen(true);
        } catch (error) {
            setMessage('Error submitting application');
            setOpen(true);
        }
    };

    return (
        <div className="bg-[#9FE2BF] p-12">
            <div className="md:w-1/2 m-auto bg-[#fff] p-4 rounded-lg shadow-lg">
                <h1 className="text-center text-xl sm:text-2xl">Job Application Form</h1>
                <form onSubmit={handleSubmit} className="m-4">
                    <Snackbar
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message={message}
                        action={
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        }
                    />
                    <div className="m-2">
                        <TextField
                            name="name"
                            label="Enter Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            name="email"
                            label="Enter Your Email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <TextField
                            name="phone"
                            label="Enter Your Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-[100%]"
                        />
                    </div>
                    <div className="m-2">
                        <input
                            type="file"
                            name="resume"
                            onChange={handleFileChange}
                            className="w-[100%]"
                            accept=".pdf,.doc,.docx"
                        />
                    </div>
                    <div className="text-center m-2">
                        <Button variant="contained" type="submit" className="mx-2">
                            Apply
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
