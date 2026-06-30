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
        className="animate-spin text-blue-600"
      />

      <p className="mt-5 text-slate-600">
        {text}
      </p>

    </div>
  );
}