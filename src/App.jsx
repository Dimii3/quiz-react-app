import React from "react";
import Header from "./components/Header/Header";
import Quiz from "./components/Quiz/Quiz";

export default function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Quiz></Quiz>
      </main>
    </>
  );
}
