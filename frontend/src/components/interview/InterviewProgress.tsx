interface Props {
    current: number;
    total: number;
}

export default function InterviewProgress({
    current,
    total,
}: Props) {

    const percentage =
        (current / total) * 100;

    return (

        <div className="mb-8">

            <div className="flex justify-between">

                <span>

                    Question {current}

                </span>

                <span>

                    {total} Questions

                </span>

            </div>

            <div className="mt-2 h-3 rounded-full bg-slate-200">

                <div
                    className="h-full rounded-full bg-blue-600 transition-all"
                    style={{
                        width: `${percentage}%`,
                    }}
                />

            </div>

        </div>

    );

}