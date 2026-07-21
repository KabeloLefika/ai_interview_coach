interface Props {
    question: string;
}

export default function QuestionCard({
    question,
}: Props) {

    return (

        <div className="rounded-2xl border border-[#93CD0C] bg-[#1A181F] p-5 sm:p-6 md:p-8">

           <p className="mb-3 text-sm font-semibold text-[#93CD0C]">
            🤖 AI Interviewer
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed">

                {question}

            </h2>

        </div>

    );

}