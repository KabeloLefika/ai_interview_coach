import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";

import Card from "../common/Card";
import Button from "../common/Button";
import UploadZone from "./UploadZone";

import AnalysisLoader from "../analysis/AnalysisLoader";

import { useSession } from "../../hooks/useSession";
import type { Candidate } from "../../context/SessionContext";

interface UploadResponse {
  message: string;
  filename: string;
  candidate: Candidate;
}

export default function UploadCard() {
  const navigate = useNavigate();

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    candidate,
    setCandidate,
    interviewCompleted,
  } = useSession();

  useEffect(() => {
    if (candidate) {
      navigate("/candidate-dashboard");
    }
  }, [candidate, navigate]);

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

  return (
    <Card
      className="
        w-full
        max-w-5xl
        mx-auto
        bg-[#131118]
        border
        border-[#232129]
        shadow-[0_0_40px_rgba(147,205,12,0.08)]
        p-6
        sm:p-8
        lg:p-10
      "
    >
      <h2 className="mb-3 text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
        Upload Your Resume
      </h2>

      <p className="mb-8 text-center text-sm sm:text-base text-gray-400">
        Upload your resume and let AI prepare a personalized interview.
      </p>

      <UploadZone
        file={file}
        disabled={interviewCompleted}
        onFileSelected={(selectedFile) => setFile(selectedFile)}
      />

      <div className="mt-8">
        <Button
          onClick={uploadCV}
          disabled={!file || interviewCompleted}
        >
          {interviewCompleted
            ? "✅ Interview Completed"
            : "Analyze Resume"}
        </Button>
      </div>
    </Card>
  );
}