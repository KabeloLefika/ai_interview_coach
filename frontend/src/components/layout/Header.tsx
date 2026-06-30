export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <h1 className="text-2xl font-bold text-blue-600">
          AI Interview Coach
        </h1>

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
          AWS Summit Demo
        </span>

      </div>
    </header>
  );
}