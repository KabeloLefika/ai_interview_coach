import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#232129] bg-[#08070A]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          <img
            src={logo}
            alt="Company Logo"
            className="h-12 w-auto"
          />

          <div>
            <h1 className="text-xl font-bold text-white">
              AI Interview Coach
            </h1>

            <p className="text-sm text-gray-400">
              Powered by AWS AI
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div
          className="
            rounded-full
            border
            border-[#93CD0C]
            px-6
            py-2
            text-sm
            font-semibold
            text-white
          "
        >
          AWS Summit Demo
        </div>

      </div>
    </header>
  );
}