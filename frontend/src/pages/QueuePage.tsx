import { useLocation,useNavigate } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Card from "../components/common/Card";

import { useEffect,useState } from "react";
import axios from "axios";

export default function QueuePage() {

const location = useLocation();
const navigate = useNavigate();

const [queuePosition, setQueuePosition] = useState(
    location.state?.queuePosition ?? 1
);
const studentId = location.state?.studentId;

useEffect(() => {

    if (!studentId) return;

    const interval = setInterval(async () => {

        try {

            const res = await axios.get(
                `http://localhost:8000/student-status/${studentId}`
            );

            setQueuePosition(res.data.queue_position);

            if (res.data.status === "called") {
                clearInterval(interval);
                navigate("/interview-ready", {
                    state: {
                        studentId,
                    },
                });
            }

            if (res.data.status === "completed") {
                clearInterval(interval);
                navigate("/student-thank-you");
                return;
            }

        } catch (err) {
            console.error(err);
        }

    }, 3000);

    return () => clearInterval(interval);

}, [studentId, navigate]);

  return (
    <div className="min-h-screen bg-[#08070A] flex flex-col">

      <Header />

      <main className="flex-1 flex items-center justify-center px-6">

        <Card className="max-w-3xl w-full text-center">

          <h1 className="text-5xl font-bold text-white">
            You're in the Queue!
          </h1>

          <p className="mt-8 text-xl text-gray-300">
            Your CV has been uploaded successfully.
          </p>

          <div className="mt-10 rounded-2xl border border-[#93CD0C] bg-[#15121B] p-8">

            <p className="text-gray-400">
              Queue Number
            </p>

            <h2 className="mt-4 text-7xl font-bold text-[#93CD0C]">
              #{queuePosition}
            </h2>

          </div>

        </Card>

      </main>

      <Footer />

    </div>
  );
}