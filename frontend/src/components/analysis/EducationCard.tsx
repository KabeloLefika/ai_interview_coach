import { GraduationCap } from "lucide-react";
import Card from "../common/Card";
import type { Education } from "../../context/SessionContext";

interface Props {
  education: Education[];
}

export default function EducationCard({ education }: Props) {
  return (
    <Card>
      <div className="flex items-center gap-3">
        <GraduationCap className="text-blue-600" />

        <h2 className="text-xl font-bold">
          Education
        </h2>
      </div>

      <div className="mt-5 space-y-4">
        {education.length === 0 ? (
          <p>No education found.</p>
        ) : (
          education.map((item, index) => (
            <div key={index}>
              <p className="font-semibold">{item.degree}</p>

              <p className="text-gray-400">
                {item.institution}
              </p>

              <p className="text-sm text-gray-500">
                {item.graduation_year}
              </p>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}