import type { Pack } from "../data/packs";

interface PackCardProps {
  pack: Pack;
  onOpen: () => void;
}

function PackCard({
  pack,
  onOpen,
}: PackCardProps) {
  return (
    <div
      className={`
        group
        rounded-3xl
        border-2
        ${pack.border}
        bg-gradient-to-b
        ${pack.color}
        p-6
        shadow-2xl
        transition-all
        duration-300
        hover:-translate-y-3
        hover:scale-105
      `}
    >
      {/* Pack Image */}

      <img
        src={pack.image}
        alt={pack.name}
        className="
          mx-auto
          h-72
          object-contain
          transition-all
          duration-500
          group-hover:rotate-3
          group-hover:scale-110
        "
      />

      {/* Pack Name */}

      <h2 className="mt-5 text-center text-2xl font-bold text-white">
        {pack.name}
      </h2>

      {/* Description */}

      <p className="mt-3 text-center text-slate-300">
        {pack.description}
      </p>

      {/* Card Count */}

      <p className="mt-4 text-center text-lg font-bold text-yellow-300">
        {pack.cards} Cards
      </p>

      {/* Open Button */}

      <button
        onClick={onOpen}
        className={`
          mt-8
          w-full
          rounded-xl
          py-3
          font-bold
          text-slate-900
          transition-all
          duration-300
          hover:scale-105
          ${pack.button}
        `}
      >
        Open Pack
      </button>
    </div>
  );
}

export default PackCard;