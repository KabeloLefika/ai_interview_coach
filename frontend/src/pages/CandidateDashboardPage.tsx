import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CandidateDashboard from "../components/analysis/CandidateDashboard";

export default function CandidateDashboardPage() {
  return (
    <div className="min-h-screen bg-[#08070A] flex flex-col">

      <Header />

      <main className="flex-1 px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <CandidateDashboard />
        </div>
      </main>

      <Footer />

    </div>
  );
}