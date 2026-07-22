import type { Player } from "../types/Player";
import { usePlayingXI } from "../context/PlayingXIContext";

interface Props {
  player: Player | null;
  onClose: () => void;
}

function PlayingXIPlayerModal({
  player,
  onClose,
}: Props) {
  if (!player) return null;
  const {
  setCaptain,
  setViceCaptain,
  removePlayer,
} = usePlayingXI();

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
        bg-black/70
        backdrop-blur-md
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-[380px]
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          p-8
          shadow-2xl
        "
      >
        <h2 className="text-center text-2xl font-black text-white">
          {player.name}
        </h2>

        <p className="mt-2 text-center text-slate-400">
          Choose an action
        </p>

        <div className="mt-8 space-y-4">

          <button
  onClick={() => {
    setCaptain(player.id);
    onClose();
  }}
  className="
    w-full
    rounded-xl
    bg-yellow-400
    py-3
    font-bold
    text-slate-900
    transition
    hover:bg-yellow-300
  "
>
   Make Captain
</button>

          <button
  onClick={() => {
    setViceCaptain(player.id);
    onClose();
  }}
  className="
    w-full
    rounded-xl
    bg-sky-400
    py-3
    font-bold
    text-slate-900
    transition
    hover:bg-sky-300
  "
>
   Make Vice Captain
</button>

          <button
  onClick={() => {
    removePlayer(player.id);
    onClose();
  }}
  className="
    w-full
    rounded-xl
    bg-red-500
    py-3
    font-bold
    text-white
    transition
    hover:bg-red-400
  "
>
   Remove From XI
</button>

        </div>

        <button
          onClick={onClose}
          className="
            mt-6
            w-full
            rounded-xl
            border
            border-slate-700
            py-3
            font-bold
            text-white
            transition
            hover:bg-slate-800
          "
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default PlayingXIPlayerModal;