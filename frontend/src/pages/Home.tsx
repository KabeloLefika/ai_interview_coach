import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import Features from "../components/layout/Features";
import Footer from "../components/layout/Footer";

import UploadCard from "../components/upload/UploadCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Header />

      <Hero />

      <div className="mx-auto flex max-w-7xl justify-center px-6">

        <UploadCard />

      </div>

      <Features />

      <Footer />

    </div>
  );
}