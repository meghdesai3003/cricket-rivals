import { useState } from "react";
import { usePlayingXI } from "../context/PlayingXIContext";
import { useNavigate } from "react-router-dom";

function MatchSetup() {
  const [difficulty, setDifficulty] = useState("Medium");
  const { playingXI } = usePlayingXI();
  const navigate = useNavigate();

const averageOverall =
  playingXI.length > 0
    ? Math.round(
        playingXI.reduce(
          (sum, player) => sum + player.overall,
          0
        ) / playingXI.length
      )
    : 0;
  

  return (
    <main className="mx-auto min-h-screen w-11/12 max-w-7xl py-12">

      {/* Heading */}

      <div className="mb-12">

        <h1 className="text-5xl font-black text-white">
          Match Setup
        </h1>

        <p className="mt-3 text-lg text-slate-400">
          Prepare your squad before entering the stadium.
        </p>

      </div>

      {/* Main Card */}

      <div
        className="
          rounded-[32px]
          border
          border-slate-700
          bg-gradient-to-b
          from-slate-900
          to-slate-950
          p-12
          shadow-2xl
        "
      >

        {/* Teams */}

        <div className="grid items-center gap-10 md:grid-cols-3">

          <div className="text-center">

            <div
              className="
                mx-auto
                flex
                h-36
                w-36
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-yellow-400
                to-yellow-600
                text-5xl
                font-black
                text-slate-900
              "
            >
              YOU
            </div>

            <h2 className="mt-5 text-2xl font-bold text-white">
              Your Playing XI
            </h2>

          </div>

          <div className="text-center">

            <h1 className="text-6xl font-black text-red-500">
              VS
            </h1>

          </div>

          <div className="text-center">

            <div
              className="
                mx-auto
                flex
                h-36
                w-36
                items-center
                justify-center
                rounded-full
                bg-gradient-to-br
                from-sky-400
                to-sky-600
                text-4xl
                font-black
                text-white
              "
            >
              AI
            </div>

            <h2 className="mt-5 text-2xl font-bold text-white">
              Computer
            </h2>

          </div>

        </div>

        {/* Difficulty */}

        <div className="mt-16">

          <h2 className="mb-6 text-2xl font-bold text-yellow-400">
            Difficulty
          </h2>

          <div className="flex flex-wrap gap-5">

            {["Easy", "Medium", "Hard"].map((level) => (

              <button
                key={level}
                onClick={() => setDifficulty(level)}
                className={`
                  rounded-2xl
                  px-8
                  py-4
                  text-lg
                  font-bold
                  transition-all
                  duration-300

                  ${
                    difficulty === level
                      ? "bg-yellow-400 text-slate-900"
                      : "bg-slate-800 text-white hover:bg-slate-700"
                  }
                `}
              >
                {level}
              </button>

            ))}

          </div>

        </div>

        {/* Match Type */}

        <div className="mt-14">

          <h2 className="mb-5 text-2xl font-bold text-yellow-400">
            Match Type
          </h2>

          <div
            className="
              inline-flex
              rounded-2xl
              bg-green-600
              px-8
              py-4
              text-xl
              font-bold
              text-white
            "
          >
            Classic Match
          </div>

        </div>

        {/* Match Summary */}

<div
  className="
    mt-16
    rounded-3xl
    border
    border-slate-700
    bg-slate-900/70
    p-8
  "
>

  <h2 className="mb-8 text-2xl font-bold text-yellow-400">
    Match Summary
  </h2>

  <div className="grid gap-6 md:grid-cols-4">

    {/* Players */}

    <div>
      <p className="text-sm uppercase tracking-widest text-slate-400">
        Playing XI
      </p>

      <h2 className="mt-2 text-4xl font-black text-white">
        {playingXI.length}/11
      </h2>
    </div>

    {/* Overall */}

    <div>
      <p className="text-sm uppercase tracking-widest text-slate-400">
        Avg Overall
      </p>

      <h2 className="mt-2 text-4xl font-black text-sky-400">
        {averageOverall}
      </h2>
    </div>

    {/* Difficulty */}

    <div>
      <p className="text-sm uppercase tracking-widest text-slate-400">
        Difficulty
      </p>

      <h2 className="mt-2 text-4xl font-black text-red-400">
        {difficulty}
      </h2>
    </div>

    {/* Rewards */}

    <div>
      <p className="text-sm uppercase tracking-widest text-slate-400">
        Win Rewards
      </p>

      <h2 className="mt-2 text-3xl font-black text-green-400">
        +250 🪙
      </h2>

      <p className="text-sm text-slate-400">
        +120 XP
      </p>
    </div>

  </div>

</div>

        {/* Start Button */}

        <div className="mt-20 text-center">

          <button
  onClick={() => navigate("/coin-toss")}
  className="
    rounded-3xl
    bg-gradient-to-r
    from-yellow-400
    to-yellow-500
    px-20
    py-5
    text-2xl
    font-black
    text-slate-900
    transition-all
    duration-300
    hover:-translate-y-1
    hover:scale-105
    active:scale-95
  "
>
   START MATCH
</button>

        </div>

      </div>

    </main>
  );
}

export default MatchSetup;