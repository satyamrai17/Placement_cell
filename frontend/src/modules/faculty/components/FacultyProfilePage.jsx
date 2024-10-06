
// import React from 'react';
// import FacultyPhoto from '../../../assets/AbhishekShukla.jpg';

// const FacultyProfilePage = ({ facultyData }) => {
//     return (
//         <div className='text-center p-4 bg-[#eee] rounded-xl shadow-lg'>
//             <img src={FacultyPhoto} alt="Faculty" className='h-80 rounded-[50%] m-auto' />
//             <h1 className='text-2xl'>{facultyData.name}</h1>
//             <p><span className='font-semibold'> Email: </span>{facultyData.email}</p>
//             <p><span className='font-semibold'> Mobile: </span>{facultyData.phone}</p>
//         </div>
//     );
// };

// export default FacultyProfilePage;



// FacultyProfilePage.js
import React, { useState } from 'react';
import axios from 'axios';
import FacultyPhoto from '../../../assets/LogoHeaderOrg.jpg';

const FacultyProfilePage = ({ facultyData }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(facultyData.photoUrl || '');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('profileImage', selectedFile);
        formData.append('facultyId', facultyData._id);

        try {
            const response = await axios.post('http://localhost:8789/faculty/faculty-upload-photo', formData, {
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
            <img src={photoUrl || FacultyPhoto} alt="Faculty" className='h-80 rounded-[50%] m-auto' />
            <h1 className='text-2xl'>{facultyData.name}</h1>
            <p><span className='font-semibold'> Email: </span>{facultyData.email}</p>
            <p><span className='font-semibold'> Mobile: </span>{facultyData.phone}</p>

            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'>
                Upload Photo
            </button>
        </div>
    );
};

export default FacultyProfilePage;