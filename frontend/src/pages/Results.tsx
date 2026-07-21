import ResultCard from "../components/results/ResultCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Results() {
  return (
    <div className="min-h-screen bg-[#08070A] flex flex-col">
      <Header />
          
    <main className="flex-1 px-4 py-6 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
      <ResultCard />
      </div>
    </main>
     <Footer />
    </div>
  );
}