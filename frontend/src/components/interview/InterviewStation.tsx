import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import Card from "../common/Card";

import { useSession } from "../../hooks/useSession";

export default function InterviewStation() {

    const navigate = useNavigate();

    const {
        setCandidate,
        setQuestions,
    } = useSession();

    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const interval = setInterval(async () => {

            if (loading) return;

            try {

                const response = await api.get(
                    "/analyze-active-student"
                );

                if (!response.data.candidate) {
                    return;
                }

                setLoading(true);

                setCandidate(response.data.candidate);

                const interview = await api.post(
                    "/generate-interview",
                    response.data.candidate
                );

                setQuestions(interview.data.questions);

                clearInterval(interval);

                navigate("/interview");

            } catch (error) {

                console.error(error);

            }

        }, 3000);

        return () => clearInterval(interval);

    }, [loading, navigate, setCandidate, setQuestions]);

    return (

        <Card className="max-w-3xl mx-auto text-center">

            <h1 className="text-5xl font-bold text-white">
                Waiting for Next Candidate
            </h1>

            <p className="mt-6 text-gray-400">
                The interview will start automatically when a student is called.
            </p>

        </Card>

    );

}