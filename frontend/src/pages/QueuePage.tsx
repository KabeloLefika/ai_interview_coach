import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Card from "../components/common/Card";

export default function QueuePage() {
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
              #1
            </h2>

          </div>

        </Card>

      </main>

      <Footer />

    </div>
  );
}