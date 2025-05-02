import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import questions from "./data/questions";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption("");
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">React Quiz App</h2>
      {!showScore ? (
        <>
          <QuestionCard
            question={questions[currentQuestion].question}
            options={questions[currentQuestion].options}
            selectedOption={selectedOption}
            onSelect={setSelectedOption}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
          />
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </>
      ) : (
        <div className="text-center">
          <h3>Quiz Complete!</h3>
          <p>Correct Answers: {score} / {questions.length}</p>
          <p>Score: {((score / questions.length) * 100).toFixed(2)}%</p>
          <button className="btn btn-secondary" onClick={restartQuiz}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;
