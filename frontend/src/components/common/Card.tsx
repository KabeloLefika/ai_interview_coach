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
        bg-white
        p-8
        shadow-xl
        border
        border-slate-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}