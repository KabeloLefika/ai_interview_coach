import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import Card from "../common/Card";
import { useSession } from "../../hooks/useSession";
export default function InterviewStation() {
   const navigate = useNavigate();
    const {
        setCandidate,
        setActiveStudentId,
    } = useSession();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
          const interval = setInterval(async () => {
            if (loading) return;
            try 
            {
              const response = await api.get(
                "/analyze-active-student"
              );
              if (!response.data.candidate) {
                return;
              }
              setLoading(true);
              setCandidate(response.data.candidate);
              setActiveStudentId(
                response.data.student.id
              );
              await api.post(
                `/start-interview/${response.data.student.id}`
              );
              clearInterval(interval);
              navigate("/candidate-dashboard");
            } 
            catch (error) 
            {
              console.error(error);
            }
        }, 3000);
          return () => clearInterval(interval);
      }, [loading, navigate, setCandidate, setActiveStudentId]);
   return (
      <Card className="max-w-4xl w-full bg-[#131118] border border-[#232129] shadow-[0_0_60px_rgba(147,205,12,0.12)] rounded-3xl p-14 text-center">
        <h1 className="mt-8 text-5xl font-bold text-white">
              AI Interview Station
        </h1>
        <div className="mt-10 flex justify-center">
        <div className="inline-flex items-center gap-3 rounded-full border border-[#93CD0C] bg-[#93CD0C]/10 px-8 py-4">
        <span className="h-4 w-4 rounded-full bg-[#93CD0C] animate-pulse"></span>
        <span className="text-lg font-bold tracking-widest text-[#93CD0C]">
              STATION READY
        </span>
        </div>
        </div>
        <p className="mt-10 text-2xl text-white">
              The interview station is ready for the next participant.
        </p>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-gray-400">
              Once a candidate is selected from the
        <span className="text-white font-semibold">
              {" "}Admin Dashboard{" "}
        </span>
              the interview will begin automatically.
        </p>
        <div className="mt-12 border-t border-[#232129] pt-8">
        <p className="text-xl font-semibold text-[#93CD0C]">
              Powered by Amazon Bedrock
        </p>
        </div>
      </Card>
    );
}