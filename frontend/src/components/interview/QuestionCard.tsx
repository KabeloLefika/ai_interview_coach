interface Props {
    question: string;
}

export default function QuestionCard({
    question,
}: Props) {

    return (

        <div className="rounded-2xl border border-[#93CD0C] bg-[31A181f] p-8">

            <p className="mb-3 text-sm font-semibold text-[#93CD0C]">
            🤖 AI Interviewer
            </p>

            <h2 className="text-2xl font-bold">

                {question}

            </h2>

        </div>

    );

}