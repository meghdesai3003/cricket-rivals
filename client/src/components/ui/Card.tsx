import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

function Card({ children, className = "" }: CardProps) {
  return (
    <section
      className={`
        mx-auto
        w-11/12
        max-w-4xl
        rounded-2xl
        bg-slate-800
        p-6
        shadow-xl
        ${className}
      `}
    >
      {children}
    </section>
  );
}

export default Card;