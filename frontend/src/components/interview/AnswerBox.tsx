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
                w-full
                rounded-2xl
                border
                border-[#232129]
                bg-[#1A181F]
                p-4
                sm:p-5
                md:p-6
                text-sm
                sm:text-base
                text-white
                placeholder:text-gray-500
                focus:border-[#93CD0C]
                focus:ring-2
                focus:ring-[#93CD0C]
                outline-none
                resize-none
            "
            placeholder="Type your answer here..."
        />

    );

}