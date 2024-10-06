import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';

export const StudentList = () => {
    const [students, setStudents] = useState([]);

    const gettingData = async () => {
        try {
            const response = await axios.get('http://localhost:8789/student/student-list');
            console.log("all students are...", response);
            setStudents(response.data.students);
        } catch (err) {
            console.log("err to find students", err);
        }
    };

    useEffect(() => {
        gettingData();
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div className="bg-gray-900 p-4 m-4 rounded-lg">
            <h1 className="text-center text-2xl font-semibold text-white mb-4">Students List</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" >Name</TableCell>
                            <TableCell align="center" >Branch</TableCell>
                            <TableCell align="center" >Year</TableCell>
                            <TableCell align="center" >Mobile</TableCell>
                            <TableCell align="center" >Email Id</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((row) => (
                            <TableRow
                                key={row._id} 
                                sx={{
                                    "&:last-child td, &:last-child th": { border: 0 },
                                    "&:hover": { backgroundColor: "#f5f5f5" },
                                }}
                            >
                                <TableCell component="th" scope="row" align="center">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.branch}</TableCell>
                                <TableCell align="center">{row.year}</TableCell>
                                <TableCell align="center">{row.mobile}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
