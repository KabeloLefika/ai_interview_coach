import type { ReactNode } from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface Props {
    children: ReactNode;
}

export default function StudentLayout({ children }: Props) {

    return (

        <div className="min-h-screen bg-[#08070A] flex flex-col">

            <Header />

            <main className="flex-1">

                {children}

            </main>

            <Footer />

        </div>

    );

}