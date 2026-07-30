import { Routes, Route } from "react-router-dom";

import ConsentPage from "./pages/ConsentPage";
import DeclinedPage from "./pages/DeclinedPage";
import Home from "./pages/Home";
import Interview from "./pages/Interview";
import Results from "./pages/Results";
import ThankYou from "./pages/ThankYou";
import StudentUpload from "./pages/StudentUpload";
import QueuePage from "./pages/QueuePage";
import AdminQueue from "./pages/AdminQueue";
import InterviewReady from "./pages/InterviewReady";
import InterviewStationPage from "./pages/InterviewStation";
import CandidateDashboardPage from "./pages/CandidateDashboardPage";

export default function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<ConsentPage />}
      />

      <Route
        path="/home"
        element={<Home />}
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
        path="/declined"
        element={<DeclinedPage />}
      />

      <Route
        path="/thank-you"
        element={<ThankYou />}
      />

      <Route
        path="/student-upload"
        element={<StudentUpload />}
      />

      <Route
        path="/queue"
        element={<QueuePage />}
      />

      <Route
        path="/admin-queue"
        element={<AdminQueue />}
      />

      <Route
        path="/admin"
        element={<AdminQueue />}
      />

      <Route
        path="/interview-ready"
        element={<InterviewReady />}
      />

      <Route
        path="/station"
        element={<InterviewStationPage />}
      />

      <Route
      path="/candidate-dashboard"
      element={<CandidateDashboardPage />}
      />

    </Routes>
  );
}