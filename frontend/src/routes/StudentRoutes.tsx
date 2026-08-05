import { Routes, Route } from "react-router-dom";
import ConsentPage from "../pages/ConsentPage";
import DeclinedPage from "../pages/DeclinedPage";
import Home from "../pages/Home";
import StudentUpload from "../pages/StudentUpload";
import QueuePage from "../pages/QueuePage";
import InterviewReady from "../pages/InterviewReady";
import StudentThankYou from "../pages/StudentThankYou";

export default function StudentRoutes() {
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
        path="/declined"
        element={<DeclinedPage />}
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
        path="/interview-ready"
        element={<InterviewReady />}
        />

        <Route
        path="/student-thank-you"
        element={<StudentThankYou />}
        />

        </Routes>
   );
}