import { Routes, Route } from "react-router-dom";
import AdminQueue from "../pages/AdminQueue";
import InterviewStationPage from "../pages/InterviewStation";
import CandidateDashboardPage from "../pages/CandidateDashboardPage";
import Interview from "../pages/Interview";
import Results from "../pages/Results";
import ThankYou from "../pages/ThankYou";

export default function AdminRoutes() {
   return (
        <Routes>
        <Route
        path="/admin"
        element={<AdminQueue />}
        />

        <Route
        path="/station"
        element={<InterviewStationPage />}
        />

        <Route
        path="/candidate-dashboard"
        element={<CandidateDashboardPage />}
        />

        <Route
        path="/interview"
        element={<Interview />}
        />

        <Route
        path="/results"
        element={<Results />}
        />

        <Route
        path="/thank-you"
        element={<ThankYou />}
        />

        </Routes>
   );
}