import Card from "../common/Card";
import Button from "../common/Button";
import { useSession } from "../../hooks/useSession";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function ResultCard() {
  const navigate = useNavigate();

  const {
    candidate,
    report,
  } = useSession();

  if (!candidate || !report) {
    return null;
  }

  const downloadReport = async () => {
  try {

    const response = await api.post(
      "/download-report",
      {
        candidate,
        report,
      },
      {
        responseType: "blob",
      }
    );

    const url = window.URL.createObjectURL(
      new Blob(
        [response.data],
        {
          type: "application/pdf",
        }
      )
    );

    const link = document.createElement("a");

    link.href = url;

    link.download =
      `${candidate.candidate_name.replace(/\s+/g, "_")}_AI_Report.pdf`;

    document.body.appendChild(link);

    link.click();

    link.remove();

    window.URL.revokeObjectURL(url);

    // Give the browser a moment to start the download
    setTimeout(() => {

      navigate("/thank-you");

    }, 700);

  }

  catch (error) {

    console.error(error);

    alert("Unable to download report.");

  }
};

  return (
    <Card className="w-full max-w-6xl bg-[#131118] border border-[#232129] shadow-[0_0_40px_rgba(147,205,12,0.08)] p-5 sm:p-8 md:p-10">

      {/* Header */}

      <div className="text-center">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          AI Interview Coaching Report
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-sm sm:text-base text-gray-400">
          Personalized feedback generated from your interview.
        </p>

      </div>

      {/* Candidate Information */}

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">

        <div className="rounded-2xl border border-[#232129] bg-[#1A181F] p-5 sm:p-6">

          <p className="text-sm text-gray-400">
            Candidate
          </p>

          <h2 className="mt-2 break-words text-xl sm:text-2xl font-bold text-white">
            {candidate.candidate_name}
          </h2>

        </div>

        <div className="rounded-2xl border border-[#232129] bg-[#1A181F] p-5 sm:p-6">

          <p className="text-sm text-gray-400">
            Recommended Role
          </p>

          <h2 className="mt-2 break-words text-xl sm:text-2xl font-bold text-[#93CD0C]">
            {candidate.recommended_role}
          </h2>

        </div>

      </div>

      {/* Summary */}

      <section className="mt-10">

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Interview Summary
        </h2>

        <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-gray-300">
          {report.summary}
        </p>

      </section>


      {/* Strengths */}

      <section className="mt-10">

        <h2 className="text-2xl sm:text-3xl font-bold text-[#93CD0C]">
          Your Strengths
        </h2>

        <div className="mt-5 space-y-3">

          {report.strengths.map((item) => (

            <div
              key={item}
              className="rounded-xl border border-[#232129] bg-[#1A181F] p-4 text-white"
            >
              ✅ {item}
            </div>

          ))}

        </div>

      </section>

      {/* Improvements */}

      <section className="mt-10">

        <h2 className="text-2xl sm:text-3xl font-bold text-orange-400">
          Areas for Improvement
        </h2>

        <div className="mt-5 space-y-3">

          {report.improvements.map((item) => (

            <div
              key={item}
              className="rounded-xl border border-[#232129] bg-[#1A181F] p-4 text-white"
            >
              • {item}
            </div>

          ))}

        </div>

      </section>

      {/* Recommended Role */}

      <section className="mt-10">

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          About This Role
        </h2>

        <p className="mt-4 text-sm sm:text-base leading-7 sm:leading-8 text-gray-300">
          {report.role_overview}
        </p>

      </section>

      {/* Learning Path */}

      <section className="mt-10">

        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Suggested Learning Path
        </h2>

        <div className="mt-5 space-y-3">

          {report.learning_path.map((item) => (

            <div
              key={item}
              className="rounded-xl border border-[#232129] bg-[#1A181F] p-4 text-white"
            >
              📚 {item}
            </div>

          ))}

        </div>

      </section>

      {/* Final Feedback */}

      <section className="mt-10 rounded-2xl border border-[#93CD0C] bg-[#1A181F] p-5 sm:p-8">

        <h2 className="text-2xl sm:text-3xl font-bold text-[#93CD0C]">
          Final Feedback
        </h2>

        <p className="mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-gray-300">
          {report.final_feedback}
        </p>

        <p className="mt-8 text-center text-sm sm:text-base text-gray-400">
          Your personalized coaching report can be downloaded as a PDF.
          Once downloaded, you will be taken to the closing screen.
        </p>

      </section>

      {/* Download Button */}

      <div className="mt-12 flex justify-center">
        <div className="w-full sm:w-auto sm:min-w-[320px]">

        <Button
          onClick={downloadReport}
        >
          📄 Download Personalized Report
        </Button>
        </div>

      </div>

    </Card>
  );
}