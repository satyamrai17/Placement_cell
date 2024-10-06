// StudentProfile.jsx

// import React from 'react';
// import UserPhoto from '../../../assets/Daya_image.jpeg';

// export const StudentProfile = ({ studentData }) => {
//   return (
//     <div className='text-center p-4 bg-[#eee] rounded-xl shadow-lg'>
//       <img src={UserPhoto} alt="" className='h-80 rounded-[50%] m-auto' />
//       <h1 className='text-2xl'>{studentData.name}</h1>
//       <p><span className='font-semibold'> Email : </span>{studentData.email}</p>
//       <p><span className='font-semibold'> Mobile : </span>{studentData.mobile}</p>
//     </div>
//   );
// };




import React, { useState } from 'react';
import axios from 'axios';
import UserPhoto from '../../../assets/LogoHeaderOrg.jpg'; 

export const StudentProfile = ({ studentData, onUpdate }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(studentData.photoUrl || '');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('profileImage', selectedFile);
        formData.append('studentId', studentData._id);

        try {
            const response = await axios.post('http://localhost:8789/student/upload-photo', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const updatedPhotoUrl = response.data.student.photoUrl;
            setPhotoUrl(updatedPhotoUrl);
            onUpdate({ ...studentData, photoUrl: updatedPhotoUrl });
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div className='text-center p-4 bg-[#eee] rounded-xl shadow-lg'>
            <img src={photoUrl || UserPhoto} alt="Student" className='h-80 rounded-[50%] m-auto' />
            <h1 className='text-2xl'>{studentData.name}</h1>
            <p><span className='font-semibold'> Email: </span>{studentData.email}</p>
            <p><span className='font-semibold'> Mobile: </span>{studentData.mobile}</p>

            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700'>
                Upload Photo
            </button>
        </div>
    );
};
