interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
};

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
     type={type}
      onClick={onClick}
      disabled={disabled}
      className="
        w-full
        rounded-xl
        bg-blue-600
        px-6
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-blue-700
        hover:scale-[1.02]
        active:scale-95
        disabled:cursor-not-allowed
        disabled:bg-slate-400
      "
    >
      {children}
    </button>
  );
}