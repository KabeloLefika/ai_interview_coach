interface Props {
  progress: number;
}

export default function ProgressBar({
  progress,
}: Props) {
  return (
    <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-slate-200">

      <div
        className="h-full rounded-full bg-blue-600 transition-all duration-700"
        style={{
          width: `${progress}%`,
        }}
      />

    </div>
  );
}