import { usePlayingXI } from "../context/PlayingXIContext";
import { useState } from "react";


function Match() {
  const { playingXI } = usePlayingXI();
  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">

      {/* Header */}

      <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between py-8">

        <div>

          <h1 className="text-4xl font-black text-white">
            Match
          </h1>

          <p className="text-slate-400">
            Classic Match vs Computer
          </p>

        </div>

        <div className="rounded-2xl bg-slate-800 px-6 py-3">

          <p className="text-sm text-slate-400">
            Round
          </p>

          <h2 className="text-3xl font-black text-yellow-400">
            1 / 11
          </h2>

        </div>

      </div>

      {/* Scoreboard */}

      <div
        className="
          mx-auto
          flex
          w-11/12
          max-w-7xl
          justify-between
          rounded-3xl
          border
          border-slate-700
          bg-slate-900
          p-8
        "
      >

        <div className="text-center">

          <p className="text-slate-400">
            YOU
          </p>

          <h1 className="text-6xl font-black text-green-400">
            0
          </h1>

        </div>

        <div className="flex items-center">

          <h2 className="text-5xl font-black text-white">
            VS
          </h2>

        </div>

        <div className="text-center">

          <p className="text-slate-400">
            COMPUTER
          </p>

          <h1 className="text-6xl font-black text-red-400">
            0
          </h1>

        </div>

      </div>

      {/* Playing XI */}

      <div className="mx-auto mt-10 w-11/12 max-w-7xl">

      {selectedPlayer && (

  <div
    className="
      mb-10
      rounded-3xl
      border
      border-yellow-400
      bg-slate-900
      p-8
    "
  >

    <h2 className="mb-6 text-2xl font-black text-yellow-400">
      Selected Player
    </h2>

    <div className="flex items-center gap-8">

      <img
        src={selectedPlayer.image}
        alt={selectedPlayer.name}
        className="h-44 object-contain"
      />

      <div>

        <h1 className="text-4xl font-black text-white">
          {selectedPlayer.name}
        </h1>

        <p className="mt-2 text-xl text-yellow-400">
          OVR {selectedPlayer.overall}
        </p>

        <div className="mt-8 grid grid-cols-3 gap-5">

  {/* Batting */}

  <div
    className="
      rounded-2xl
      border
      border-red-500

      bg-gradient-to-b
      from-red-500/20
      to-red-900/20

      p-5
    "
  >

    <p className="text-sm tracking-widest text-red-300">
      BATTING
    </p>

    <h2 className="mt-2 text-5xl font-black text-white">
      {selectedPlayer.batting}
    </h2>

  </div>

  {/* Bowling */}

  <div
    className="
      rounded-2xl
      border
      border-sky-500

      bg-gradient-to-b
      from-sky-500/20
      to-sky-900/20

      p-5
    "
  >

    <p className="text-sm tracking-widest text-sky-300">
      BOWLING
    </p>

    <h2 className="mt-2 text-5xl font-black text-white">
      {selectedPlayer.bowling}
    </h2>

  </div>

  {/* Fielding */}

  <div
    className="
      rounded-2xl
      border
      border-green-500

      bg-gradient-to-b
      from-green-500/20
      to-green-900/20

      p-5
    "
  >

    <p className="text-sm tracking-widest text-green-300">
      FIELDING
    </p>

    <h2 className="mt-2 text-5xl font-black text-white">
      {selectedPlayer.fielding}
    </h2>

  </div>

</div>
        

      </div>

    </div>

  </div>

)}

        <h2 className="mb-8 text-3xl font-black text-yellow-400">
          Select Your Player
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">

          {playingXI.map((player) => (

            <button
  key={player.id}
  onClick={() => setSelectedPlayer(player)}
  className={`
    rounded-3xl
    border
    p-4
    transition-all
    duration-300

    ${
      selectedPlayer?.id === player.id
        ? "border-yellow-400 bg-slate-800 scale-105 shadow-yellow-400/30 shadow-xl"
        : "border-slate-700 bg-slate-900 hover:-translate-y-2 hover:border-yellow-400"
    }
  `}
>

              <img
                src={player.image}
                alt={player.name}
                className="mx-auto h-36 object-contain"
              />

              <h2 className="mt-3 truncate text-center font-bold text-white">
                {player.name}
              </h2>

              <p className="text-center text-yellow-400">
                OVR {player.overall}
              </p>

            </button>

          ))}

        </div>

      </div>

    </main>
  );
}

export default Match;