// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import SendIcon from "@mui/icons-material/Send";

// export const Contact = () => {
//     return (
//         <div className="bg-[#EFF8F6] pb-4">
//             <h1 className="text-center text-4xl font-semibold p-8">
//                 Contact <span className="text-[#FF0000]">Us</span>
//             </h1>
//             <div className="bg-[#fff] w-1/2 m-auto p-4 rounded-lg shadow-lg">
//                 <h2 className="text-center text-2xl font-semibold p-4">
//                     Please Send Your Message!
//                 </h2>
//                 <Box>
//                     <div className="m-2">
//                         <TextField
//                             id="outlined-search"
//                             label="Enter your name"
//                             type="search"
//                             className="w-[100%]"
//                         />
//                     </div>
//                     <div className="m-2">
//                         <TextField
//                             id="outlined-search"
//                             label="Enter your email id"
//                             type="search"
//                             className="w-[100%]"
//                         />
//                     </div>
//                     <div className="m-2">
//                         <TextField
//                             id="outlined-search"
//                             label="Enter your mobile number"
//                             type="number"
//                             className="w-[100%]"
//                         />
//                     </div>
//                     <div className="m-2">
//                         <TextField
//                             id="outlined-search"
//                             label="Write your message here"
//                             type="text"
//                             multiline
//                             maxRows={4}
//                             className="w-[100%]"
//                         />
//                     </div>
//                     <div className="m-2 text-center">
//                         <Button variant="contained" endIcon={<SendIcon />}>
//                             Send message
//                         </Button>
//                     </div>
//                 </Box>
//             </div>
//         </div>
//     );
// };



import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pflaifv', 'template_wzg6zr6', form.current, {
        publicKey: 'Zw7qjLUEvzWYcVz_x',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='p-6 shadow-lg '>
        <h1 className="text-center text-4xl font-semibold p-8">Contact <span className="text-[#FF0000]">Us</span>
        </h1>
    <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto p-6 border border-gray-300 rounded-lg shadow-lg ">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="from_name" id="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="from_email" id="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea name="message" id="message" rows="4" className="mt-1 p-2 border border-gray-300 rounded-md w-full"></textarea>
      </div>
      <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 transition ease-in-out duration-150">
        Send Mail
      </button>
    </form>
    </div>
  );
};

