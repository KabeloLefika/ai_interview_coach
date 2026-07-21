import { User } from "lucide-react";
import Card from "../common/Card";

interface CandidateCardProps {
  name: string;
}

export default function CandidateCard({
  name,
}: CandidateCardProps) {
  return (
    <Card className="h-full">

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#93CD0C]/15">

          <User
            size={34}
            className="text-[#93CD0C]"
          />

        </div>

        <div className="min-w-0">

          <p className="text-sm uppercase tracking-wider text-gray-400">
            Candidate
          </p>

          <h2 className="mt-1 truncate text-xl font-bold text-white">
            {name}
          </h2>

        </div>

      </div>

    </Card>
  );
}