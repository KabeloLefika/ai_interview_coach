import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import InterviewStation from "../components/interview/InterviewStation";

export default function InterviewStationPage() {

    return (

        <div className="min-h-screen bg-[#08070A] flex flex-col">

            <Header />

            <main className="flex-1 flex items-center justify-center px-6">

                <InterviewStation />

            </main>

            <Footer />

        </div>

    );

}