import React, { useCallback, useState } from "react";
import { QUESTIONS } from "../../constants/question";
import quizCompleteImg from "../../assets/quiz-complete.png";
import QuestionTimer from "../QuestionTimer/QuestionTimer";

export default function Quiz() {
  const [userAnswer, setUserAnswer] = useState([]);
  const activeQuestIndex = userAnswer.length;
  const quizIsComplete = activeQuestIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswer((prev) => [...prev, selectedAnswer]);
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete)
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Trophy icon" />
        <h2>Quiz completed</h2>
      </div>
    );

  const shuffledAnswers = [...QUESTIONS[activeQuestIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        ></QuestionTimer>
        <h2>{QUESTIONS[activeQuestIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
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
