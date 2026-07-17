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
       rounded-2xl
       bg-[#93CD0C]
       py-4
       font-semibold
       text-black
       transition-all
       duration-300
       hover:scale-[1.02]
       hover:bg-[#A6E312]
       disabled:bg-gray-700
       disabled:text-gray-400
       /
     `}
>
     {children}
</button>
 );
}