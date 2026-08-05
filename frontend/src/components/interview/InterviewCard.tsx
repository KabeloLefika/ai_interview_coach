import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import { useSession } from "../../hooks/useSession";

import Card from "../common/Card";
import Button from "../common/Button";

import QuestionCard from "./QuestionCard";
import AnswerBox from "./AnswerBox";
import InterviewProgress from "./InterviewProgress";

import AdminLayout from "../layouts/AdminLayout";

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

  // Live interview timer
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setSeconds(prev => prev + 1);

    }, 1000);

    return () => clearInterval(timer);

  }, []);

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

  const percentage = Math.round(
    ((currentQuestion + 1) / totalQuestions) * 100
  );

  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");

  const secs = String(seconds % 60).padStart(2, "0");

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

    <AdminLayout>

      <div className="px-4 py-6 sm:px-6 sm:py-10 lg:px-8">

        <div className="mx-auto w-full max-w-5xl">

          <Card className="bg-[#131118] border border-[#232129] shadow-[0_0_50px_rgba(147,205,12,0.08)] p-5 sm:p-8 md:p-10">

            <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              AI Interview
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base text-gray-400">
              Answer naturally. There are no right or wrong answers.
            </p>

            {/* Candidate Summary */}

            <div className="mt-8 rounded-2xl border border-[#232129] bg-[#1A181F] p-6">

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div>

                  <p className="text-sm text-gray-400">
                    Candidate
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white">
                    {candidate.candidate_name}
                  </h2>

                </div>

                <div>

                  <p className="text-sm text-gray-400">
                    Recommended Role
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-[#93CD0C]">
                    {candidate.recommended_role}
                  </h2>

                </div>

                <div>

                  <p className="text-sm text-gray-400">
                    Interview Time
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white">
                    {minutes}:{secs}
                  </h2>

                </div>

              </div>

            </div>

            {/* Progress */}

            <div className="mt-8 flex justify-between items-center">

              <div>

                <h3 className="text-lg font-semibold text-white">
                  Question {currentQuestion + 1} of {totalQuestions}
                </h3>

                <p className="text-gray-400">
                  {percentage}% Complete
                </p>

              </div>

              <div className="text-[#93CD0C] font-bold text-2xl">

                {percentage}%

              </div>

            </div>

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

    </div>

  </AdminLayout>

);
}