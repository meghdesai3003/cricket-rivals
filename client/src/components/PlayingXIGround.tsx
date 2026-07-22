import { usePlayingXI } from "../context/PlayingXIContext";
import PlayingXIPlayer from "./PlayingXIPlayer";
import { useState } from "react";
import type { Player } from "../types/Player";
import PlayingXIPlayerModal from "./PlayingXIPlayerModal";

function PlayingXIGround() {
  const { playingXI } = usePlayingXI();
  const [selectedPlayer, setSelectedPlayer] =
  useState<Player | null>(null);
  const positions = [
  { top: "8%", left: "50%" },   // Opener 1

  { top: "22%", left: "28%" },  // Opener 2
  { top: "22%", left: "72%" },  // Opener 3

  { top: "38%", left: "50%" },  // All-rounder

  { top: "56%", left: "18%" },  // Bowler
  { top: "56%", left: "40%" },  // WK
  { top: "56%", left: "62%" },  // Bowler
  { top: "56%", left: "84%" },  // Bowler

  { top: "76%", left: "30%" },  // Bowler
  { top: "76%", left: "50%" },  // Bowler
  { top: "76%", left: "70%" },  // Bowler
];

  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-green-700/40
        bg-gradient-to-b
        from-green-900
        via-green-800
        to-green-950
        p-16
        shadow-2xl
      "
    >
      {/* Field */}

      <div
        className="
          relative
          mx-auto
          flex
          h-[900px]
          w-[700px]
          items-center
          justify-center
          rounded-full
          border-[8px]
          border-green-300/20
          bg-gradient-to-b
          from-green-700
          via-green-800
          to-green-900
        "
      >
        {positions.map((position, index) => {
  const player = playingXI[index];

  return (
    <div
      key={index}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      {player ? (

        <div className="flex flex-col items-center">

          <div
  onClick={() => setSelectedPlayer(player)}
  className="cursor-pointer"
>
  <PlayingXIPlayer player={player} />
</div>

        </div>

      ) : (

        <div
          className="
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-full
            border-2
            border-dashed
            border-white/40
            text-3xl
            text-white/40
          "
        >
          +
        </div>

      )}
    </div>
    
  );
})}
      </div>
<PlayingXIPlayerModal
  player={selectedPlayer}
  onClose={() => setSelectedPlayer(null)}
/>
    </div>
  );
}

export default PlayingXIGround;