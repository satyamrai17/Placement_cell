// AdminProfilePage.jsx


// import React from 'react';
// import AdminPhoto from '../../../assets/SatyamRai.jpg';

// const AdminProfilePage = ({ AdminData }) => {
//     return (
//         <div className='text-center p-4 bg-[#eee] rounded-xl shadow-lg'>
//             <img src={AdminPhoto} alt="Admin" className='h-80 rounded-[50%] m-auto' />
//             <h1 className='text-2xl'>{AdminData.name}</h1>
//             <p><span className='font-semibold'> Email: </span>{AdminData.email}</p>
//             <p><span className='font-semibold'> Mobile: </span>{AdminData.phone}</p>
//         </div>
//     );
// };

// export default AdminProfilePage;



import React, { useState } from 'react';
import axios from 'axios';
import AdminPhoto from '../../../assets/LogoHeaderOrg.jpg';

const AdminProfilePage = ({ AdminData }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(AdminData.photoUrl || '');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('profileImage', selectedFile);
        formData.append('adminId', AdminData._id);

        try {
            const response = await axios.post('http://localhost:8789/upload-photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const updatedPhotoUrl = response.data.photoUrl;
            setPhotoUrl(updatedPhotoUrl);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className='text-center p-4 bg-[#eee] rounded-xl shadow-lg'>
            <img src={photoUrl || AdminPhoto} alt="Admin" className='h-80 rounded-[50%] m-auto' />
            <h1 className='text-2xl'>{AdminData.name}</h1>
            <p><span className='font-semibold'> Email: </span>{AdminData.email}</p>
            <p><span className='font-semibold'> Mobile: </span>{AdminData.phone}</p>

            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'>
                Upload Photo
            </button>
        </div>
    );
};

export default AdminProfilePage;
