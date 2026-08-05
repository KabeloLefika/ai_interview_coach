import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { SessionProvider } from "./context/SessionContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/ai_interview_coach">
      <SessionProvider>
        <App />
      </SessionProvider>
    </BrowserRouter>
  </StrictMode>
);