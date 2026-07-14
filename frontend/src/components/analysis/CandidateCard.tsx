import { User } from "lucide-react";
import Card from "../common/Card";

interface CandidateCardProps {
  name: string;
}

export default function CandidateCard({
  name,
}: CandidateCardProps) {
  return (
    <Card>

      <div className="flex items-center gap-4">

        <div className="rounded-full bg-blue-100 p-4">

          <User
            size={36}
            className="text-blue-600"
          />

        </div>

        <div>

          <h2 className="text-xl font-bold">
            Candidate
          </h2>

          <p className="text-gray-400">
            {name}
          </p>

        </div>

      </div>

    </Card>
  );
}