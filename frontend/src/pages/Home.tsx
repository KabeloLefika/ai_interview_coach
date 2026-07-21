import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import Features from "../components/layout/Features";
import Footer from "../components/layout/Footer";

import UploadCard from "../components/upload/UploadCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08070A] flex flex-col">

      <Header />

      <main className="flex-1">

        <Hero />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <UploadCard />

        </div>

        <Features />

      </main>

      <Footer />

    </div>
  );
}