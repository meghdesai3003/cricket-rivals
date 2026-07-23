import { usePlayingXI } from "../context/PlayingXIContext";
import type { Player } from "../types/Player";

interface Props {
  player: Player;
}

function PlayingXIPlayerCard({ player }: Props) {
  const { captainId, viceCaptainId } = usePlayingXI();

  return (
    <div
      className="
        relative
        h-[210px]
        w-[135px]
        overflow-hidden
        rounded-[28px]
        border-[3px]
        border-slate-700
        bg-gradient-to-b
        from-slate-900
        via-slate-950
        to-black
        shadow-2xl
        transition-all
        duration-300
        hover:scale-105
      "
    >
      {/* Overall */}

      <div className="absolute left-3 top-2 z-20">

        <h2 className="text-4xl font-black leading-none text-yellow-400">
          {player.overall}
        </h2>

        <p className="text-[10px] tracking-[0.25em] text-slate-400">
          OVR
        </p>

      </div>

      {/* Captain */}

      {captainId === player.id && (
        <div
          className="
            absolute
            right-2
            top-2
            z-20
            rounded-full
            bg-yellow-400
            px-2
            py-1
            text-[10px]
            font-black
            text-slate-900
          "
        >
          C
        </div>
      )}

      {/* Vice Captain */}

      {viceCaptainId === player.id && (
        <div
          className="
            absolute
            right-2
            top-2
            z-20
            rounded-full
            bg-sky-400
            px-2
            py-1
            text-[10px]
            font-black
            text-slate-900
          "
        >
          VC
        </div>
      )}

      {/* Image */}

      <div
        className="
          mt-10
          flex
          h-[120px]
          items-end
          justify-center
        "
      >
        <img
          src={player.image}
          alt={player.name}
          className="
            max-h-[120px]
            object-contain
            drop-shadow-2xl
          "
        />
      </div>

      {/* Name */}

      <div
        className="
          absolute
          bottom-4
          w-full
          px-3
        "
      >
        <p
          className="
            truncate
            text-center
            text-[17px]
            font-bold
            text-white
          "
        >
          {player.name}
        </p>
      </div>
    </div>
  );
}

export default PlayingXIPlayerCard;