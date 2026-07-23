import * as PlayingXIContext from "../context/PlayingXIContext";
import PlayingXIGround from "../components/PlayingXIGround";

// If the context file doesn't export `usePlayingXI`, provide a safe fallback.
const usePlayingXI: () => {
  playingXI: Array<any>;
  isTeamValid: () => boolean;
} =
  (PlayingXIContext as any).usePlayingXI ?? (() => ({ playingXI: [], isTeamValid: () => false }));

function PlayingXI() {
  const { playingXI, isTeamValid } = usePlayingXI();

  const averageOverall =
  playingXI.length > 0
    ? Math.round(
        playingXI.reduce(
          (sum, player) => sum + player.overall,
          0
        ) / playingXI.length
      )
    : 0;

const teamRating =
  playingXI.length === 0
    ? 0
    : Math.min(
        100,
        averageOverall +
          (playingXI.length === 11 ? 5 : 0)
      );

  return (
    <main className="mx-auto min-h-screen w-11/12 max-w-7xl py-12">

      <div className="mb-10">
        <h1 className="text-4xl font-black text-white">
          Playing XI
        </h1>

        <p className="mt-2 text-slate-400">
          Build your strongest squad for every match.
        </p>
      </div>

      <div
        className="
          rounded-3xl
          border
          border-slate-700
          bg-gradient-to-b
          from-slate-900
          to-slate-950
          p-10
        "
      >

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-yellow-400">
              Squad
            </h2>

            <p className="text-slate-400">
              {playingXI.length} / 11 Players Selected
            </p>
          </div>

        </div>

        {playingXI.length === 0 ? (

          <div className="py-24 text-center">

            <h3 className="text-3xl font-bold text-white">
              No Players Selected
            </h3>

            <p className="mt-4 text-slate-400">
              Open your collection and start building your Playing XI.
            </p>

          </div>

        ) : (
          <>
            <div className="mb-10 grid gap-6 md:grid-cols-3">

  {/* Players Selected */}

  <div
    className="
      rounded-3xl
      border
      border-slate-700
      bg-gradient-to-br
      from-slate-900
      to-slate-950
      p-6
      shadow-xl
    "
  >
    <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
      Players Selected
    </p>

    <h2 className="mt-3 text-5xl font-black text-yellow-400">
      {playingXI.length}
      <span className="text-2xl text-slate-400">
        /11
      </span>
    </h2>
  </div>

  {/* Average Overall */}

  <div
    className="
      rounded-3xl
      border
      border-slate-700
      bg-gradient-to-br
      from-slate-900
      to-slate-950
      p-6
      shadow-xl
    "
  >
    <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
      Avg Overall
    </p>

    <h2 className="mt-3 text-5xl font-black text-sky-400">
      {averageOverall}
    </h2>
  </div>

  {/* Team Rating */}

<div
  className="
    rounded-3xl
    border
    border-slate-700
    bg-gradient-to-br
    from-slate-900
    to-slate-950
    p-6
    shadow-xl
  "
>
  <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
    Team Rating
  </p>

  <h2 className="mt-3 text-5xl font-black text-green-400">
    {teamRating}
  </h2>

  <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">

    <div
      className="
        h-full
        rounded-full
        bg-gradient-to-r
        from-green-400
        via-yellow-400
        to-red-500
        transition-all
        duration-500
      "
      style={{
        width: `${teamRating}%`,
      }}
    />

  </div>

</div>

</div>

            <PlayingXIGround />

<div className="mt-10 flex flex-col items-center">

  <button
    disabled={!isTeamValid()}
    className={`
      rounded-2xl
      px-12
      py-4
      text-xl
      font-bold
      transition-all
      duration-300

      ${
        isTeamValid()
          ? "bg-yellow-400 text-slate-900 hover:scale-105 hover:shadow-xl"
          : "cursor-not-allowed bg-slate-700 text-slate-400"
      }
    `}
  >
     Start Match
  </button>

  {!isTeamValid() && (
    <p className="mt-4 text-sm text-red-400">
      Select all 11 players before starting a match.
    </p>
  )}

</div>


          </>

        )}

      </div>

    </main>
  );
}

export default PlayingXI;