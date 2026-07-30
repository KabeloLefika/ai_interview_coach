import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import StudentUploadCard from "../components/students/StudentUploadCard";

export default function StudentUpload() {
  return (
    <div className="min-h-screen bg-[#08070A] flex flex-col">

      <Header />

      <main className="flex-1 flex items-center justify-center px-6 py-10">

        <StudentUploadCard />

      </main>

      <Footer />

    </div>
  );
}