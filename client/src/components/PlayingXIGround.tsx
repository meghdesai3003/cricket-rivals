import { useState } from "react";
import type { Player } from "../types/Player";
import { usePlayingXI } from "../context/PlayingXIContext";
import PlayingXIPlayer from "./PlayingXIPlayer";
import PlayingXIPlayerModal from "./PlayingXIPlayerModal";

function PlayingXIGround() {
  const { playingXI } = usePlayingXI();

  const [selectedPlayer, setSelectedPlayer] =
    useState<Player | null>(null);

  // Premium 11-player formation
  const positions = [
    // Top
    { top: "10%", left: "50%" },

    // Second Row
    { top: "25%", left: "28%" },
    { top: "25%", left: "50%" },
    { top: "25%", left: "72%" },

    // Middle Row
    { top: "45%", left: "18%" },
    { top: "45%", left: "38%" },
    { top: "45%", left: "62%" },
    { top: "45%", left: "82%" },

    // Bottom Row
    { top: "68%", left: "30%" },
    { top: "68%", left: "50%" },
    { top: "68%", left: "70%" },
  ];

  return (
    <>
      <div
        className="
          relative
          h-[900px]
          w-full
          overflow-hidden
          rounded-full
          border
          border-green-700/30
          bg-gradient-to-b
          from-[#2ca84e]
          via-[#1d8c3c]
          to-[#156d2f]
          shadow-2xl

          transition-all
          duration-700
          hover:scale-[1.01]
        "
      >
        <div
  className="
    absolute
    inset-5

    rounded-full

    border-[6px]
    border-white/25
  "
/>
        {/* Pitch */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-[280px]
            w-[100px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-xl
            bg-[#d8c08c]
            shadow-xl
          "
        />

        {/* Crease */}

        <div className="absolute left-1/2 top-[36%] h-[2px] w-24 -translate-x-1/2 bg-white/70" />
        <div className="absolute left-1/2 top-[64%] h-[2px] w-24 -translate-x-1/2 bg-white/70" />

        {/* Players */}

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
                <div
                  onClick={() => setSelectedPlayer(player)}
                  className="
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:scale-105
                  "
                >
                  <div className="scale-[0.90] origin-center">
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

rounded-2xl

border-2
border-dashed
border-white/30

bg-black/20

text-xs
font-bold
tracking-widest
text-white/50

transition-all
duration-300

hover:border-yellow-400
hover:text-yellow-300
hover:bg-black/30
"
                >
                  EMPTY
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
    </>
  );
}

export default PlayingXIGround;