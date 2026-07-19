import { createContext, useState } from "react";
import type { ReactNode } from "react";
//import type { InterviewResult } from "../types/result";

export interface Education {
  degree: string;
  institution: string;
  graduation_year: number;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string;
}

export interface Project {
  title: string;
  link: string;
}

export interface Candidate {
  candidate_name: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
  projects: Project[];
  recommended_role: string;
}

export interface InterviewReport {
  summary: string;
  strengths: string[];
  improvements: string[];
  role_overview: string;
  learning_path: string[];
  final_feedback: string;
}

interface SessionContextType {
  candidate: Candidate | null;
  setCandidate: (candidate: Candidate | null) => void;

  //result: InterviewResult | null;
  //setResult: (result: InterviewResult | null) => void;

  report: InterviewReport | null;
  setReport: (report: InterviewReport | null) => void;

  questions: string[];
  setQuestions: (questions: string[]) => void;

  interviewCompleted: boolean;
  setInterviewCompleted: (value: boolean) => void;

  resetSession: () => void;
}

export const SessionContext =
  createContext({} as SessionContextType);

interface Props {
  children: ReactNode;
}

export function SessionProvider({ children }: Props) {

  const [candidate, setCandidate] =
    useState<Candidate | null>(null);

  //const [result, setResult] =
    //useState<InterviewResult | null>(null);

  const [report, setReport] =
    useState<InterviewReport | null>(null);

  const [questions, setQuestions] =
    useState<string[]>([]);

  const [interviewCompleted, setInterviewCompleted] =
    useState(false);

  function resetSession() {
    setCandidate(null);
    //setResult(null);
    setReport(null);
    setQuestions([]);
    setInterviewCompleted(false);
  }

  return (
    <SessionContext.Provider
      value={{
        candidate,
        setCandidate,

        //result,
        //setResult,

        report,
        setReport,

        questions,
        setQuestions,

        interviewCompleted,
        setInterviewCompleted,

        resetSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}