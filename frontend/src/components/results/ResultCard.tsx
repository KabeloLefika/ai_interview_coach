import Card from "../common/Card";
import Button from "../common/Button";
import { useLocation, useNavigate } from "react-router-dom";
import type { InterviewResult } from "../../types/result";

const strengths = [
  "Strong communication skills",
  "Clear technical explanations",
  "Confident responses",
];

const improvements = [
  "Give more measurable examples",
  "Expand on project experience",
];


export default function ResultCard() {
  const navigate = useNavigate();



const location = useLocation();

const result = location.state as InterviewResult | undefined;

if (!result) {
    return (
        <Card className="w-full max-w-3xl bg-[#131118] border border-[#232129] p-10 text-center">
            <h2 className="text-3xl font-bold text-white">
                No Interview Results Found
            </h2>

            <p className="mt-4 text-gray-400">
                Please complete an interview first.
            </p>

            <div className="mt-8">
                <Button onClick={() => navigate("/")}>
                    Return Home
                </Button>
            </div>
        </Card>
    );
}

  return (
    <Card className="w-full max-w-4xl bg-[#131118] border border-[#232129] shadow-[0_0_50px_rgba(147,205,12,0.08)] p-10">

        {/*header*/}
      <h1 className="text-center text-4xl font-bold text-white">
        {result.candidateName}'s Interview Report
      </h1>

      <p className="mt-4 text-center text-gray-400">
        AI generated interview summary
      </p>

      {/* Score */}

      <div className="mt-10 text-center">

        <p className="text-gray-400">
          Overall Score
        </p>

        <h2 className="mt-3 text-7xl font-bold text-[#93CD0C]">
          {result.score}%
        </h2>

        <p className="mt-3 text-xl text-white">
          ⭐⭐⭐⭐☆ Excellent Candidate
        </p>

      </div>

      {/* Score Cards */}

      <div className="mt-12 grid gap-6 md:grid-cols-2">

        <ScoreCard title="Communication" score={result.communication} />

        <ScoreCard title="Technical Knowledge" score={result.technical} />

        <ScoreCard title="Confidence" score={result.confidence} />

        <ScoreCard title="Problem Solving" score={result.problemSolving} />

      </div>

      {/* Feedback */}

      <div className="mt-12 grid gap-8 md:grid-cols-2">

        <FeedbackCard
          title="Strengths"
          items={result.strengths}
        />

        <FeedbackCard
          title="Areas for Improvement"
          items={result.improvements}
        />

      </div>

      {/* Recommended Role */}

      <div className="mt-12 rounded-2xl border border-[#93CD0C] bg-[#1A181F] p-8 text-center">

        <p className="text-gray-400">
          Recommended Role
        </p>

        <h2 className="mt-2 text-4xl font-bold text-[#93CD0C]">
          {result.recommendedRole}
        </h2>

      </div>

      {/* Buttons */}

      <div className="mt-12 flex justify-center gap-6">

        <Button>
          Download Report
        </Button>

        <Button
          onClick={() => navigate("/")}
        >
          Return to Dashboard
        </Button>

      </div>

    </Card>
  );
}

/* -------------------- */

function ScoreCard({
  title,
  score,
}: {
  title: string;
  score: number;
}) {
  return (
    <div className="rounded-2xl border border-[#232129] bg-[#1A181F] p-6">

      <div className="flex justify-between">

        <span className="text-white font-semibold">
          {title}
        </span>

        <span className="text-[#93CD0C] font-bold">
          {score}%
        </span>

      </div>

      <div className="mt-4 h-3 rounded-full bg-[#232129]">

        <div
          className="h-3 rounded-full bg-[#93CD0C]"
          style={{ width: `${score}%` }}
        />

      </div>

    </div>
  );
}

/* -------------------- */

function FeedbackCard({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-[#232129] bg-[#1A181F] p-6">

      <h3 className="mb-5 text-2xl font-bold text-white">
        {title}
      </h3>

      <ul className="space-y-4">

        {items.map((item) => (
          <li
            key={item}
            className="text-gray-300"
          >
            ✓ {item}
          </li>
        ))}

      </ul>

    </div>
  );
}