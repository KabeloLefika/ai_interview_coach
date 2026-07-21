//import { ReactNode } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        w-full
        rounded-2xl
        md:rounded-3xl
        bg-[#15121B]
        border
        border-[#232129]
        shadow-xl
        p-4
        sm:p-6
        md:p-8
        lg:p-10
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}