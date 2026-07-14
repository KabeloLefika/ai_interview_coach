import { useNavigate } from "react-router-dom";

import Button from "../common/Button";

import CandidateCard from "./CandidateCard";
import SkillsCard from "./SkillsCard";
import EducationCard from "./EducationCard";
import ExperienceCard from "./ExperienceCard";
import ProjectsCard from "./ProjectsCard";
import RecommendationCard from "./RecommendationCard";

import { useSession } from "../../hooks/useSession";

export default function CandidateDashboard() {
  const navigate = useNavigate();

  const {
    candidate,
    interviewCompleted,
  } = useSession();

  if (!candidate) {
    return (
      <div className="text-center text-white">
        No candidate loaded.
      </div>
    );
  }

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

      {/* Interview Button */}

      <div className="pt-4">

        <Button
          disabled={interviewCompleted}
          onClick={() => navigate("/interview")}
        >
          {interviewCompleted
            ? "✅ Interview Completed"
            : "🚀 Start AI Interview"}
        </Button>

      </div>

    </div>
  );
}