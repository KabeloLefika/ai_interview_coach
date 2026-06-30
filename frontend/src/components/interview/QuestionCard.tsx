interface Props {
    question: string;
}

export default function QuestionCard({
    question,
}: Props) {

    return (

        <div className="rounded-2xl bg-blue-50 p-6">

            <h2 className="text-2xl font-bold">

                {question}

            </h2>

        </div>

    );

}