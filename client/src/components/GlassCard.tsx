import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
}

function GlassCard({ children }: GlassCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-md
        shadow-2xl
        p-6
        transition-all
        duration-300
        hover:border-yellow-400/40
        hover:shadow-yellow-400/10
      "
    >
      {children}
    </div>
  );
}

export default GlassCard;