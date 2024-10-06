import React, { useState } from 'react';
import axios from 'axios';

const FacultyUploadNotes = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('pdfFile', selectedFile);

        try {
            const response = await axios.post('/api/faculty/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.status === 200) {
                setUploadStatus('File uploaded successfully.');
            } else {
                setUploadStatus('Error uploading file.');
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            setUploadStatus('Error uploading file.');
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <h2 className="text-2xl font-bold mb-4">Upload Study Materials</h2>
            <div className="max-w-md mx-auto">
                <input type="file" onChange={handleFileChange} />
                <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded-md" onClick={handleUpload}>
                    Upload
                </button>
                {uploadStatus && <p className="text-green-500 mt-2">{uploadStatus}</p>}
            </div>
        </div>
    );
};

export default FacultyUploadNotes;
