// import React from 'react';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import pdfFile1 from '../../../assets/Trees1.pdf'; // Replace with the actual path
// import pdfFile2 from '../../../assets/Trees2.pdf'; // Replace with the actual path
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.js'; // Import the worker script

// const StudentPrepare = () => {
//   const pdfFiles = [pdfFile1, pdfFile2];

//   return (
//     <div className="bg-gray-100 min-h-screen p-6">
//       <h2 className="text-2xl font-bold mb-4">Study Materials</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {pdfFiles.map((pdf, index) => (
//           <div key={index} className="bg-white p-4 rounded-md shadow-md">
//             <h3 className="text-lg font-semibold mb-2">PDF {index + 1}</h3>
//             <div className="h-40">
//               <Worker workerUrl={pdfjsWorker}>
//                 <Viewer fileUrl={pdf} />
//               </Worker>
//             </div>
//             <a
//               href={pdf}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-500 hover:underline block mt-2"
//             >
//               View PDF
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StudentPrepare;



// StudentPrepare.jsx
import React, { useEffect, useState } from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import axios from 'axios';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.min.js';

const StudentPrepare = () => {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:8789/notes');
        setPdfFiles(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Study Materials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pdfFiles.map((pdf, index) => (
          <div key={index} className="bg-white p-4 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">PDF {index + 1}</h3>
            <div className="h-40">
              <Worker workerUrl={`http://localhost:8789/${pdfjsWorker}`} 
                workerOptions={{ workerPort: 12345 }}>
                <Viewer fileUrl={pdf.url} />
              </Worker>
            </div>
            <a
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline block mt-2"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentPrepare;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const StudentPrepare = () => {
//     const [notes, setNotes] = useState([]);

//     useEffect(() => {
//         fetchNotes();
//     }, []);

//     const fetchNotes = async () => {
//         try {
//             const response = await axios.get('http://localhost:8789/notes');
//             setNotes(response.data);
//         } catch (error) {
//             console.error('Error fetching notes:', error);
//         }
//     };

//     return (
//         <div className="bg-gray-100 min-h-screen p-6">
//             <h2 className="text-2xl font-bold mb-4">Access Study Materials</h2>
//             <div className="max-w-md mx-auto">
//                 {notes.length > 0 ? (
//                     <ul>
//                         {notes.map(note => (
//                             <li key={note.name}>
//                                 <a href={note.url} target="_blank" rel="noopener noreferrer">
//                                     {note.name}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 ) : (
//                     <p>No notes available</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default StudentPrepare;
