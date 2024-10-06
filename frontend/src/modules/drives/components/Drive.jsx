// import "../../../settings/styles/driveStyle.css";
// // import "../../../assets/Swlogo.jpg";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { companyData } from "../../constants/CompanyConstant";

// export const Drive = () => {
//     return (
//         <div className="bg-[#EFF8F6]">
//             <h1 className="text-center text-4xl font-semibold p-4">
//                 Placement <span className="text-[#FF0000]">Drives</span>
//             </h1>
//             <div className="flex flex-wrap gap-4 p-8 justify-evenly">
//                 {companyData.map((items) => {
//                     return (
//                         <Card sx={{ maxWidth: 345, backgroundColor: "white" }}>
//                             <CardMedia title="green iguana" />
//                             <CardContent>
//                                 <Typography
//                                     gutterBottom
//                                     variant="h5"
//                                     component="div"
//                                 >
//                                     {items.name}
//                                 </Typography>
//                                 <Typography
//                                     variant="body2"
//                                     color="text.secondary"
//                                 >
//                                     {items.comDescription}
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button href={items.apply} size="small">Apply</Button>
//                             <Button href={items.link} target="_blank" size="small">Learn More</Button>
//                             </CardActions>
//                         </Card>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };






import React, { useEffect, useState } from 'react';
import "../../../settings/styles/driveStyle.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { apiCompany } from '../../../shared/services/api-company';

export const Drive = () => {
    const [companies, setCompanies] = useState([]);

    const fetchCompanies = async () => {
        try {
            const response = await apiCompany.get('http://localhost:8789/company/details');
            setCompanies(response.data);
        } catch (err) {
            console.error("Error fetching companies", err);
        }
    };

    useEffect(() => {
        fetchCompanies();
    }, []);

    return (
        <div className="bg-[#EFF8F6]">
            <h1 className="text-center text-4xl font-semibold p-4">
                Placement <span className="text-[#FF0000]">Drives</span>
            </h1>
            <div className="flex flex-wrap gap-4 p-8 justify-evenly">
                {companies.map((items) => (
                    <Card key={items._id} sx={{ maxWidth: 345, backgroundColor: "white" }}>
                        <CardMedia title="Company Logo" />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {items.company}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {items.profile}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Skills Required: {items.skills}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Package: {items.package}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Eligibility: {items.eligibility}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Location: {items.location}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Roles & Responsibility: {items.Roles}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button href={items.applylink} target='_blank' size="small">Apply</Button>
                            <Button href={items.careerlink} target="_blank" size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </div>
    );
};



// import React, { useEffect, useState } from 'react';
// import { apiCompany } from '../../../shared/services/api-company';

// export const Drive = () => {
//     const [companies, setCompanies] = useState([]);

//     const fetchCompanies = async () => {
//         try {
//             const response = await apiCompany.get('/company/details');
//             setCompanies(response.data);
//         } catch (err) {
//             console.error("Error fetching companies", err);
//         }
//     };

//     useEffect(() => {
//         fetchCompanies();
//     }, []);

//     return (
//         <div className="bg-[#EFF8F6] min-h-screen">
//             <h1 className="text-center text-4xl font-semibold p-4">
//                 Placement <span className="text-red-600">Drives</span>
//             </h1>
//             <div className="flex flex-wrap gap-4 p-8 justify-evenly">
//                 {companies.map((item) => (
//                     <div key={item._id} className="bg-white rounded shadow-lg max-w-xs w-full p-4 flex flex-col">
//                         <div className="flex-1">
//                             <h2 className="text-xl font-bold mb-2">{item.company}</h2>
//                             <p className="text-gray-600 mb-2">Profile: {item.profile}</p>
//                             <p className="text-gray-600 mb-2">Skills Required: {item.skills}</p>
//                             <p className="text-gray-600 mb-2">Package: {item.package}</p>
//                             <p className="text-gray-600 mb-2">Eligibility: {item.eligibility}</p>
//                             <p className="text-gray-600 mb-2">Location: {item.location}</p>
//                             <p className="text-gray-600 mb-2">Roles & Responsibility: {item.Roles}</p>
//                         </div>
//                         <div className="flex justify-between mt-4">
//                             <a href={item.apply} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" target="_blank" rel="noopener noreferrer">Apply</a>
//                             <a href={item.link} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" target="_blank" rel="noopener noreferrer">Learn More</a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
