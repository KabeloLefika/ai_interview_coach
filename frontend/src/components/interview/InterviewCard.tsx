import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateInterviewResult } from "../../services/interviewResult";
import { useSession } from "../../hooks/useSession";

import Card from "../common/Card";
import Button from "../common/Button";

import QuestionCard from "./QuestionCard";
import AnswerBox from "./AnswerBox";
import InterviewProgress from "./InterviewProgress";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

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

  const navigate = useNavigate();

  const {
    candidate,
    setResult,
    setInterviewCompleted,
  } = useSession();


  const totalQuestions = questions.length;

  const nextQuestion = () => {
  if (currentQuestion < totalQuestions - 1) {
    setCurrentQuestion(currentQuestion + 1);
    setAnswer("");
  } else {
    if (!candidate) {
  navigate("/");
  return;
}

const result = generateInterviewResult(
  candidate.candidate_name,
  candidate.recommended_role
);

    setResult(result);
    setInterviewCompleted(true);

    navigate("/results");
    };
  }

  return (
    <div className="min-h-screen bg-[#08070A]">
      <Header />
      
    <Card className="w-full max-w-5xl bg-[#131118] border border-[#232129] shadow-[0_0_50px_rgba(147,205,12,0.08)]">
       
      <h1 className="mb-8 text-center text-4xl font-bold">
        AI Interview
      </h1>

      <p className="mt-2 text-center text-gray-400">
      Answer naturally. There are no right or wrong answers.
      </p>

      <InterviewProgress
        current={currentQuestion + 1}
        total={totalQuestions}
      />

      <QuestionCard
          question={questions[currentQuestion]}
        />

        <div className="mt-8">
          <AnswerBox
            value={answer}
            onChange={setAnswer}
          />
        </div>

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
     <Footer />
    </div>
  );
}