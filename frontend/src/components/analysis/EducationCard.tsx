import { GraduationCap } from "lucide-react";
import Card from "../common/Card";

interface Props {
  education: string[];
}

export default function EducationCard({
  education,
}: Props) {
  return (
    <Card>

      <div className="flex items-center gap-3">

        <GraduationCap className="text-blue-600" />

        <h2 className="text-xl font-bold">
          Education
        </h2>

      </div>

      <ul className="mt-5 space-y-3">

        {education.length === 0 ? (
          <li className="text-slate-500">
            No education found.
          </li>
        ) : (
          education.map((item) => (
            <li key={item}>
              {item}
            </li>
          ))
        )}

      </ul>

    </Card>
  );
}