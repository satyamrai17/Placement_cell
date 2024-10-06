// import React, { useState, useEffect } from 'react';

// const TestAssignment = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState({
//     question: '',
//     options: ['', '', '', ''],
//     correctAnswer: '',
//   });

//   useEffect(() => {
//     console.log('Current Questions:', questions);
//   }, [questions]);

//   const handleAddQuestion = () => {
//     setQuestions((prevQuestions) => [...prevQuestions, { ...currentQuestion }]);
//     setCurrentQuestion({
//       question: '',
//       options: ['', '', '', ''],
//       correctAnswer: '',
//     });
//   };

//   const handleRemoveQuestion = (index) => {
//     setQuestions((prevQuestions) => prevQuestions.filter((_, i) => i !== index));
//   };

//   const handleOptionChange = (index, optionValue) => {
//     setCurrentQuestion((prevQuestion) => {
//       const updatedOptions = [...prevQuestion.options];
//       updatedOptions[index] = optionValue;
//       return { ...prevQuestion, options: updatedOptions };
//     });
//   };

//   const handleCorrectAnswerChange = (correctAnswer) => {
//     setCurrentQuestion((prevQuestion) => ({ ...prevQuestion, correctAnswer }));
//   };

//   const handleQuestionChange = (question) => {
//     setCurrentQuestion((prevQuestion) => ({ ...prevQuestion, question }));
//   };

//   const handleSubmit = () => {
//     // Check if the current question is not empty before adding it to the questions array
//     if (currentQuestion.question.trim() !== '' && currentQuestion.options.some(option => option.trim() !== '')) {
//       setQuestions((prevQuestions) => [...prevQuestions, { ...currentQuestion }]);
//     }

//     // Optionally, reset currentQuestion state here if needed
//     setCurrentQuestion({
//       question: '',
//       options: ['', '', '', ''],
//       correctAnswer: '',
//     });
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h2 className="text-2xl font-bold mb-4">Test Assignment Page</h2>
//       <form className="space-y-4">
//         {questions.map((question, index) => (
//           <div key={index} className="bg-white p-4 rounded shadow mb-4">
//             <div className="flex justify-between items-center mb-4">
//               <h4 className="text-lg font-semibold">Question {index + 1}</h4>
//               <button
//                 type="button"
//                 onClick={() => handleRemoveQuestion(index)}
//                 className="text-red-500 hover:text-red-600 focus:outline-none"
//               >
//                 Remove Question
//               </button>
//             </div>
//             <label className="block mt-2">
//               Question:
//               <input
//                 type="text"
//                 value={question.question}
//                 onChange={(e) => handleQuestionChange(e.target.value)}
//                 className="border rounded p-2 w-full mt-1"
//               />
//             </label>
//             <label className="block mt-2">
//               Options:
//               {question.options.map((option, optionIndex) => (
//                 <input
//                   key={optionIndex}
//                   type="text"
//                   value={option}
//                   onChange={(e) => handleOptionChange(optionIndex, e.target.value)}
//                   className="border rounded p-2 w-full mt-1"
//                 />
//               ))}
//             </label>
//             <label className="block mt-2">
//               Correct Answer:
//               <input
//                 type="text"
//                 value={question.correctAnswer}
//                 onChange={(e) => handleCorrectAnswerChange(e.target.value)}
//                 className="border rounded p-2 w-full mt-1"
//               />
//             </label>
//           </div>
//         ))}
//         <div className="bg-white p-4 rounded shadow mb-4">
//           <h4 className="text-lg font-semibold">Add New Question</h4>
//           <label className="block mt-2">
//             Question:
//             <input
//               type="text"
//               value={currentQuestion.question}
//               onChange={(e) => handleQuestionChange(e.target.value)}
//               className="border rounded p-2 w-full mt-1"
//             />
//           </label>
//           <label className="block mt-2">
//             Options:
//             {currentQuestion.options.map((option, optionIndex) => (
//               <input
//                 key={optionIndex}
//                 type="text"
//                 value={option}
//                 onChange={(e) => handleOptionChange(optionIndex, e.target.value)}
//                 className="border rounded p-2 w-full mt-1"
//               />
//             ))}
//           </label>
//           <label className="block mt-2">
//             Correct Answer:
//             <input
//               type="text"
//               value={currentQuestion.correctAnswer}
//               onChange={(e) => handleCorrectAnswerChange(e.target.value)}
//               className="border rounded p-2 w-full mt-1"
//             />
//           </label>
//         </div>
//         <div className="flex space-x-4">
//           <button
//             type="button"
//             onClick={handleAddQuestion}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Add Question
//           </button>
//           <button
//             type="button"
//             onClick={handleSubmit}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//           >
//             Submit Test Assignment
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TestAssignment;





import React, { useState } from 'react';
import axios from 'axios';

const QuestionForm = ({ question, options, correctAnswer, onQuestionChange, onOptionChange, onCorrectAnswerChange, onRemoveQuestion }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <label className="block mt-2">
        Question:
        <input
          type="text"
          value={question}
          onChange={(e) => onQuestionChange(e.target.value)}
          className="border rounded p-2 w-full mt-1"
        />
      </label>
      <label className="block mt-2">
        Options:
        {options.map((option, optionIndex) => (
          <input
            key={optionIndex}
            type="text"
            value={option}
            onChange={(e) => onOptionChange(optionIndex, e.target.value)}
            className="border rounded p-2 w-full mt-1"
          />
        ))}
      </label>
      <label className="block mt-2">
        Correct Answer:
        <input
          type="text"
          value={correctAnswer}
          onChange={(e) => onCorrectAnswerChange(e.target.value)}
          className="border rounded p-2 w-full mt-1"
        />
      </label>
      <button
        type="button"
        onClick={onRemoveQuestion}
        className="text-red-500 hover:text-red-600 focus:outline-none mt-2"
      >
        Remove Question
      </button>
    </div>
  );
};

const TestAssignment = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: '',
    options: ['', '', '', ''],
    correctAnswer: ''
  });

  const handleAddQuestion = () => {
    setQuestions((prevQuestions) => [...prevQuestions, currentQuestion]);
    setCurrentQuestion({
      question: '',
      options: ['', '', '', ''],
      correctAnswer: ''
    });
  };

  const handleRemoveQuestion = (index) => {
    setQuestions((prevQuestions) => prevQuestions.filter((_, i) => i !== index));
  };

  const handleCurrentQuestionChange = (field, value) => {
    setCurrentQuestion((prev) => ({ ...prev, [field]: value }));
  };

  const handleCurrentOptionChange = (index, value) => {
    setCurrentQuestion((prev) => {
      const newOptions = [...prev.options];
      newOptions[index] = value;
      return { ...prev, options: newOptions };
    });
  };

  const handleSubmit = async () => {
    // Add the current question to the list before submitting
    handleAddQuestion();

    // Submit the questions state after ensuring the last question is added
    try {
      const response = await axios.post('http://localhost:8789/save-test-assignment', { questions: [...questions, currentQuestion] });
      console.log('Test assignment submitted:', response.data);
      setQuestions([]);
      setCurrentQuestion({
        question: '',
        options: ['', '', '', ''],
        correctAnswer: ''
      });
    } catch (error) {
      console.error('Error submitting test assignment:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Test Assignment Page</h2>
      <form className="space-y-4">
        {questions.map((question, index) => (
          <QuestionForm
            key={index}
            question={question.question}
            options={question.options}
            correctAnswer={question.correctAnswer}
            onQuestionChange={(value) => {
              const updatedQuestions = [...questions];
              updatedQuestions[index].question = value;
              setQuestions(updatedQuestions);
            }}
            onOptionChange={(optionIndex, value) => {
              const updatedQuestions = [...questions];
              updatedQuestions[index].options[optionIndex] = value;
              setQuestions(updatedQuestions);
            }}
            onCorrectAnswerChange={(value) => {
              const updatedQuestions = [...questions];
              updatedQuestions[index].correctAnswer = value;
              setQuestions(updatedQuestions);
            }}
            onRemoveQuestion={() => handleRemoveQuestion(index)}
          />
        ))}
        <div className="bg-white p-4 rounded shadow mb-4">
          <h4 className="text-lg font-semibold">Add New Question</h4>
          <label className="block mt-2">
            Question:
            <input
              type="text"
              value={currentQuestion.question}
              onChange={(e) => handleCurrentQuestionChange('question', e.target.value)}
              className="border rounded p-2 w-full mt-1"
            />
          </label>
          <label className="block mt-2">
            Options:
            {currentQuestion.options.map((option, optionIndex) => (
              <input
                key={optionIndex}
                type="text"
                value={option}
                onChange={(e) => handleCurrentOptionChange(optionIndex, e.target.value)}
                className="border rounded p-2 w-full mt-1"
              />
            ))}
          </label>
          <label className="block mt-2">
            Correct Answer:
            <input
              type="text"
              value={currentQuestion.correctAnswer}
              onChange={(e) => handleCurrentQuestionChange('correctAnswer', e.target.value)}
              className="border rounded p-2 w-full mt-1"
            />
          </label>
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={handleAddQuestion}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Question
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Submit Test Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

export default TestAssignment;
