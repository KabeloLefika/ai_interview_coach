import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import StudentLayout from "../components/layouts/StudentLayout";
import Card from "../components/common/Card";

export default function InterviewReady() {

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

                if (res.data.status === "completed") {

                    clearInterval(interval);

                    navigate("/student-thank-you");

                }

            } catch (error) {

                console.error(error);

            }

        }, 3000);

        return () => clearInterval(interval);

    }, [studentId, navigate]);

    return (

        <StudentLayout>

            <div className="flex items-center justify-center px-6 py-10">

                <Card className="max-w-3xl w-full text-center bg-[#131118] border border-[#232129] shadow-[0_0_40px_rgba(147,205,12,0.08)] p-10">

                    <h1 className="text-6xl font-bold text-[#93CD0C]">
                        🎉 It's Your Turn!
                    </h1>

                    <p className="mt-8 text-2xl text-white">
                        Please proceed to the interview station.
                    </p>

                    <p className="mt-6 text-gray-400 leading-8">
                        A Deloitte representative will begin your AI interview shortly.
                    </p>

                </Card>

            </div>

        </StudentLayout>

    );

}