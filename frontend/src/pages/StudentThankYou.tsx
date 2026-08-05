import { CheckCircle } from "lucide-react";

import StudentLayout from "../components/layouts/StudentLayout";
import Card from "../components/common/Card";

export default function StudentThankYou() {

  return (

    <StudentLayout>

      <div className="flex items-center justify-center px-4 py-8">

        <Card className="max-w-3xl w-full text-center bg-[#131118] border border-[#232129] shadow-[0_0_40px_rgba(147,205,12,0.08)] p-8 sm:p-10">

          <CheckCircle
            size={80}
            className="mx-auto text-[#93CD0C]"
          />

          <h1 className="mt-8 text-4xl font-bold text-white">
            Thank You!
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-8">

            Thank you for taking the time to participate in our AI Interview
            Coach experience.

          </p>

          <p className="mt-6 text-gray-400 leading-8">

            We hope your personalized feedback gives you valuable insights,
            builds your confidence, and helps you prepare for future
            interviews.

          </p>

          <p className="mt-6 text-gray-400 leading-8">

            Every interview is a learning opportunity, and every step you take
            brings you closer to the career you're working towards.

          </p>

          <div className="mt-10 rounded-2xl border border-[#93CD0C] bg-[#15121B] p-6">

            <p className="text-xl font-semibold text-[#93CD0C]">

              We wish you every success in your career journey.

            </p>

            <p className="mt-4 text-gray-300">

              Keep learning, stay curious, and believe in your abilities.
              Your next opportunity could be just around the corner.

            </p>

          </div>

          <p className="mt-10 text-sm text-gray-500">

            Safe travels, and thank you for visiting our demonstration.

          </p>

        </Card>

      </div>

    </StudentLayout>

  );

}