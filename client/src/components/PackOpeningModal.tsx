import { useMemo, useState } from "react";
import AnimatedPack from "./AnimatedPack";

interface Pack {
  name: string;
  description: string;
  image: string;
  cards: number;
}

interface PackOpeningModalProps {
  pack: Pack | null;
  onClose: () => void;
}

function PackOpeningModal({
  pack,
  onClose,
}: PackOpeningModalProps) {
  if (!pack) return null;

  const glow = useMemo(() => {
    switch (pack.name) {
      case "Gold Pack":
        return {
          ring: "ring-yellow-400/70",
          shadow: "shadow-yellow-500/60",
          button: "bg-yellow-400 hover:bg-yellow-300",
          glow: "from-yellow-400/30 via-yellow-500/10 to-transparent",
        };

      case "Elite Pack":
        return {
          ring: "ring-sky-400/70",
          shadow: "shadow-sky-500/60",
          button: "bg-sky-400 hover:bg-sky-300",
          glow: "from-sky-400/30 via-sky-500/10 to-transparent",
        };

      default:
        return {
          ring: "ring-slate-400/60",
          shadow: "shadow-slate-400/40",
          button: "bg-slate-300 hover:bg-white",
          glow: "from-slate-400/20 via-slate-500/10 to-transparent",
        };
    }
  }, [pack]);

  const rarityBorder =
    pack.name === "Gold Pack"
      ? "border-yellow-400"
      : pack.name === "Elite Pack"
      ? "border-sky-400"
      : "border-slate-500";
  const [isOpening, setIsOpening] = useState(false);

  const [showFlash, setShowFlash] = useState(false);

  const handleOpen = () => {
   if (isOpening) return;

   setIsOpening(true);

   setTimeout(() => {
    setShowFlash(true);
  }, 900);

  // Batch B.4 will continue from here
};

 return (
  <div
    onClick={onClose}
    className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/80
      backdrop-blur-md
      animate-fadeIn
      p-6
    "
  >
    {showFlash && (
  <div
    className="
      absolute
      inset-0
      z-[60]
      animate-pulse
      bg-white
      opacity-90
    "
  />
)}
    <div
      onClick={(e) => e.stopPropagation()}
      className={`
        relative
        w-full
        max-w-xl
        overflow-hidden
        rounded-3xl
        border-2
        ${rarityBorder}
        bg-gradient-to-b
        from-slate-900
        via-slate-900
        to-slate-950
        p-8
        shadow-2xl
        ${glow.shadow}
        animate-scaleIn
      `}
    >
      {/* Animated Glow */}

      <div
        className={`
          absolute
          inset-0
          bg-gradient-radial
          ${glow.glow}
          opacity-70
          blur-3xl
          animate-pulse
          pointer-events-none
        `}
      />

      {/* Close Button */}

      <button
        onClick={onClose}
        className="
          absolute
          right-5
          top-5
          z-20
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-slate-800
          text-2xl
          font-bold
          text-white
          transition-all
          duration-300
          hover:rotate-90
          hover:bg-red-500
        "
      >
        ×
      </button>

      {/* Heading */}

      <div className="relative z-10">

        <h2 className="text-center text-4xl font-black text-white">
          {pack.name}
        </h2>

        <p className="mt-3 text-center text-slate-400">
          {pack.description}
        </p>

      </div>

        {/* Pack Image */}

      <div className="relative z-10 mt-10 flex justify-center">

  <AnimatedPack
    image={pack.image}
    name={pack.name}
    ring={glow.ring}
    opening={isOpening}
  />

</div>

{/* Cards */}

<div className="relative z-10 mt-8 text-center">

  <span className="rounded-full bg-slate-800 px-5 py-2 text-lg font-bold text-yellow-300 shadow-lg">
    {pack.cards} Cards
  </span>

</div>

{/* Tap To Open */}

<div className="relative z-10 mt-10">

  <button
    onClick={handleOpen}
    disabled={isOpening}
    className={`
      w-full
      rounded-2xl
      py-4
      text-xl
      font-bold
      text-slate-900
      transition-all
      duration-300
      hover:scale-105
      animate-pulse
      ${glow.button}
    `}
  >
     {isOpening ? "Opening..." : " Tap To Open "}
  </button>

</div>
        </div>
  </div>
);
}

export default PackOpeningModal;