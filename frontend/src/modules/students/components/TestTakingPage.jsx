
// import React, { useState, useEffect } from 'react';

// const questionsData = [
//   {
//     id: 1,
//     question: 'What is the capital of France?',
//     options: ['Paris', 'Berlin', 'Madrid', 'Rome'],
//     correctAnswer: 'Paris',
//   },
//   {
//     id: 2,
//     question: 'Which planet is known as the Red Planet?',
//     options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
//     correctAnswer: 'Mars',
//   },
//   {
//     id: 3,
//     question: 'What is the largest mammal?',
//     options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
//     correctAnswer: 'Blue Whale',
//   },
//    {
//       id: 4,
//       question: 'Which country is known as the Land of the Rising Sun?',
//       options: ['China', 'Japan', 'South Korea', 'Thailand'],
//       correctAnswer: 'Japan',
//     },
//     {
//       id: 5,
//       question: 'In what year did the Titanic sink?',
//       options: ['1910', '1925', '1940', '1912'],
//       correctAnswer: '1912',
//     },
//     {
//       id: 6,
//       question: 'Who wrote the play "Romeo and Juliet"?',
//       options: ['William Shakespeare', 'Jane Austen', 'Charles Dickens', 'F. Scott Fitzgerald'],
//       correctAnswer: 'William Shakespeare',
//     },
//     {
//       id: 7,
//       question: 'Which element has the chemical symbol "O"?',
//       options: ['Oxygen', 'Gold', 'Silver', 'Carbon'],
//       correctAnswer: 'Oxygen',
//     },
//     {
//       id: 8,
//       question: 'What is the largest ocean on Earth?',
//       options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
//       correctAnswer: 'Pacific Ocean',
//     },
//     {
//       id: 9,
//       question: 'Who painted the Mona Lisa?',
//       options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Claude Monet'],
//       correctAnswer: 'Leonardo da Vinci',
//     },
//     {
//       id: 10,
//       question: 'What is the capital of Australia?',
//       options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
//       correctAnswer: 'Canberra',
//     },
// ];

// function TestComponent() {
//   const [answers, setAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [remainingTime, setRemainingTime] = useState(10 * 60); // 10 minutes in seconds

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setRemainingTime((prevTime) => {
//         if (prevTime > 0 && !submitted) {
//           return prevTime - 1;
//         } else {
//           clearInterval(timer);
//           if (!submitted) {
//             handleSubmit();
//           }
//           return 0;
//         }
//       });
//     }, 1000); // 1 second interval

//     return () => clearInterval(timer);
//   }, [submitted]);

//   const handleRadioChange = (questionId, selectedAnswer) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionId]: selectedAnswer,
//     }));
//   };

//   const handleSubmit = () => {
//     setSubmitted(true);
//   };

//   const calculateTotalMarks = () => {
//     let totalMarks = 0;
//     questionsData.forEach((question) => {
//       if (answers[question.id] === question.correctAnswer) {
//         totalMarks += 1;
//       }
//     });
//     return totalMarks;
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div className="bg-gray-100 p-2 min-h-screen w-full flex flex-col rounded-lg items-center justify-center">
//       <div className="bg-white w-3/4 p-6 rounded-3xl shadow-md mb-6">
//         <h4 className="text-2xl font-bold mb-5">Test Questions</h4>
//         <div className="mb-4">
//           <p className="text-lg">Time Remaining: {formatTime(remainingTime)}</p>
//         </div>
//         <form>
//           {questionsData.map((question) => (
//             <div key={question.id} className="mb-4">
//               <div>
//                 <h6 className="text-lg font-semibold">{question.question}</h6>
//                 <div className="mt-2">
//                   {question.options.map((option) => (
//                     <label key={option} className="block mb-2">
//                       <input
//                         type="radio"
//                         value={option}
//                         checked={answers[question.id] === option}
//                         onChange={() => handleRadioChange(question.id, option)}
//                         disabled={submitted}
//                         className="mr-2"
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={handleSubmit}
//             className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//             disabled={submitted}
//           >
//             Submit Answers
//           </button>
//         </form>
//         {submitted && (
//           <div className="mt-6">
//             <h5 className="text-xl font-bold">Total Marks: {calculateTotalMarks()}</h5>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default TestComponent;





// // TestComponent.jsx
// import React, { useState, useEffect, useCallback } from 'react';
// import axios from 'axios';

// function TestComponent({ test, studentId }) {
//   const [answers, setAnswers] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [remainingTime, setRemainingTime] = useState(10 * 60); 

//   const handleSubmit = useCallback(async () => {
//     setSubmitted(true);
//     const totalMarks = calculateTotalMarks();

//     // Send results to the backend
//     try {
//       await axios.post('http://localhost:8789/student/student-test', {
//         testId: test._id,
//         studentId,  
//         answers,
//         totalMarks,
//       });
//       console.log('Result submitted successfully');
//     } catch (error) {
//       console.error('Error submitting result:', error);
//     }
//   }, [answers, test._id, studentId]);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setRemainingTime((prevTime) => {
//         if (prevTime > 0 && !submitted) {
//           return prevTime - 1;
//         } else {
//           clearInterval(timer);
//           if (!submitted) {
//             handleSubmit();
//           }
//           return 0;
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [submitted, handleSubmit]);

//   const handleRadioChange = (questionId, selectedAnswer) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionId]: selectedAnswer,
//     }));
//   };

//   const calculateTotalMarks = () => {
//     let totalMarks = 0;
//     test.questions.forEach((question) => {
//       if (answers[question._id] === question.correctAnswer) {
//         totalMarks += 1;
//       }
//     });
//     return totalMarks;
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60);
//     const seconds = time % 60;
//     return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//   };

//   return (
//     <div className="bg-gray-100 p-2 min-h-screen w-full flex flex-col rounded-lg items-center justify-center">
//       <div className="bg-gray-200 w-3/4 p-6 rounded-3xl shadow-md mb-6">
//         <h4 className="text-2xl font-bold mb-5">Test Questions</h4>
//         <div className="mb-4">
//           <p className="text-lg">Time Remaining: {formatTime(remainingTime)}</p>
//         </div>
//         <form>
//           {test.questions.map((question) => (
//             <div key={question._id} className="mb-4">
//               <div>
//                 <h6 className="text-lg font-semibold">{question.question}</h6>
//                 <div className="mt-2">
//                   {question.options.map((option, optionIndex) => (
//                     <label key={optionIndex} className="block mb-2">
//                       <input
//                         type="radio"
//                         name={`question-${question._id}`} 
//                         value={option}
//                         checked={answers[question._id] === option}
//                         onChange={() => handleRadioChange(question._id, option)}
//                         disabled={submitted}
//                         className="mr-2"
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={handleSubmit}
//             className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//             disabled={submitted}
//           >
//             Submit Answers
//           </button>
//         </form>
//         {submitted && (
//           <div className="mt-6">
//             <h5 className="text-xl font-bold">Total Marks: {calculateTotalMarks()}</h5>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default TestComponent;






// TestComponent.jsx
import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// import StudentResults from './StudentResults';

function TestComponent({ test, studentId }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [remainingTime, setRemainingTime] = useState(10 * 60);

  const handleSubmit = useCallback(async () => {
    setSubmitted(true);
    const totalMarks = calculateTotalMarks();

    // Send results to the backend
    try {
      await axios.post('http://localhost:8789/student/student-test', {
        testId: test._id,
        studentId,
        answers,
        totalMarks,
      });
      console.log('Result submitted successfully');
    } catch (error) {
      console.error('Error submitting result:', error);
    }
  }, [answers, test._id, studentId]);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0 && !submitted) {
          return prevTime - 1;
        } else {
          clearInterval(timer);
          if (!submitted) {
            handleSubmit();
          }
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted, handleSubmit]);

  const handleRadioChange = (questionId, selectedAnswer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedAnswer,
    }));
  };

  const calculateTotalMarks = () => {
    let totalMarks = 0;
    test.questions.forEach((question) => {
      if (answers[question._id] === question.correctAnswer) {
        totalMarks += 1;
      }
    });
    return totalMarks;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="bg-gray-100 p-2 min-h-screen w-full flex flex-col rounded-lg items-center justify-center">
      <div className="bg-gray-200 w-3/4 p-6 rounded-3xl shadow-md mb-6">
        <h4 className="text-2xl font-bold mb-5">Test Questions</h4>
        <div className="mb-4">
          <p className="text-lg">Time Remaining: {formatTime(remainingTime)}</p>
        </div>
        <form>
          {test.questions.map((question) => (
            <div key={question._id} className="mb-4">
              <div>
                <h6 className="text-lg font-semibold">{question.question}</h6>
                <div className="mt-2">
                  {question.options.map((option, optionIndex) => (
                    <label key={optionIndex} className="block mb-2">
                      <input
                        type="radio"
                        name={`question-${question._id}`}
                        value={option}
                        checked={answers[question._id] === option}
                        onChange={() => handleRadioChange(question._id, option)}
                        disabled={submitted}
                        className="mr-2"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            disabled={submitted}
          >
            Submit Answers
          </button>
        </form>
        {submitted && (
          <div className="mt-6">
            <h5 className="text-xl font-bold">Total Marks: {calculateTotalMarks()}</h5>
          </div>
        )}
      </div>
      {submitted && (
        <div className="bg-gray-200 w-3/4 p-6 rounded-3xl shadow-md mt-6">
          {/* <StudentResults studentId={studentId} /> */}
        </div>
      )}
    </div>
  );
}

export default TestComponent;
