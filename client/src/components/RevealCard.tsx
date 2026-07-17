import { useEffect, useState } from "react";
import type { Player } from "../types/Player";

interface RevealCardProps {
  player: Player;
  delay: number;
}

function RevealCard({
  player,
  delay,
}: RevealCardProps) {
    const rarityStyle = {
  Standard: {
    border: "border-slate-400",
    glow: "shadow-slate-400/40",
    name: "text-white",
    aura: "from-slate-300/25 via-transparent to-slate-500/10",
    animation: "",
  },

  Elite: {
    border: "border-sky-400",
    glow: "shadow-sky-500/70",
    name: "text-sky-300",
    aura: "from-sky-400/40 via-sky-300/10 to-transparent",
    animation: "animate-eliteGlow",
  },

  Gold: {
    border: "border-yellow-400",
    glow: "shadow-yellow-500/80",
    name: "text-yellow-300",
    aura: "from-yellow-300/50 via-yellow-400/20 to-transparent",
    animation: "animate-goldGlow",
  },
};

const style = rarityStyle[player.rarity];
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlipped(true);
    }, delay + 650);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className="
        perspective
        h-[340px]
        w-[220px]
        animate-cardEntrance
        opacity-0
      "
        style={{
    animationDelay: `${delay}ms`,
    animationFillMode: "forwards",
  }}
    >
      <div
        className={`
          relative
          h-full
          w-full
          transition-all
          duration-700
          preserve-3d
          ${flipped ? "rotate-y-180" : ""}
        `}
      >
        {/* Card Back */}

<div
  className="
    absolute
    inset-0
    backface-hidden
    overflow-hidden
    rounded-3xl
    border-2
    border-yellow-400
    bg-gradient-to-b
    from-slate-900
    via-slate-800
    to-black
    shadow-2xl
  "
>

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-br
      from-yellow-400/20
      via-transparent
      to-sky-400/20
    "
  />

  <div
    className="
      flex
      h-full
      flex-col
      items-center
      justify-center
    "
  >

    <h1
      className="
        text-6xl
        font-black
        tracking-[0.4em]
        text-yellow-400
      "
    >
      CR
    </h1>

    <p
      className="
        mt-4
        text-sm
        tracking-[0.6em]
        text-slate-300
      "
    >
      CRICKET RIVALS
    </p>

  </div>

</div>

{/* Card Front */}

<div
  className={`
    absolute
    inset-0
    rotate-y-180
    backface-hidden
    preserve-3d
    overflow-hidden
    rounded-3xl
    border-2
    bg-slate-900
    shadow-2xl
    ${style.border}
    ${style.glow}
  `}
>

  {/* Aura */}

  <div
    className={`
      absolute
      inset-0
      bg-gradient-to-br
      ${style.aura}
      opacity-50
      blur-2xl
      ${style.animation}
    `}
  />

  {/* Gold Shine */}

  {player.rarity === "Gold" && (
    <div
      className="
        absolute
        inset-0
        -translate-x-full
        animate-shine
        bg-gradient-to-r
        from-transparent
        via-white/30
        to-transparent
      "
    />
  )}

  {/* Overall */}

  <div className="absolute left-3 top-3 z-20">

    <p className="text-4xl font-black text-white">
      {player.overall}
    </p>

    <p className="text-xs tracking-[0.3em] text-slate-400">
      OVR
    </p>

  </div>

  {/* Rarity Badge */}

  <div className="absolute right-3 top-3 z-20">

    <span
      className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-bold
        ${
          player.rarity === "Gold"
            ? "bg-yellow-400 text-black"
            : player.rarity === "Elite"
            ? "bg-sky-400 text-black"
            : "bg-slate-300 text-black"
        }
      `}
    >
      {player.rarity}
    </span>

  </div>

  {/* Player Image */}

  <img
    src={player.image}
    alt={player.name}
    className="
      h-full
      w-full
      object-contain
      transition-transform
      duration-500
      hover:scale-105
    "
  />

  {/* Player Name */}

  <div
    className="
      absolute
      bottom-0
      left-0
      right-0
      z-20
      bg-black/70
      p-3
      backdrop-blur-sm
    "
  >

    <h2
      className={`
        text-center
        text-lg
        font-bold
        ${style.name}
      `}
    >
      {player.name}
    </h2>

  </div>

</div>

      </div>
    </div>
  );
}

export default RevealCard;