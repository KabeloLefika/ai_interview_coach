import { LoaderCircle } from "lucide-react";

interface Props {
  text?: string;
}

export default function LoadingSpinner({
  text = "Loading...",
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-10">

      <LoaderCircle
        size={48}
        className="animate-spin text-[#93CD0C]"
      />

      <p className="mt-5 text-gray-300">
        {text}
      </p>

    </div>
  );
}