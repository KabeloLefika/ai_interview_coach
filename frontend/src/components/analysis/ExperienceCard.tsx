import { Briefcase } from "lucide-react";
import Card from "../common/Card";

interface Props {
  experience: string[];
}

export default function ExperienceCard({
  experience,
}: Props) {
  return (
    <Card>

      <div className="flex items-center gap-3">

        <Briefcase className="text-blue-600" />

        <h2 className="text-xl font-bold">
          Experience
        </h2>

      </div>

      <ul className="mt-5 space-y-3">

        {experience.length === 0 ? (
          <li className="text-slate-500">
            No experience found.
          </li>
        ) : (
          experience.map((job) => (
            <li key={job}>
              {job}
            </li>
          ))
        )}

      </ul>

    </Card>
  );
}