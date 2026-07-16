import type { Player } from "../types/Player";

interface PlayerCardProps {
  player: Player;
}

function PlayerCard({ player }: PlayerCardProps) {
  const rarityStyles = {
    Standard: {
      border: "border-slate-500",
      badge: "bg-slate-600 text-white",
      overall: "text-slate-300",
    },
    Elite: {
      border: "border-sky-400",
      badge: "bg-sky-500 text-white",
      overall: "text-sky-300",
    },
    Gold: {
      border: "border-yellow-400",
      badge: "bg-yellow-400 text-slate-900",
      overall: "text-yellow-300",
    },
  };

  const style = rarityStyles[player.rarity];

  return (
    <div
      className={`
        group
        rounded-3xl
        border-2
        ${style.border}
        bg-gradient-to-b
        from-slate-900
        to-slate-950
        p-5
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-[1.03]
        hover:shadow-2xl
      `}
    >
      {/* Rarity Badge */}
      <div className="flex justify-end">
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
      </div>

      {/* Player Image Placeholder */}
      <div className="mt-4 flex h-52 items-center justify-center rounded-2xl bg-slate-800">
        <span className="text-slate-500">
          Player Image
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-5 text-center text-xl font-bold text-white">
        {player.name}
      </h2>

      {/* Country */}
      <p className="mt-1 text-center text-sm text-slate-400">
        {player.country}
      </p>

      {/* Overall */}
      <div className="mt-5 text-center">
        <p className={`text-5xl font-black ${style.overall}`}>
          {player.overall}
        </p>

        <p className="text-xs tracking-[0.3em] text-slate-500">
          OVERALL
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-slate-700"></div>

      {/* Stats */}
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-slate-400">Batting</span>
          <span className="font-bold">{player.batting}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Bowling</span>
          <span className="font-bold">{player.bowling}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Fielding</span>
          <span className="font-bold">{player.fielding}</span>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;