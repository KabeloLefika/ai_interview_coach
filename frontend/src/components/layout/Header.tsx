import logo from "../../assets/DEL_SEC_RGB-large.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#232129] bg-[#08070A]/95 backdrop-blur">

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between

          px-4
          py-3

          sm:px-6

          lg:px-8
        "
      >

        {/* Logo */}

        <div className="flex items-center flex-shrink-0">

          <img
            src={logo}
            alt="Deloitte"
            className="
              h-8
              sm:h-10
              md:h-12
              w-auto
            "
          />

        </div>

        {/* Title */}

        <div className="flex-1 text-center px-4">

          <h1
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              lg:text-3xl

              font-bold
              tracking-wide
              text-white
            "
          >
            AI Interview Coach
          </h1>

        </div>

        {/* Badge */}

        <div className="flex-shrink-0">

          <div
            className="
              rounded-full

              border
              border-[#93CD0C]

              px-3
              py-1

              sm:px-4
              sm:py-2

              md:px-6

              text-[10px]
              sm:text-xs
              md:text-sm

              font-semibold
              text-white

              whitespace-nowrap
            "
          >
            AWS Summit Demo
          </div>

        </div>

      </div>

    </header>
  );
}