import { Target } from "lucide-react";
import Card from "../common/Card";

interface Props {
  role: string;
}

export default function RecommendationCard({
  role,
}: Props) {
  return (
    <Card className="h-full">

      <div className="flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#93CD0C]/15">

          <Target
            className="text-[#93CD0C]"
            size={34}
          />

        </div>

        <div>

          <p className="text-sm uppercase tracking-wider text-gray-400">
            Recommended Role
          </p>

          <h2 className="mt-1 text-2xl font-bold text-[#93CD0C]">
            {role}
          </h2>

        </div>

      </div>

    </Card>
  );
}