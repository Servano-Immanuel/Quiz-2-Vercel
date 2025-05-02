import React from "react";

function QuestionCard({ question, options, selectedOption, onSelect, currentQuestion, totalQuestions }) {
  return (
    <div className="card p-4 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">{question}</h5>
        <span className="text-muted" style={{ fontSize: '0.9rem' }}>
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
      </div>
      <div>
        {options.map((option, index) => (
          <div key={index} className="form-check">
            <input
              type="radio"
              id={`option-${index}`}
              name="answer"
              value={option}
              checked={selectedOption === option}
              onChange={() => onSelect(option)}
              className="form-check-input"
            />
            <label htmlFor={`option-${index}`} className="form-check-label">
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard; 