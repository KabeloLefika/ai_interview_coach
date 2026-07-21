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
    <div className="my-6 sm:my-8">
      <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-sm sm:text-base font-medium text-white">
          Question {current} of {total}
        </span>

        <span className="text-sm sm:text-base font-semibold text-[#93CD0C]">
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