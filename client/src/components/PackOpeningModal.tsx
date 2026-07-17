import type { Pack } from "../data/packs";

interface PackOpeningModalProps {
  pack: Pack | null;
  onClose: () => void;
}

function PackOpeningModal({
  pack,
  onClose,
}: PackOpeningModalProps) {
  if (!pack) return null;

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
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          w-full
          max-w-lg
          animate-scaleIn
          rounded-3xl
          border-2
          border-slate-700
          bg-gradient-to-b
          from-slate-900
          via-slate-900
          to-slate-950
          p-8
          shadow-2xl
        "
      >
        {/* Close Button */}

        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            flex
            h-10
            w-10
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

        <h2 className="text-center text-4xl font-black text-white">
          {pack.name}
        </h2>

        <p className="mt-3 text-center text-slate-400">
          {pack.description}
        </p>

        {/* Pack Image */}

        <div className="mt-10 flex justify-center">
          <img
            src={pack.image}
            alt={pack.name}
            className="
              h-96
              object-contain
              transition-all
              duration-500
              hover:scale-105
            "
          />
        </div>

        {/* Cards */}

        <div className="mt-6 text-center">
          <span className="rounded-full bg-slate-800 px-4 py-2 text-lg font-bold text-yellow-300">
            {pack.cards} Cards
          </span>
        </div>

        {/* Open Button */}

        <button
          className={`
            mt-10
            w-full
            rounded-2xl
            py-4
            text-xl
            font-bold
            text-slate-900
            transition-all
            duration-300
            hover:scale-105
            ${pack.button}
          `}
        >
          Tap To Open
        </button>
      </div>
    </div>
  );
}

export default PackOpeningModal;