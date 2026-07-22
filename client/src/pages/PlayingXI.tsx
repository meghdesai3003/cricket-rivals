import * as PlayingXIContext from "../context/PlayingXIContext";
import PlayingXIGround from "../components/PlayingXIGround";

// If the context file doesn't export `usePlayingXI`, provide a safe fallback.
const usePlayingXI: () => { playingXI: Array<any> } =
  (PlayingXIContext as any).usePlayingXI ?? (() => ({ playingXI: [] }));

function PlayingXI() {
  const { playingXI } = usePlayingXI();

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

          <PlayingXIGround />

        )}

      </div>

    </main>
  );
}

export default PlayingXI;