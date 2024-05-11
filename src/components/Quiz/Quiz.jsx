import React, { useState } from "react";
import { QUESTIONS } from "../../constants/question";

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  return <p>Currently active Quesiton</p>;
}
