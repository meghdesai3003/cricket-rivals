import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "gold";
  className?: string;
};

function Button({
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const baseStyles =
    "rounded-xl py-3 px-6 font-bold transition-all duration-300";

  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-500 hover:scale-105 shadow-xl",

    gold:
      "bg-yellow-400 text-slate-900 hover:bg-yellow-300 hover:scale-[1.02]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;