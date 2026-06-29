import { useState } from "react";
import api from "../../services/api";

interface Candidate {
  candidate_name: string;
  skills: string[];
  education: string[];
  experience: string[];
  projects: string[];
  recommended_role: string;
}

export default function UploadCard() {
  const [file, setFile] =useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [candidate, setCandidate] = useState<Candidate | null>(null);

  const uploadCV = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await api.post("/upload-cv", formData);

      console.log(response.data);

      setCandidate(response.data.candidate);

    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl">

      <h2 className="text-3xl font-bold mb-6">
        Upload Your CV
      </h2>

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />

      {file && (
        <p className="mt-4 text-gray-600">
          {file.name}
        </p>
      )}

      <button
        onClick={uploadCV}
        disabled={loading}
        className="mt-6 w-full bg-blue-600 text-white rounded-xl py-3 hover:bg-blue-700"
      >
        {loading ? "Uploading..." : "Upload CV"}
      </button>

      {candidate && (
        <div className="mt-8 rounded-xl bg-slate-100 p-6 text-left">

          <h2 className="text-2xl font-bold mb-4">
            Candidate Analysis
          </h2>

          <p>
            <strong>Name:</strong> {candidate.candidate_name}
          </p>

          <p className="mt-3">
            <strong>Recommended Role:</strong>{" "}
            {candidate.recommended_role}
          </p>

          <div className="mt-4">
            <strong>Skills</strong>

            <ul className="list-disc ml-6">
              {candidate.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <strong>Education</strong>

            <ul className="list-disc ml-6">
              {candidate.education.map((edu) => (
                <li key={edu}>{edu}</li>
              ))}
            </ul>
          </div>

        </div>
      )}

    </div>
  );
}