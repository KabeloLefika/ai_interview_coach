import { Brain } from "lucide-react";

import Card from "../common/Card";

import LoadingSpinner from "../common/LoadingSpinner";

export default function AnalysisLoader() {
  return (
    <Card className="mx-auto max-w-2xl">

      <div className="text-center">

        <Brain
          size={80}
          className="mx-auto mb-6 text-blue-600"
        />

        <h2 className="text-3xl font-bold">
          AI is Analyzing Your Resume
        </h2>

        <p className="mt-4 text-slate-500">
          Please wait while we extract your
          skills, education and experience.
        </p>

        <LoadingSpinner text="Analyzing..." />

      </div>

    </Card>
  );
}