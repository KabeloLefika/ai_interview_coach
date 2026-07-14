import { useState } from "react";
import api from "../../services/api";

import Card from "../common/Card";
import Button from "../common/Button";

import UploadZone from "./UploadZone";

import AnalysisLoader from "../analysis/AnalysisLoader";
import CandidateDashboard from "../analysis/CandidateDashboard";

interface Candidate {
  candidate_name: string;
  skills: string[];
  education: string[];
  experience: string[];
  projects: string[];
  recommended_role: string;
}

interface UploadResponse {
  message: string;
  filename: string;
  candidate: Candidate;
}

export default function UploadCard() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  const uploadCV = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await api.post<UploadResponse>(
        "/upload-cv",
        formData
      );

      // Keep the loading animation visible briefly
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setCandidate(response.data.candidate);
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  // Show loading screen
  if (loading) {
    return <AnalysisLoader />;
  }

  // Show dashboard after upload
  if (candidate) {
    return <CandidateDashboard candidate={candidate} />;
  }

  // Default upload screen
  return (
    <Card className="mx-auto w-full max-w-3xl">
      <h2 className="mb-3 text-center text-4xl font-bold">
        Upload Your Resume
      </h2>

      <p className="mb-8 text-center text-gray-400">
        Upload your resume and let AI prepare a personalized interview.
      </p>

      <UploadZone
        file={file}
        onFileSelected={(selectedFile) => setFile(selectedFile)}
      />

      <div className="mt-8">
        <Button
          onClick={uploadCV}
          disabled={!file}
        >
          Analyze Resume
        </Button>
      </div>
    </Card>
  );
}