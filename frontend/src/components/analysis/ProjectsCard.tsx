import { FolderKanban } from "lucide-react";
import Card from "../common/Card";

interface Props {
  projects: string[];
}

export default function ProjectsCard({
  projects,
}: Props) {
  return (
    <Card>

      <div className="flex items-center gap-3">

        <FolderKanban className="text-blue-600" />

        <h2 className="text-xl font-bold">
          Projects
        </h2>

      </div>

      <ul className="mt-5 space-y-3">

        {projects.length === 0 ? (
          <li className="text-slate-500">
            No projects detected.
          </li>
        ) : (
          projects.map((project) => (
            <li key={project}>
              {project}
            </li>
          ))
        )}

      </ul>

    </Card>
  );
}