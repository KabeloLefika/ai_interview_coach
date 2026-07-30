import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import Card from "../common/Card";

import { useSession } from "../../hooks/useSession";

export default function InterviewStation() {

    const navigate = useNavigate();

    const {
        setCandidate,
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

                // Store the analyzed candidate
                setCandidate(response.data.candidate);

                clearInterval(interval);

                navigate("/candidate-dashboard");

            } catch (error) {

                console.error(error);

            }

        }, 3000);

        return () => clearInterval(interval);

    }, [loading, navigate, setCandidate]);

    return (

        <Card className="max-w-3xl mx-auto text-center">

            <h1 className="text-5xl font-bold text-white">
                {loading ? "Analyzing Resume..." : "Waiting for Next Candidate"}
            </h1>

            <p className="mt-6 text-gray-400">
                {loading
                    ? "Please wait while we prepare the interview."
                    : "The interview will start automatically when a student is called."}
            </p>

        </Card>

    );

}