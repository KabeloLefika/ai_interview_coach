import { useNavigate } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Card from "../components/common/Card";
import Button from "../components/common/Button";


export default function DeclinedPage() {

  const navigate = useNavigate();

  return (

    <div className="min-h-screen bg-[#08070A] flex flex-col">

      <Header />

      <main className="flex-1 px-4 py-8 sm:px-6">

        <div className="mx-auto max-w-3xl">

          <Card className="bg-[#131118] border border-[#232129] shadow-[0_0_40px_rgba(147,205,12,0.08)] p-8 sm:p-10 text-center">

            <div className="text-6xl">
              🔒
            </div>

            <h1 className="mt-6 text-3xl sm:text-4xl font-bold text-white">
              Consent Required
            </h1>

            <p className="mt-6 text-sm sm:text-base leading-8 text-gray-300">

              We are unable to continue with the demonstration without
              your permission to process your CV.

            </p>

            <p className="mt-5 text-sm sm:text-base leading-8 text-gray-300">

              If you would like to participate,
              please restart the demonstration and
              accept the Privacy Notice and Consent Statement.

            </p>

            <div className="mt-10">

              <Button
                onClick={() => navigate("/")}
              >
                Return to Start
              </Button>

            </div>

          </Card>

        </div>

      </main>

      <Footer />

    </div>

  );
}