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
      border
      border-[#93CD0C]
      bg-[#93CD0C]/20
      px-3
      py-1
      text-xs
      sm:text-sm
      text-white
      "
    >
      {children}
    </span>
  );
}