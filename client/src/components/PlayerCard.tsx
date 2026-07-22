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
      glow: "shadow-slate-900/70"
    },

    Elite: {
      border: "border-sky-400",
      badge: "bg-sky-500 text-white",
      overall: "text-sky-300",
      glow: "shadow-sky-500/35"
    },

    Gold: {
      border: "border-yellow-400",
      badge: "bg-yellow-400 text-slate-900",
      overall: "text-yellow-300",
      glow: "shadow-yellow-500/40"
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
      overflow-hidden

      rounded-[32px]
      pb-7

      border-[3px]
      ${style.border}

      bg-gradient-to-b
      from-[#1d2638]
      via-[#101827]
      to-[#05070d]

      pb-7

      shadow-2xl
      ${style.glow}
      transition-all
      duration-500

      hover:-translate-y-5
      hover:scale-[1.05]
      hover:rotate-[0.5deg]

      hover:shadow-[0_35px_80px_rgba(0,0,0,0.75)]
      ${
        selected
          ? "ring-4 ring-yellow-400 shadow-yellow-500/40"
          : ""
      }
    `}
  >
    {/* Metallic Frame */}

<div
  className="
    absolute
    inset-0
    rounded-[30px]
    border
    border-white/10
    pointer-events-none
  "
/>

{/* Inner Highlight */}

<div
  className="
    absolute
    inset-[5px]
    rounded-[26px]
    border
    border-white/5
    pointer-events-none
  "
/>

{/* Top Metallic Shine */}

<div
  className="
    pointer-events-none

    absolute
    bottom-0
    left-0

    h-20
    w-full

    bg-gradient-to-t

    from-yellow-400/5
    to-transparent

  "
/>
{/* Animated Shine */}

<div
  className="
    pointer-events-none
    absolute
    inset-0
    overflow-hidden
    rounded-[32px]
  "
>

  <div
    className="
      absolute
      -left-32
      top-0

      h-full
      w-20

      rotate-12

      bg-gradient-to-r
      from-transparent
      via-white/20
      to-transparent

      transition-all
      duration-700

      group-hover:left-[120%]
    "
  />

</div>

    {/* Selected Badge */}

    {selected && (
      <div className="absolute left-4 top-4 z-30 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
        ✓ SELECTED
      </div>
    )}

    <div className="flex items-start justify-between">
      <div className="flex flex-col">
  <p
    className={`
      text-6xl lg:text-7xl
      transition-all
      duration-300
      group-hover:scale-110
      font-black
      leading-none
      tracking-tight
      ${style.overall}
    `}
  >
    {player.overall}
  </p>

  <p
    className="
      mt-1
      text-[9px]
      font-bold
      tracking-[0.30em]
      text-slate-400
    "
  >
    OVERALL
  </p>
</div>

      <div className="flex flex-col items-center gap-2">
        <span
  className={`
    rounded-full
    px-3
    py-1.5
    text-[9px]
    font-black
    tracking-[0.18em]
    uppercase
    shadow-lg
    transition-all
    duration-300
    group-hover:scale-110
    ${style.badge}
  `}
>
  {player.rarity === "Gold"
    ? "★★★★★ GOLD"
    : player.rarity === "Elite"
    ? "★★★ ELITE"
    : "★ STANDARD"}
</span>

        <span
  className="
    rounded-full
    border
    border-slate-600
    bg-slate-800
    px-3
    py-1
    text-[10px]
    font-black
    tracking-[0.18em]
    text-white
    shadow-lg
  "
>
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

    <div className="mb-5 mt-5 flex items-center justify-center gap-3">
      {country.code && (
        <span
          className={`fi ${country.code} rounded-sm text-[28px]`}
        ></span>
      )}

      <span
  className="
    text-xs
    font-black
    tracking-[0.25em]
    text-white
  "
>
        {country.short}
      </span>
    </div>

    <div
  className="
    relative
    mt-5
    mb-6
    flex
    h-[290px]
    items-end
    justify-center
    overflow-hidden
    rounded-[28px]

    bg-gradient-to-b
    from-slate-800
    via-slate-900
    to-black
  "
>

  {/* Background Glow */}

  <div
  className={`
    absolute
    top-10
    h-52
    w-52
    rounded-full
    blur-3xl
    transition-all
    duration-500
    group-hover:scale-125
    group-hover:opacity-100

    ${
      player.rarity === "Gold"
        ? "bg-yellow-400/20"
        : player.rarity === "Elite"
        ? "bg-sky-400/15"
        : "bg-slate-300/10"
    }
  `}
/>

  {/* Secondary Glow */}

  <div
    className="
      absolute
      bottom-10
      h-44
      w-44
      rounded-full

      bg-white/5

      blur-2xl
    "
  />

  {/* Image */}

  <img
    src={player.image}
    alt={player.name}
    className="
      relative
      z-20

      h-[315px]

      object-contain

      drop-shadow-[0_25px_40px_rgba(0,0,0,0.65)]

      transition-all
      duration-500

      group-hover:scale-[1.12]
      group-hover:-translate-y-0
    "
  />

</div>

    <h2 className="text-center text-[28px] font-extrabold uppercase tracking-wide text-white drop-shadow-md">
      {player.name}
    </h2>

    <div className="my-5 border-t border-slate-700"></div>

    <div
    className="
    my-5
    h-px
    w-full

    bg-gradient-to-r
    from-transparent
    via-slate-600
    to-transparent
"
/>

    <div className="space-y-6">

  {/* Batting */}

  <div>

    <div className="mb-2 flex items-center justify-between">

      <span className="font-semibold tracking-[0.25em] text-slate-300">
        BAT
      </span>

      <span className="text-base font-black text-white">
        {player.batting}
      </span>

    </div>

    <div className="mt-2 px-1">
  <div className="mt-2 w-full rounded-full bg-slate-800"></div>

      <div
        className="rounded-full bg-green-500"
        style={{
          width: `${player.batting}%`,
          height: "6px",
        }}
      />

    </div>

  </div>

  {/* Bowling */}

  <div>

    <div className="mb-2 flex items-center justify-between">

      <span className="font-bold tracking-[0.25em] text-slate-300">
        BOWL
      </span>

      <span className="text-lg font-black text-white">
        {player.bowling}
      </span>

    </div>

    <div className="mt-2 px-1">
  <div className="mt-2 w-full rounded-full bg-slate-800"></div>

      <div
        className="rounded-full bg-sky-400"
        style={{
          width: `${player.bowling}%`,
          height: "6px" ,
        }}
      />

    </div>

  </div>

  {/* Fielding */}

  <div>

    <div className="mb-2 flex items-center justify-between">

      <span className="font-bold tracking-[0.25em] text-slate-300">
        FIELD
      </span>

      <span className="text-lg font-black text-white">
        {player.fielding}
      </span>

    </div>

    <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">

      <div
        className="h-full rounded-full bg-yellow-400 transition-all duration-700"
        style={{
          width: `${player.fielding}%`,
        }}
      />

    </div>

  </div>

  </div>

</div>
);
}

export default PlayerCard;
