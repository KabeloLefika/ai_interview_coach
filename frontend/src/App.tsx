import { useState } from "react";
import ConsentPage from "./pages/ConsentPage";
import DeclinedPage from "./pages/DeclinedPage";
import Home from "./pages/Home";
export default function App() {
 const [page, setPage] = useState<"consent" | "home" | "declined">("consent");
 return (
<>
     {page === "consent" && (
<ConsentPage
         onContinue={() => setPage("home")}
         onDecline={() => setPage("declined")}
       />
     )}
     {page === "home" && <Home />}
     {page === "declined" && <DeclinedPage />}
</>
 );
}