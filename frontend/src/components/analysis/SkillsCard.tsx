import { Code } from "lucide-react";
import Card from "../common/Card";

interface Props {
  skills: string[];
}

export default function SkillsCard({
  skills,
}: Props) {
  return (
    <Card>

      <div className="flex items-center gap-3">

        <Code className="text-[#93CD0C]" />

        <h2 className="text-xl font-bold">
          Skills
        </h2>

      </div>

      <div className="mt-6 flex flex-wrap gap-3">

        {skills.length === 0 ? (
          <p className="text-slate-500">
            No skills detected.
          </p>
        ) : (
          skills.map((skill,index) => (
            <span
              key={`${skill}-${index}`}
              className="rounded-full bg-[#93CD0C]/20 px-4 py-2 text-blue-700"
            >
              {skill}
            </span>
          ))
        )}

      </div>

    </Card>
  );
}