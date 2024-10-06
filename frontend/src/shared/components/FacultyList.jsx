import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from 'react';
import axios from 'axios';

export const FacultyList = () => {
    const [faculty, setFaculty] = useState([]);

    const gettingFacultyData = async () => {
        try {
            const response = await axios.get('http://localhost:8789/faculty/faculty-list');
            console.log("all faculty are...", response);
            setFaculty(response.data.faculty);
        } catch (err) {
            console.log("err to find faculty", err);
        }
    };

    useEffect(() => {
        gettingFacultyData();
    }, []); 

    return (
        <div className="bg-[#000] p-2 m-4 rounded">
            <h1 className="text-center text-2xl font-semibold text-white p-1">Faculty List</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Email Id</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {faculty.map((row) => (
                            <TableRow
                                key={row._id} // Assuming each faculty has a unique _id
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">
                                    {row.phone}
                                </TableCell>
                                <TableCell align="center">
                                    {row.email}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
