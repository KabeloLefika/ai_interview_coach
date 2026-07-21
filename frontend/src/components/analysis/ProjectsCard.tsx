import { FolderKanban } from "lucide-react";
import Card from "../common/Card";
import type { Project } from "../../context/SessionContext";

interface Props {
  projects: Project[];
}

export default function ProjectsCard({ projects }: Props) {
  return (
    <Card>
      <div className="flex items-center gap-3">
        <FolderKanban className="text-blue-600" />

        <h2 className="text-xl font-bold">
          Projects
        </h2>
      </div>

      <div className="mt-5 space-y-4">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((project, index) => (
            <div
                key={index}
                className="rounded-xl border border-[#232129] bg-[#1A181F] p-5"
            >

                <h3 className="font-bold text-white">
                    {project.title}
                </h3>

                {project.link && (

                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block break-all text-[#93CD0C] underline"
                    >
                        {project.link}
                    </a>

                )}

            </div>
          ))
        )}
      </div>
    </Card>
  );
}