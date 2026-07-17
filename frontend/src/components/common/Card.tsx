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
        rounded-3xl
        bg-[#15121B]
        border
        border-[#232129]
        shadow-2xl
        p-8
        shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}