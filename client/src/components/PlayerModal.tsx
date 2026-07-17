import type { Player } from "../types/Player";

interface PlayerModalProps {
  player: Player | null;
  onClose: () => void;
}

const countryInfo: Record<
  string,
  {
    code: string;
    short: string;
  }
> = {
  India: {
    code: "fi-in",
    short: "IND",
  },

  Australia: {
    code: "fi-au",
    short: "AUS",
  },

  England: {
    code: "fi-gb-eng",
    short: "ENG",
  },

  "New Zealand": {
    code: "fi-nz",
    short: "NZ",
  },

  "South Africa": {
    code: "fi-za",
    short: "SA",
  },

  Afghanistan: {
    code: "fi-af",
    short: "AFG",
  },
};

function getBarColor(value: number) {
  if (value >= 90) return "bg-green-500";
  if (value >= 80) return "bg-blue-500";
  if (value >= 70) return "bg-yellow-400";
  if (value >= 60) return "bg-orange-500";
  return "bg-red-500";
}

function PlayerModal({
  player,
  onClose,
}: PlayerModalProps) {
  if (!player) return null;

  const country =
    countryInfo[player.country] ?? {
      code: "",
      short: player.country.substring(0, 3).toUpperCase(),
    };

  const rarityStyle = {
    Standard: {
      border: "border-slate-500",
      badge: "bg-slate-600 text-white",
      overall: "text-slate-300",
      background:
        "from-slate-900 via-slate-900 to-slate-950",
    },

    Elite: {
      border: "border-sky-400",
      badge: "bg-sky-500 text-white",
      overall: "text-sky-300",
      background:
        "from-sky-950 via-slate-900 to-slate-950",
    },

    Gold: {
      border: "border-yellow-400",
      badge: "bg-yellow-400 text-slate-900",
      overall: "text-yellow-300",
      background:
        "from-yellow-950 via-slate-900 to-slate-950",
    },
  };

  const style = rarityStyle[player.rarity];

  function StatBar({
    label,
    value,
  }: {
    label: string;
    value: number;
  }) {
    return (
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="font-semibold text-slate-300">
            {label}
          </span>

          <span className="font-bold text-white">
            {value}
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-700">
          <div
            className={`${getBarColor(
              value
            )} h-full transition-all duration-700`}
            style={{
              width: `${value}%`,
            }}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        overflow-y-auto
        bg-black/80
        backdrop-blur-md
        animate-fadeIn
        p-6
      "
    >
        <div
className="flex min-h-full items-center justify-center"
onClick={(e)=>e.stopPropagation()}
>

<div
className={`
animate-scaleIn
relative
w-full
max-w-md
rounded-3xl
border-2
${style.border}
bg-gradient-to-b
${style.background}
p-8
shadow-2xl
`}
>


        <button
          onClick={onClose}
          className="
            absolute
            right-4
            top-4
            z-50
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-slate-800
            text-xl
            font-bold
            text-white
            transition-all
            duration-300
            hover:bg-red-500
            hover:rotate-90
          "
        >
          ×
        </button>

        <div className="flex items-start justify-between">
          <div>
            <p
              className={`text-6xl font-black ${style.overall}`}
            >
              {player.overall}
            </p>

            <p className="tracking-[0.3em] text-slate-500">
              OVR
            </p>
          </div>

          <span
            className={`
              rounded-full
              px-4
              py-2
              text-sm
              font-bold
              ${style.badge}
            `}
          >
            {player.rarity}
          </span>
        </div>

        <div className="mt-5 flex items-center justify-center gap-3">
          {country.code && (
            <span
              className={`fi ${country.code} text-2xl`}
            />
          )}

          <span className="font-bold tracking-[0.25em] text-white">
            {country.short}
          </span>

          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-white">
            {player.role === "Batter"
              ? "BAT"
              : player.role === "Bowler"
              ? "BOWL"
              : player.role === "All-Rounder"
              ? "AR"
              : "WK"}
          </span>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="rounded-full bg-white/5 p-4 shadow-xl">
            <img
              src={player.image}
              alt={player.name}
              className="
              h-52
              w-auto
              object-contain
              transition-all
              duration-300
              group-hover:scale-105
              "
            />
          </div>
        </div>

        <h2 className="mt-5 text-center text-3xl font-black uppercase tracking-wide text-white">
          {player.name}
        </h2>

        <div className="mt-5 space-y-4">
          <StatBar
            label="Batting"
            value={player.batting}
          />

          <StatBar
            label="Bowling"
            value={player.bowling}
          />

          <StatBar
            label="Fielding"
            value={player.fielding}
          />
        </div>

        <button
          className="
            mt-6
            w-full
            rounded-2xl
            bg-yellow-400
            py-3
            text-lg
            font-bold
            text-slate-900
            transition-all
            duration-300
            hover:scale-105
            hover:bg-yellow-300
          "
        >
          Add to Playing XI
        </button>
       </div>
     </div>
    </div>
  );
}

export default PlayerModal;