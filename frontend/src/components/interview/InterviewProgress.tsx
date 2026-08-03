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

    <div className="my-8">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-gray-400 text-sm">
            Interview Progress
          </p>

          <h2 className="text-white font-semibold text-lg">
            Question {current} of {total}
          </h2>

        </div>

        <div className="text-right">

          <p className="text-3xl font-bold text-[#93CD0C]">
            {progress}%
          </p>

          <p className="text-xs text-gray-400">
            Complete
          </p>

        </div>

      </div>

      <div className="mt-5 h-4 rounded-full bg-[#232129] overflow-hidden">

        <div
          className="h-full rounded-full bg-[#93CD0C] transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <div className="mt-3 flex justify-between text-xs text-gray-500">

        {Array.from({ length: total }).map((_, index) => (

          <div
            key={index}
            className={`w-4 h-4 rounded-full ${
              index < current
                ? "bg-[#93CD0C]"
                : "bg-[#232129]"
            }`}
          />

        ))}

      </div>

    </div>

  );

}