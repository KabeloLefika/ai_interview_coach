import { useState } from "react";
import Card from "../components/common/Card";
import Button from "../components/common/Button";
import Checkbox from "../components/common/Checkbox";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

interface Props {
 onContinue: () => void;
 onDecline: () => void;
}
export default function ConsentPage({
 onContinue,
 onDecline,
}: Props) {
 const [accepted, setAccepted] = useState(false);
 return (
<div className="min-h-screen bg-[#08070A] flex flex-col">
<Header />
<main className="flex-1 flex items-center justify-center px-6">
<Card className="max-w-4xl w-full">
<h1 className="text-4xl font-bold text-white mb-2">
         Welcome
</h1>
<h2 className="text-[#93CD0C] mb-8">
         AI Interview Coach Demo
</h2>
<div className="space-y-5 text-gray-300 leading-7">
<p>
           Thank you for participating in this Deloitte AI Interview Coach
           demonstration.
</p>
<p>
           During this demo you will upload your CV so our AI can analyse
           your experience, recommend career paths and generate interview
           questions.
</p>
<p>
           Your personal information will only be used for this live demo.
           Your data will not be used to train any Large Language Model
           (LLM) or any AI model.
</p>
<p>
           All information is processed in accordance with the Protection
           of Personal Information Act (POPIA).
</p>
<p>
           This demonstration is intended solely for educational and career
           guidance purposes. It does not constitute an employment offer,
           guarantee of employment or professional recruitment decision.
</p>
<p>
           Deloitte and its partners accept no liability for decisions made
           based on the recommendations produced by this demonstration.
</p>
</div>
<div className="mt-8">
<Checkbox
           checked={accepted}
           onChange={setAccepted}
           label="I have read and agree to the Privacy Notice and Consent Statement."
         />
</div>
<div className="mt-10 flex gap-4">
<Button
           onClick={onContinue}
           disabled={!accepted}
>
           I Agree
</Button>
<Button
           onClick={onDecline}
>
           I Do Not Agree
</Button>
</div>
</Card>
</main>
<Footer />
</div>
 );
}