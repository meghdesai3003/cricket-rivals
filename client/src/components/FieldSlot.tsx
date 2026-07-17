import type { Player } from "../types/Player";

interface FieldSlotProps {
  player?: Player;
  index: number;
}

function FieldSlot({
  player,
  index,
}: FieldSlotProps) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="
          h-20
          w-20
          overflow-hidden
          rounded-full
          border-2
          border-dashed
          border-white/40
          bg-slate-800
          shadow-xl
          transition-all
          duration-300
        "
      >
        {player ? (
          <img
            src={player.image}
            alt={player.name}
            className="
              h-full
              w-full
              object-cover
            "
          />
        ) : (
          <div
            className="
              flex
              h-full
              w-full
              items-center
              justify-center
              text-xl
              font-bold
              text-white/50
            "
          >
            {index}
          </div>
        )}
      </div>

      {player && (
        <p className="mt-2 max-w-[90px] text-center text-xs font-semibold text-white">
          {player.name}
        </p>
      )}
    </div>
  );
}

export default FieldSlot;