import ResultCard from "../components/results/ResultCard";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Results() {
  return (
    <div className="min-h-screen bg-[#08070A]">
          <Header />
          
    <main className="min-h-screen bg-[#08070A] flex items-center justify-center px-6 py-10">
      <ResultCard />
    </main>
     <Footer />
    </div>
  );
}