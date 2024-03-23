import "./App.css";
import React, { useState } from "react";
import NameInput from "./NameInput.jsx"; // Import the NameInput component

function App() {
  const [showFinalResults, setShowFinalResults] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const questions = [
    {
      text: "الرجاء اختيار اكثر قطعة فنية جذبتك",
      options: [
        { id: 0, image: "/1.jpeg" },
        { id: 1, image: "/2.jpeg" },
        { id: 2, image: "/3.jpeg" },
        { id: 3, image: "/4.jpeg" },
      ],
    },
    {
      text: "اول صورة لفتت انتبهاك؟",
      options: [
        { id: 0, image: "/00.jpeg" },
        { id: 1, image: "/11.jpg" },
        { id: 2, image: "/22.jpg" },
        { id: 3, image: "/33.jpg" },
      ],
    },
    {
      text: "ايش احلى سجادة؟",
      options: [
        { id: 0, image: "/000.jpeg" },
        { id: 1, image: "/111.jpg" },
        { id: 2, image: "/222.jpg" },
        { id: 3, image: "/333.jpg" },
      ],
    },
    // Add more questions as needed
  ];

  const handleImageClick = (optionId) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = optionId;
    setSelectedOptions(updatedSelectedOptions);

    // Move to the next question
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Show final results
      setShowFinalResults(true);
    }
  };

  return (
    <div className="App">
      <h1>
        :3 تم اختيارك لدراسة علمية جديدة, كن عونا لنا في هذا البحث العظيم{" "}
      </h1>
      {/* Add the NameInput component */}
      <NameInput />
      {/* 1. Header */}
      <h2>اختبار مهم جدا </h2>
      {/* ----------------------------------------------------------- */}
      {showFinalResults ? (
        /* Final Result */
        <div className="final-result">
          <h1>النتائج النهائية</h1>
          <h2>تم اختيار:</h2>
          <ul>
            {selectedOptions.map((optionId, index) => (
              <li key={index}>{optionId}</li>
            ))}
          </ul>
          <button onClick={() => setShowFinalResults(false)}>مجددا</button>
        </div>
      ) : (
        /* Cards */
        <div className="Questions">
          <h3 className='question-text'>{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li key={option.id}>
                  <img
                    src={option.image}
                    alt={option.id}
                    onClick={() => handleImageClick(option.id)}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
