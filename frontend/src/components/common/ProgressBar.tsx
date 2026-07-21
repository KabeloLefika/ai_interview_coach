interface Props {
  progress: number;
}

export default function ProgressBar({
  progress,
}: Props) {
  return (
    <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-[#232129]">

      <div
        className="h-full rounded-full bg-[#93CD0C] transition-all duration-700"
        style={{
          width: `${progress}%`,
        }}
      />

    </div>
  );
}