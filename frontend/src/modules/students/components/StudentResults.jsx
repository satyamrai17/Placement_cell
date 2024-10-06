import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentResults = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem('studentData');
        console.log('Stored data:', storedData); // Log the raw stored data
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                console.log('Parsed student data:', parsedData); // Log the parsed data
                setStudentData(parsedData);
            } catch (error) {
                console.error('Error parsing student data from localStorage:', error);
            }
        }
    }, []);

    const studentId = studentData ? studentData._id : null;

    useEffect(() => {
        console.log('Received studentId:', studentId); // Log received studentId
        const fetchResults = async () => {
            try {
                const response = await axios.get(`http://localhost:8789/student/student-results`, {
                    params: { studentId }
                });
                console.log('Fetched results:', response.data); // Log fetched results
                const filteredResults = response.data.filter(result => result.studentId === studentId);
                setResults(filteredResults);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching results:', error);
                setError('Failed to fetch results');
                setLoading(false);
            }
        };

        if (studentId) {
            fetchResults();
        } else {
            setLoading(false);
        }
    }, [studentId]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Your Test Results</h2>
            {results.length === 0 ? (
                <p className="text-center text-gray-600">No results available.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="py-3 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Test ID</th>
                                <th className="py-3 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Total Marks</th>
                                <th className="py-3 px-4 border-b-2 border-gray-200 text-left text-sm font-semibold text-gray-600">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((result) => (
                                <tr key={result._id} className="hover:bg-gray-100">
                                    <td className="py-3 px-4 border-b border-gray-200">{result.testId ? result.testId : 'N/A'}</td>
                                    <td className="py-3 px-4 border-b border-gray-200">{result.totalMarks}</td>
                                    <td className="py-3 px-4 border-b border-gray-200">{new Date(result.timestamp).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default StudentResults;
