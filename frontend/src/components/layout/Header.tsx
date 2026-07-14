import logo from "../../assets/DEL_SEC_RGB-large.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#232129] bg-[#08070A]/90 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-8">

        {/* Left - Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Company Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Middle - Title */}
        <div className="flex-1 text-center">
          <h1 className="text-2xl font-bold tracking-wide text-white">
            AI Interview Coach
          </h1>
        </div>

        {/* Right - AWS Summit Badge */}
        <div>
          <div className="rounded-full border border-[#93CD0C] px-6 py-2 text-sm font-semibold text-white">
            AWS Summit Demo
          </div>
        </div>

      </div>
    </header>
  );
}