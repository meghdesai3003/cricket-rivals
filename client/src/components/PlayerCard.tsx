interface CollectionPlayer {
  owned: number;
  overall: number;
  rarity: "Standard" | "Elite" | "Gold" | string;
  country: string;
  image: string;
  name: string;
  role: "Batter" | "Bowler" | "All-Rounder" | "Wicketkeeper" | string;
  batting: number;
  bowling: number;
  fielding: number;
}

interface PlayerCardProps {
  player: CollectionPlayer;
  selected?: boolean;
  onClick?: () => void;
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

function PlayerCard({
  player,
  selected = false,
  onClick,
}: PlayerCardProps) {
  const rarityStyles = {
    Standard: {
      border: "border-slate-500",
      badge: "bg-slate-600 text-white",
      overall: "text-slate-300",
      glow: "",
    },

    Elite: {
      border: "border-sky-400",
      badge: "bg-sky-500 text-white",
      overall: "text-sky-300",
      glow: "shadow-sky-500/20",
    },

    Gold: {
      border: "border-yellow-400",
      badge: "bg-yellow-400 text-slate-900",
      overall: "text-yellow-300",
      glow: "shadow-yellow-500/20",
    },
  };

  const style = rarityStyles[player.rarity as keyof typeof rarityStyles];

  const country =
    countryInfo[player.country] ?? {
      code: "",
      short: player.country.substring(0, 3).toUpperCase(),
    };

return (
  <div
    onClick={onClick}
    className={`
      relative
      group
      cursor-pointer
      rounded-3xl
      border-2
      ${style.border}
      bg-gradient-to-b
      from-slate-900
      via-slate-900
      to-slate-950
      p-5
      shadow-2xl
      ${style.glow}
      transition-all
      duration-300
      hover:-translate-y-2
      hover:scale-[1.03]
      ${
        selected
          ? "ring-4 ring-yellow-400 shadow-yellow-500/40"
          : ""
      }
    `}
  >

    {/* Selected Badge */}

    {selected && (
      <div className="absolute left-4 top-4 z-30 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
        ✓ SELECTED
      </div>
    )}

    <div className="flex items-start justify-between">
      <div>
        <p
          className={`text-5xl font-black leading-none ${style.overall}`}
        >
          {player.overall}
        </p>

        <p className="text-xs tracking-[0.3em] text-slate-400">
          OVR
        </p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-bold
            ${style.badge}
          `}
        >
          {player.rarity}
        </span>

        <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-bold text-white">
          {player.role === "Batter"
            ? "BAT"
            : player.role === "Bowler"
            ? "BOWL"
            : player.role === "All-Rounder"
            ? "AR"
            : "WK"}
        </span>
      </div>
    </div>

    <div className="mb-4 mt-3 flex items-center justify-center gap-2">
      {country.code && (
        <span
          className={`fi ${country.code} rounded-sm text-xl`}
        ></span>
      )}

      <span className="text-sm font-bold tracking-[0.2em] text-slate-300">
        {country.short}
      </span>
    </div>

    <div className="mb-5 flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-slate-800 to-slate-900">
      <img
        src={player.image}
        alt={player.name}
        className="
          h-full
          w-full
          object-contain
          transition-transform
          duration-300
          group-hover:scale-110
        "
      />
    </div>

    <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-white">
      {player.name}
    </h2>

    <div className="my-5 border-t border-slate-700"></div>

    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold tracking-widest text-slate-400">
          BAT
        </span>

        <span className="text-lg font-bold text-white">
          {player.batting}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-semibold tracking-widest text-slate-400">
          BOWL
        </span>

        <span className="text-lg font-bold text-white">
          {player.bowling}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <span className="font-semibold tracking-widest text-slate-400">
          FIELD
        </span>

        <span className="text-lg font-bold text-white">
          {player.fielding}
        </span>
      </div>
    </div>
  </div>
);
}

export default PlayerCard;
