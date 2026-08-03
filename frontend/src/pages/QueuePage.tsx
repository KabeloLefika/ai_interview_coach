import { useLocation, useNavigate } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Card from "../components/common/Card";

import { useEffect } from "react";
import axios from "axios";

export default function QueuePage() {

    const location = useLocation();
    const navigate = useNavigate();

    const studentId = location.state?.studentId;

    useEffect(() => {

        if (!studentId) return;

        const interval = setInterval(async () => {

            try {

                const res = await axios.get(
                    `http://localhost:8000/student-status/${studentId}`
                );

                if (res.data.status === "called") {

                    clearInterval(interval);

                    navigate("/interview-ready", {
                        state: {
                            studentId,
                        },
                    });

                    return;
                }

                if (res.data.status === "completed") {

                    clearInterval(interval);

                    navigate("/student-thank-you");

                    return;
                }

            } catch (err) {

                console.error(err);

            }

        }, 3000);

        return () => clearInterval(interval);

    }, [studentId, navigate]);

    return (

        <div className="min-h-screen bg-[#08070A] flex flex-col">

            <Header />

            <main className="flex-1 flex items-center justify-center px-6">

                <Card className="max-w-3xl w-full text-center bg-[#131118] border border-[#232129] shadow-[0_0_40px_rgba(147,205,12,0.08)] p-10">

                    <div className="text-7xl">
                        ✅
                    </div>

                    <h1 className="mt-8 text-5xl font-bold text-white">
                        Registration Successful
                    </h1>

                    <p className="mt-6 text-xl text-gray-300 leading-8">
                        Thank you for registering for the
                        <span className="text-[#93CD0C] font-semibold">
                            {" "}AI Career Coach Experience
                        </span>.
                    </p>

                    <div className="mt-10 rounded-2xl border border-[#93CD0C] bg-[#15121B] p-8">

                        <h2 className="text-3xl font-bold text-[#93CD0C]">
                            Your CV Has Been Submitted
                        </h2>

                        <p className="mt-6 text-gray-300 leading-8">

                            Please remain nearby and keep this page open.

                            <br /><br />

                            A Deloitte representative will notify you on this device when you have been selected for your AI interview.

                        </p>

                    </div>

                    <p className="mt-8 text-gray-500">

                        Thank you for your patience and enjoy the AWS Summit while you wait.

                    </p>

                </Card>

            </main>

            <Footer />

        </div>

    );

}