import GlassCard from "./GlassCard";

function DailyRewardCard() {
  return (
    <GlassCard>
      <h3 className="text-2xl font-bold text-white">
        Daily Reward
      </h3>

      <p className="mt-3 text-slate-400">
        Claim today's reward and continue your streak.
      </p>

      <button
        className="
          mt-8
          w-full
          rounded-xl
          bg-yellow-400
          py-3
          font-bold
          text-slate-900
          transition-all
          duration-300
          hover:scale-[1.02]
          hover:bg-yellow-300
        "
      >
        Claim Reward
      </button>
    </GlassCard>
  );
}

export default DailyRewardCard;