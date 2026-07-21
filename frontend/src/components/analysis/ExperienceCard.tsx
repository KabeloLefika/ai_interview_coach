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
            <div
                key={index}
                className="rounded-xl border border-[#232129] bg-[#1A181F] p-5"
            >

                <h3 className="font-bold text-white">
                    {job.role}
                </h3>

                <p className="text-[#93CD0C]">
                    {job.company}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                    {job.duration}
                </p>

                <p className="mt-3 text-gray-300 leading-7">
                    {job.responsibilities}
                </p>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}