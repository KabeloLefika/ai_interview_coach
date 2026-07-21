const features = [
  "📄 Resume Analysis",
  "🤖 AI Interview",
  "📊 Instant Feedback",
  "🎯 Career Recommendations",
];

export default function Features() {
  return (
    <section
      className="
        mx-auto
        max-w-7xl

        px-6
        sm:px-8

        py-12
      "
    >
      <div
        className="
          grid

          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4

          gap-6
        "
      >
        {features.map((feature) => (
          <div
            key={feature}
            className="
              rounded-2xl

              border
              border-[#93CD0C]

              bg-[#131118]

              p-6
              sm:p-8

              shadow-md

              transition-all
              duration-300

              hover:border-white
              hover:-translate-y-1
            "
          >
            <h3
              className="
                text-center

                text-lg
                sm:text-xl

                font-semibold

                text-white
              "
            >
            {feature}
          </h3>
        </div>
      ))}
      </div>
    </section>
  );
}