import { Target } from "lucide-react";
import Card from "../common/Card";

interface Props {
  role: string;
}

export default function RecommendationCard({
  role,
}: Props) {
  return (
    <Card>

      <div className="flex items-center gap-3">

        <Target className="text-green-600" />

        <h2 className="text-xl font-bold">
          Recommended Role
        </h2>

      </div>

      <p className="mt-6 text-2xl font-bold text-green-600">
        {role}
      </p>

    </Card>
  );
}