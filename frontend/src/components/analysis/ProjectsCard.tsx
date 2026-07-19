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
            <div key={index}>
              <p className="font-semibold">
                {project.title}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline break-all"
              >
                {project.link}
              </a>
            </div>
          ))
        )}
      </div>
    </Card>
  );
}