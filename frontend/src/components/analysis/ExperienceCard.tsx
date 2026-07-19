import { Briefcase } from "lucide-react";
import Card from "../common/Card";
import type { Experience } from "../../context/SessionContext";

interface Props {
  experience: Experience[];
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <Card>
      <div className="flex items-center gap-3">
        <Briefcase className="text-blue-600" />

        <h2 className="text-xl font-bold">
          Experience
        </h2>
      </div>

      <div className="mt-5 space-y-5">
        {experience.length === 0 ? (
          <p>No experience found.</p>
        ) : (
          experience.map((job, index) => (
            <div key={index}>
              <p className="font-semibold">
                {job.role}
              </p>

              <p>{job.company}</p>

              <p className="text-sm text-gray-400">
                {job.duration}
              </p>

              <p className="text-sm">
                {job.responsibilities}
              </p>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}