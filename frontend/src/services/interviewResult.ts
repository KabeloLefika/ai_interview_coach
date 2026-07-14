import type{ InterviewResult } from "../types/result";

export function generateInterviewResult(
    candidateName: string,
    recommendedRole: string
): InterviewResult {

    return {

        candidateName,

        recommendedRole,

        score: 88,

        communication: 90,

        technical: 84,

        confidence: 92,

        problemSolving: 87,

        strengths: [

            "Excellent communication",

            "Strong cloud knowledge",

            "Confident presentation",

        ],

        improvements: [

            "Use more measurable achievements",

            "Expand project explanations",

        ],

    };

}