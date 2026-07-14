import Card from "../common/Card";
import Button from "../common/Button";
import { useSession } from "../../hooks/useSession";

export default function CompletedDashboard() {
  const { candidate, result } = useSession();

  if (!candidate || !result) {
    return null;
  }

  return (
    <Card className="bg-[#131118] border border-[#232129] shadow-[0_0_40px_rgba(147,205,12,0.08)]">

      <div className="text-center">

        <div className="text-6xl">✅</div>

        <h1 className="mt-6 text-4xl font-bold text-white">
          Interview Completed
        </h1>

        <p className="mt-3 text-gray-400">
          Thank you for completing your AI Interview.
        </p>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-[#232129] bg-[#1A181F] p-6">

          <p className="text-gray-400">
            Candidate
          </p>

          <h2 className="mt-2 text-2xl font-bold text-white">
            {candidate.candidate_name}
          </h2>

        </div>

        <div className="rounded-2xl border border-[#232129] bg-[#1A181F] p-6">

          <p className="text-gray-400">
            Recommended Role
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#93CD0C]">
            {candidate.recommended_role}
          </h2>

        </div>

      </div>

      <div className="mt-6 rounded-2xl border border-[#93CD0C] bg-[#1A181F] p-8 text-center">

        <p className="text-gray-400">
          Overall Interview Score
        </p>

        <h2 className="mt-3 text-6xl font-bold text-[#93CD0C]">
          {result.score}%
        </h2>

      </div>

      <div className="mt-10 flex justify-center">

        <Button disabled>
          📄 Download Report (Coming Soon)
        </Button>

      </div>

    </Card>
  );
}