import React, { useState } from "react";
import { QUESTIONS } from "../../constants/question";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestIndex = userAnswer.length;

  function handleSelectAnswer(selectedAnswer) {
    setUserAnswer((prev) => [...prev, selectedAnswer]);
  }
  return (
    <div id="quiz">
      <div id="question">
        <h2>{QUESTIONS[activeQuestIndex].text}</h2>
        <ul id="answers">
          {QUESTIONS[activeQuestIndex].answers.map((answer) => (
            <li key={answer} className="answer">
              <button
                onClick={() => {
                  handleSelectAnswer(answer);
                }}
              >
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
