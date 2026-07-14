import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { InterviewResult } from "../types/result";

export interface Candidate {
  candidate_name: string;
  skills: string[];
  education: string[];
  experience: string[];
  projects: string[];
  recommended_role: string;
}

interface SessionContextType {
  candidate: Candidate | null;
  setCandidate: (candidate: Candidate | null) => void;

  result: InterviewResult | null;
  setResult: (result: InterviewResult | null) => void;

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

  const [result, setResult] =
    useState<InterviewResult | null>(null);

  const [interviewCompleted, setInterviewCompleted] =
    useState(false);

  function resetSession() {
    setCandidate(null);
    setResult(null);
    setInterviewCompleted(false);
  }

  return (
    <SessionContext.Provider
      value={{
        candidate,
        setCandidate,

        result,
        setResult,

        interviewCompleted,
        setInterviewCompleted,

        resetSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}