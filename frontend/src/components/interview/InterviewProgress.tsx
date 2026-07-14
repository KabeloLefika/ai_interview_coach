interface Props {
  current: number;
  total: number;
}

export default function InterviewProgress({
  current,
  total,
}: Props) {
  const progress = Math.round((current / total) * 100);

  return (
    <div className="mt-8 mb-8">
      <div className="mb-3 flex justify-between text-white">
        <span className="font-medium">
          Question {current} of {total}
        </span>

        <span className="font-semibold text-[#93CD0C]">
          {progress}% Complete
        </span>
      </div>

      <div className="h-3 w-full rounded-full bg-[#232129]">
        <div
          className="h-3 rounded-full bg-[#93CD0C] transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}