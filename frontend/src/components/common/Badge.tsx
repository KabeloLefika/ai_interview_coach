//import { ReactNode } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Badge({ children }: Props) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-blue-100
        px-4
        py-2
        text-sm
        font-medium
        text-blue-700
      "
    >
      {children}
    </span>
  );
}