import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Interview from "./pages/Interview";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/interview"
          element={<Interview />}
        />

      </Routes>

    </BrowserRouter>
  );
}