interface Props {
    value: string;
    onChange: (text: string) => void;
}

export default function AnswerBox({
    value,
    onChange,
}: Props) {

    return (

        <textarea
            rows={8}
            value={value}
            onChange={(e) =>
                onChange(e.target.value)
            }
            className="
                mt-6
                w-full
                rounded-xl
                border
                border-slate-300
                p-4
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
            "
            placeholder="Type your answer here..."
        />

    );

}