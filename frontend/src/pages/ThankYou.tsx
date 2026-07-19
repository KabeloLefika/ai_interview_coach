import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

import { useSession } from "../hooks/useSession";

export default function ThankYou() {

  const navigate = useNavigate();

  const { resetSession } = useSession();

  const finish = () => {

    resetSession();

    navigate("/");

  };

  return (

    <div className="min-h-screen bg-[#08070A] flex flex-col">

      <Header />

      <main className="flex-1 flex items-center justify-center px-6">

        <Card className="max-w-4xl w-full text-center">

          <CheckCircle
            size={100}
            className="mx-auto text-[#93CD0C]"
          />

          <h1 className="mt-8 text-5xl font-bold text-white">

            Thank You

          </h1>

          <p className="mt-6 text-xl text-gray-300">

            Thank you for participating in the

            <span className="text-[#93CD0C] font-semibold">

              {" "}AI Career Coach Demonstration

            </span>

          </p>

          <p className="mt-8 leading-8 text-gray-400">

            Your AI Career Coach session has been completed successfully.

            Thank you for taking part in our live demonstration.

            We hope the personalized interview feedback and career recommendations
            help you on your professional journey.

           </p>

          <div className="mt-12 rounded-2xl border border-[#232129] bg-[#15121B] p-8">

            <h2 className="text-2xl font-bold text-white">

              Powered by

            </h2>

            <p className="mt-3 text-[#93CD0C] text-3xl font-bold">

              Amazon Bedrock

            </p>

            <p className="mt-4 text-gray-400">

              Secure AI • Personalized Career Guidance • Deloitte Demo

            </p>

          </div>

          <div className="mt-12">

            <Button
              onClick={finish}
            >

              Finish

            </Button>

          </div>

        </Card>

      </main>

      <Footer />

    </div>

  );

}