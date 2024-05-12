import React, { useCallback, useState } from "react";
import { QUESTIONS } from "../../constants/question";
import Question from "../Question/Question";
import Summary from "../Summary/Summary";

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

  if (quizIsComplete) return <Summary userAnswer={userAnswer}></Summary>;

  return (
    <div id="quiz">
      <Question
        key={activeQuestIndex}
        index={activeQuestIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      ></Question>
    </div>
  );
}
