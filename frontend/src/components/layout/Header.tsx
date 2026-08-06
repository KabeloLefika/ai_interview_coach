import logo from "../../assets/DEL_SEC_RGB-large.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#232129] bg-[#08070A]/95 backdrop-blur">

      <div className=" mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">

        {/* Phone */}

        <div className="flex flex-col items-center gap-3 sm:hidden">

          <img
            src={logo}
            alt="Deloitte"
            className="h-8 w-auto"
          />

          <h1 className="text-xl font-bold tracking-wide text-white text-center">
            AI Interview Coach
          </h1>

          <div className="rounded-full border border-[#93CD0C] px-4 py-1 text-xs font-semibold text-white">
            AWS Summit Demo
          </div>
        </div>

        {/* Desktop */}

        <div className="hidden sm:flex items-center justify-between">

          <img
            src={logo}
            alt="Deloitte"
            className="h-10 md:h-12 w-auto"
          />

          <h1 className="flex-1 px-6 text-center text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white">
            AI Interview Coach
          </h1>

          <div className="rounded-full border border-[#93CD0C] px-4 py-2 md:px-6 text-xs md:text-sm font-semibold text-white whitespace-nowrap">
            AWS Summit Demo
          </div>
        </div>
      </div>
    </header>
  );
}