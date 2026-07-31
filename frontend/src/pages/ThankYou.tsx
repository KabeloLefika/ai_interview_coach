import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import api from "../services/api";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

import { useSession } from "../hooks/useSession";

export default function ThankYou() {

  const navigate = useNavigate();

  const { resetSession,activeStudentId, } = useSession();

  const finish = async () => {

    try {

        if (activeStudentId) {

            await api.post(
                `/complete-interview/${activeStudentId}`
            );

        }

    } catch (error) {

        console.error(error);

    }

    resetSession();

    navigate("/station");

};

  return (

    <div className="min-h-screen bg-[#08070A] flex flex-col">

      <Header />

      <main className="flex-1 px-4 py-8 sm:px-6 md:px-8 lg:px-10">

        <div className="mx-auto max-w-5xl">

          <Card className="bg-[#131118] border border-[#232129] shadow-[0_0_40px_rgba(147,205,12,0.08)] p-6 sm:p-8 md:p-12 text-center">

            <CheckCircle
              size={80}
              className="mx-auto text-[#93CD0C] sm:w-24 sm:h-24 md:w-28 md:h-28"
            />

            <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Thank You
            </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300">

              Thank you for participating in the

              <span className="font-semibold text-[#93CD0C]">
                {" "}AI Career Coach Demonstration

            </span>

          </p>

          <p className="mx-auto mt-8 max-w-3xl text-sm sm:text-base leading-7 sm:leading-8 text-gray-400">

            Your AI Career Coach session has been completed successfully.

            Thank you for taking part in our live demonstration.

            We hope the personalized interview feedback and career recommendations
            help you on your professional journey.

           </p>

          <div className="mt-12 rounded-2xl border border-[#232129] bg-[#15121B] p-6 sm:p-8">

            <h2 className="text-xl sm:text-2xl font-bold text-white">

              Powered by

            </h2>

            <p className="mt-4 text-2xl sm:text-3xl font-bold text-[#93CD0C]">

              Amazon Bedrock

            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-400">

              Secure AI • Personalized Career Guidance • Deloitte Demo

            </p>

          </div>

           <div className="mt-12 mx-auto w-full sm:w-auto sm:min-w-[300px]">

            <Button
              onClick={finish}
            >

              Finish

            </Button>

          </div>

        </Card>

        </div>

      </main>

      <Footer />

    </div>

  );

}