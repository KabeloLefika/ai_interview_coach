import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Card from "../components/common/Card";
export default function DeclinedPage() {
 return (
<div className="min-h-screen bg-[#08070A] flex flex-col">
<Header />
<main className="flex-1 flex items-center justify-center px-6">
<Card className="max-w-3xl text-center">
<h1 className="text-4xl font-bold text-white">
           Thank You
</h1>
<p className="mt-6 text-gray-400 leading-7">
           We are unable to continue with the demonstration without your
           consent to process your CV. If you wish to participate,
           please restart the demo and accept the Privacy Notice and
           Disclaimer.
</p>
</Card>
</main>
<Footer />
</div>
 );
}