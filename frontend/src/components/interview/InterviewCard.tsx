import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import { useSession } from "../../hooks/useSession";

import Card from "../common/Card";
import Button from "../common/Button";

import QuestionCard from "./QuestionCard";
import AnswerBox from "./AnswerBox";
import InterviewProgress from "./InterviewProgress";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default function InterviewCard() {

  const navigate = useNavigate();

  const {
    candidate,
    questions,
    setReport,
    setInterviewCompleted,
  } = useSession();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (!candidate) {
      navigate("/home");
      return;
    }

    if (!questions || questions.length === 0) {
      navigate("/home");
    }

  }, [candidate, questions, navigate]);

  if (!candidate || questions.length === 0) {
    return null;
  }

  const totalQuestions = questions.length;

  const nextQuestion = async () => {

    const updatedAnswers = [...answers, answer];

    setAnswers(updatedAnswers);

    if (currentQuestion < totalQuestions - 1) {

      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");

      return;
    }

    try {

      setLoading(true);

      const response = await api.post(
        "/evaluate-interview",
        {
          candidate,
          questions,
          answers: updatedAnswers,
        }
      );

      setReport(response.data);

      setInterviewCompleted(true);

      navigate("/results");

    } catch (error) {

      console.error(error);

      alert("Failed to evaluate interview.");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen bg-[#08070A] flex flex-col">

      <Header />

      <main className="flex-1 px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">

        <Card className="bg-[#131118] border border-[#232129] shadow-[0_0_50px_rgba(147,205,12,0.08)] p-5 sm:p-8 md:p-10">

            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              AI Interview
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base text-gray-400">
              Answer naturally. There are no right or wrong answers.
            </p>

            <InterviewProgress
              current={currentQuestion + 1}
              total={totalQuestions}
            />

            <QuestionCard
              question={questions[currentQuestion]}
            />

            <div className="mt-6 sm:mt-8">

              <AnswerBox
                value={answer}
                onChange={setAnswer}
              />

            </div>

            <div className="mt-8 flex justify-center sm:justify-end">

              <div className="w-full sm:w-auto sm:min-w-[220px]">

                <Button
                  onClick={nextQuestion}
                  disabled={answer.trim() === "" || loading}
                >
                  {loading
                    ? "Generating Report..."
                    : currentQuestion === totalQuestions - 1
                    ? "Finish Interview"
                    : "Next Question"}
                </Button>

              </div>

            </div>

          </Card>

        </div>

      </main>

      <Footer />

    </div>
  );
}