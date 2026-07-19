import { Routes, Route } from "react-router-dom";

import ConsentPage from "./pages/ConsentPage";
import DeclinedPage from "./pages/DeclinedPage";
import Home from "./pages/Home";
import Interview from "./pages/Interview";
import Results from "./pages/Results";
import ThankYou from "./pages/ThankYou";

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

    </Routes>
  );
}