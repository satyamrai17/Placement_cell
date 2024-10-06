import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TestComponent from './TestTakingPage';

const TestList = () => {
  const [testAssignments, setTestAssignments] = useState([]);
  const [selectedTest, setSelectedTest] = useState(null);
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {
    const fetchTestAssignments = async () => {
      try {
        const response = await axios.get('http://localhost:8789/get-all-test-assignments');
        setTestAssignments(response.data);
      } catch (error) {
        console.error('Error fetching test assignments:', error);
      }
    };

    fetchTestAssignments();

    const storedData = localStorage.getItem('studentData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setStudentId(parsedData._id);
    }
  }, []);

  const handleTestSelect = (test) => {
    setSelectedTest(test);
  };

  return (
    <div className="container bg-slate-200 mx-auto p-8 ml-auto">
      {!selectedTest ? (
        <div className='text-center'>
          <h2 className="text-3xl font-bold mb-4">Available Tests</h2>
          <ul>
            {testAssignments.map((test, index) => (
              <li key={index} className="mb-2">
                <button
                  onClick={() => handleTestSelect(test)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Test {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <TestComponent test={selectedTest} studentId={studentId} />
      )}
    </div>
  );
};

export default TestList;
