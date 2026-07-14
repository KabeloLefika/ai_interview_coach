//import { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-3xl
        bg-[#131118]
        border
        border-[#232129]
        shadow-2xl
        p-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}