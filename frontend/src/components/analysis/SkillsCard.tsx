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

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#93CD0C]/15">

          <Code className="text-[#93CD0C]" />

        </div>

        <h2 className="text-2xl font-bold text-white">
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
                className="
                rounded-full
                border
                border-[#93CD0C]
                bg-[#93CD0C]/15
                px-4
                py-2
                text-sm
                font-medium
                text-white
                "
            >
              {skill}
            </span>
          ))
        )}

      </div>

    </Card>
  );
}