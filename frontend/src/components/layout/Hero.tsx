export default function Hero() {
  return (
    <section
      className="
        mx-auto
        max-w-6xl

        px-6
        sm:px-8
        lg:px-10

        py-14
        sm:py-20
        lg:py-24

        text-center
      "
    >
      <h1
        className="
          mb-6

          text-4xl
          sm:text-5xl
          md:text-6xl
          lg:text-7xl

          font-bold
          leading-tight

          text-white
        "
      >
        Ace Your Next Interview
      </h1>

      <p
        className="
          mx-auto

          max-w-3xl

          text-base
          sm:text-lg
          md:text-xl

          leading-8

          text-gray-400
        "
      >
        Upload your resume and practice realistic AI interviews
        tailored specifically to your experience.
      </p>
    </section>
  );
}