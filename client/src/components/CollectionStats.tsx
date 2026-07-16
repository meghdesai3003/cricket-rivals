import { players } from "../data/players";

function CollectionStats() {
  const totalPlayers = 200;
  const collectedPlayers = players.length;

  const standardCount = players.filter(
    (player) => player.rarity === "Standard"
  ).length;

  const eliteCount = players.filter(
    (player) => player.rarity === "Elite"
  ).length;

  const goldCount = players.filter(
    (player) => player.rarity === "Gold"
  ).length;

  const progress = (collectedPlayers / totalPlayers) * 100;

  return (
    <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">

      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">

        {/* Collection Progress */}
        <div className="flex-1">

          <h2 className="text-2xl font-bold text-white">
            Collection Progress
          </h2>

          <p className="mt-2 text-slate-400">
            {collectedPlayers} / {totalPlayers} Players Collected
          </p>

          <div className="mt-5 h-4 overflow-hidden rounded-full bg-slate-800">

            <div
              className="h-full rounded-full bg-yellow-400 transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <p className="mt-2 text-sm text-slate-400">
            {progress.toFixed(1)}% Complete
          </p>

        </div>

        {/* Rarity Stats */}
        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-2xl bg-slate-800 p-5 text-center">

            <p className="text-sm text-slate-400">
              Standard
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              {standardCount}
            </h3>

          </div>

          <div className="rounded-2xl bg-sky-950 p-5 text-center">

            <p className="text-sm text-sky-300">
              Elite
            </p>

            <h3 className="mt-2 text-3xl font-bold text-sky-300">
              {eliteCount}
            </h3>

          </div>

          <div className="rounded-2xl bg-yellow-950 p-5 text-center">

            <p className="text-sm text-yellow-300">
              Gold
            </p>

            <h3 className="mt-2 text-3xl font-bold text-yellow-300">
              {goldCount}
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}

export default CollectionStats;""