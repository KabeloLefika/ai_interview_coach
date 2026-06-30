import { useState } from "react";

import Card from "../common/Card";
import Button from "../common/Button";

import QuestionCard from "./QuestionCard";
import AnswerBox from "./AnswerBox";
import InterviewProgress from "./InterviewProgress";

const questions = [
  "Tell me about yourself.",
  "Why are you interested in this role?",
  "Describe a challenging project you've worked on.",
  "What are your greatest strengths?",
  "Where do you see yourself in five years?",
];

export default function InterviewCard() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");

  const totalQuestions = questions.length;

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
    } else {
      alert("Interview Complete! 🎉");
    }
  };

  return (
    <Card className="mx-auto w-full max-w-4xl">
      <h1 className="mb-8 text-center text-4xl font-bold">
        AI Interview
      </h1>

      <InterviewProgress
        current={currentQuestion + 1}
        total={totalQuestions}
      />

      <QuestionCard
        question={questions[currentQuestion]}
      />

      <AnswerBox
        value={answer}
        onChange={setAnswer}
      />

      <div className="mt-8 flex justify-end">
        <Button
          onClick={nextQuestion}
          disabled={answer.trim() === ""}
        >
          {currentQuestion === totalQuestions - 1
            ? "Finish Interview"
            : "Next Question"}
        </Button>
      </div>
    </Card>
  );
}