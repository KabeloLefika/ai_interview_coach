const features = [
  "📄 Resume Analysis",
  "🤖 AI Interview",
  "📊 Instant Feedback",
  "🎯 Career Recommendations",
];

export default function Features() {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12">

      {features.map((feature) => (
        <div
          key={feature}
          className="rounded-2xl bg-[#131118] border border-[#93CD0C] p-8 shadow-sm"
        >
          <h3 className="text-xl font-semibold">
            {feature}
          </h3>
        </div>
      ))}

    </section>
  );
}