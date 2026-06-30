import { useNavigate } from "react-router-dom";

import Button from "../common/Button";

import CandidateCard from "./CandidateCard";
import SkillsCard from "./SkillsCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import ProjectsCard from "./ProjectsCard";
import RecommendationCard from "./RecommendationCard";

interface Candidate {
  candidate_name: string;
  skills: string[];
  education: string[];
  experience: string[];
  projects: string[];
  recommended_role: string;
}

interface Props {
  candidate: Candidate;
}

export default function CandidateDashboard({
  candidate,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className="mt-8 space-y-6">
      {/* Top Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <CandidateCard
          name={candidate.candidate_name}
        />

        <RecommendationCard
          role={candidate.recommended_role}
        />
      </div>

      {/* Middle Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <SkillsCard
          skills={candidate.skills}
        />

        <EducationCard
          education={candidate.education}
        />
      </div>

      {/* Bottom Row */}
      <div className="grid gap-6 md:grid-cols-2">
        <ExperienceCard
          experience={candidate.experience}
        />

        <ProjectsCard
          projects={candidate.projects}
        />
      </div>

      {/* Start Interview */}
      <div className="pt-4">
        <Button
          onClick={() => navigate("/interview")}
        >
          🚀 Start AI Interview
        </Button>
      </div>
    </div>
  );
}