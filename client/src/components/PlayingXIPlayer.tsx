import type { Player } from "../types/Player";
import { usePlayingXI } from "../context/PlayingXIContext";

interface Props {
  player: Player;
}

function PlayingXIPlayer({ player }: Props) {

    const {
  captainId,
  viceCaptainId,
  setCaptain,
  setViceCaptain,
  removePlayer,
} = usePlayingXI();


  const border =
    player.rarity === "Gold"
      ? "border-yellow-400"
      : player.rarity === "Elite"
      ? "border-sky-400"
      : "border-slate-400";

  const overall =
    player.rarity === "Gold"
      ? "text-yellow-300"
      : player.rarity === "Elite"
      ? "text-sky-300"
      : "text-slate-300";

  return (
    <div
      className={`
        relative
        group relative w-24
        rounded-2xl
        border-2
        ${border}
        bg-slate-900/95
        p-2
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-110
      `}
    >
      {captainId === player.id && (
        <div
          className="
            absolute
            -top-2
            -left-2
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

      {viceCaptainId === player.id && (
        <div
          className="
            absolute
            -top-2
            -right-2
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

      <p
        className={`text-center text-lg font-black ${overall}`}
      >
        {player.overall}
      </p>

      <img
        src={player.image}
        alt={player.name}
        className="mx-auto h-16 object-contain"
      />

      <p
        className="
          truncate
          text-center
          text-[10px]
          font-bold
          text-white
        "
      >
        {player.name}
      </p>
      <div
        className="
          mt-2
          flex
          justify-center
          gap-1
          opacity-0
          transition
          duration-300
          group-hover:opacity-100
        "
      >

        <button
          onClick={() => setCaptain(player.id)}
          className="
            rounded
            bg-yellow-400
            px-1
            text-[9px]
            font-bold
            text-slate-900
          "
        >
          C
        </button>

        <button
          onClick={() => setViceCaptain(player.id)}
          className="
            rounded
            bg-sky-400
            px-1
            text-[9px]
            font-bold
            text-slate-900
          "
        >
          VC
        </button>

        <button
          onClick={() => removePlayer(player.id)}
          className="
            rounded
            bg-red-500
            px-1
            text-[9px]
            font-bold
            text-white
          "
        >
          ✕
        </button>

      </div>
    </div>
  );

  return (
    <div
      className={`
        relative
        group relative w-24
        rounded-2xl
        border-2
        ${border}
        bg-slate-900/95
        p-2
        shadow-xl
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-110
      `}
    >
      <p
        className={`text-center text-lg font-black ${overall}`}
      >
        {player.overall}
      </p>

      <img
        src={player.image}
        alt={player.name}
        className="mx-auto h-16 object-contain"
      />

      <p
        className="
          truncate
          text-center
          text-[10px]
          font-bold
          text-white
        "
      >
        {player.name}
      </p>
      <div
  className="
    mt-2
    flex
    justify-center
    gap-1
    opacity-0
    transition
    duration-300
    group-hover:opacity-100
  "
>

  <button
    onClick={() => setCaptain(player.id)}
    className="
      rounded
      bg-yellow-400
      px-1
      text-[9px]
      font-bold
      text-slate-900
    "
  >
    C
  </button>

  <button
    onClick={() => setViceCaptain(player.id)}
    className="
      rounded
      bg-sky-400
      px-1
      text-[9px]
      font-bold
      text-slate-900
    "
  >
    VC
  </button>

  <button
    onClick={() => removePlayer(player.id)}
    className="
      rounded
      bg-red-500
      px-1
      text-[9px]
      font-bold
      text-white
    "
  >
    ✕
  </button>

</div>
    </div>
  );
}

export default PlayingXIPlayer;