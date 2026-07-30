import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Card from "../components/common/Card";

export default function InterviewReady() {

    return (

        <div className="min-h-screen bg-[#08070A] flex flex-col">

            <Header />

            <main className="flex-1 flex items-center justify-center px-6">

                <Card className="max-w-3xl w-full text-center">

                    <h1 className="text-6xl font-bold text-[#93CD0C]">
                        🎉 It's Your Turn!
                    </h1>

                    <p className="mt-8 text-2xl text-white">
                        Please proceed to the interview station.
                    </p>

                    <p className="mt-6 text-gray-400">
                        A Deloitte representative will begin your AI interview shortly.
                    </p>

                </Card>

            </main>

            <Footer />

        </div>

    );

}