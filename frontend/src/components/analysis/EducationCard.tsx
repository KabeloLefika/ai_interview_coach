import { GraduationCap } from "lucide-react";
import Card from "../common/Card";
import type { Education } from "../../context/SessionContext";

interface Props {
  education: Education[];
}

export default function EducationCard({ education }: Props) {
  return (
    <Card>
      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#93CD0C]/15">

          <GraduationCap className="text-[#93CD0C]" />

        </div>

        <h2 className="text-2xl font-bold text-white">
          Education
        </h2>
      </div>

      <div className="mt-5 space-y-4">
        {education.length === 0 ? (
          <p>No education found.</p>
        ) : (
          education.map((item, index) => (
            <div key={index} className="rounded-xl border border-[#232129] bg-[#1A181F] p-4">

              <p className="font-semibold text-white">{item.degree}</p>

              <p className="mt-1 text-gray-300">
                {item.institution}
              </p>

              <p className="mt-1 text-sm text-[#93CD0C]">
                {item.graduation_year}
              </p>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}