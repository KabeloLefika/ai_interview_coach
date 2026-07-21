import React from "react";
interface ButtonProps {
 children: React.ReactNode;
 onClick?: () => void;
 disabled?: boolean;
 type?: "button" | "submit";
 //className?: string;
}
export default function Button({
 children,
 onClick,
 disabled = false,
 type = "button",
 //className = "",
}: ButtonProps) {
 return (
<button
     type={type}
     onClick={onClick}
     disabled={disabled}
     className={`
        w-full
        sm:w-auto
        min-w-[180px]

        rounded-xl
        md:rounded-2xl

        bg-[#93CD0C]

        px-6
        py-3
        sm:px-8
        sm:py-4

        text-sm
        sm:text-base
        font-semibold

        text-black

        transition-all
        duration-300

        hover:bg-[#A6E312]
        hover:scale-[1.02]

        active:scale-95

        disabled:bg-gray-700
        disabled:text-gray-400
        disabled:cursor-not-allowed
     `}
>
     {children}
</button>
 );
}