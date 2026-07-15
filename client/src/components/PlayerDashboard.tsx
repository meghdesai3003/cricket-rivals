import GlassCard from "./GlassCard";

function PlayerDashboard() {
  const stats = [
    {
      title: "Coins",
      value: "5,000",
    },
    {
      title: "Level",
      value: "8",
    },
    {
      title: "Collection",
      value: "15 / 200",
    },
    {
      title: "Win Rate",
      value: "76%",
    },
  ];

  return (
    <section className="mx-auto mt-12 w-11/12 max-w-6xl">
      <GlassCard>
        <h2 className="mb-8 text-2xl font-bold text-white">
          Player Dashboard
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="
                rounded-2xl
                border
                border-white/5
                bg-slate-900/60
                p-6
                text-center
                transition-all
                duration-300
                hover:scale-105
                hover:border-yellow-400/30
              "
            >
              <p className="text-sm text-slate-400">
                {stat.title}
              </p>

              <p className="mt-3 text-3xl font-bold text-yellow-400">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
}

export default PlayerDashboard;