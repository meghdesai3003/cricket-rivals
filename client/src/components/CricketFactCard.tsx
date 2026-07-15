import GlassCard from "./GlassCard";

function CricketFactCard() {
  return (
    <GlassCard>
      <h3 className="text-2xl font-bold text-white">
        Cricket Fact
      </h3>

      <p className="mt-5 leading-7 text-slate-300">
        Sachin Tendulkar is the only player in cricket history to
        score 100 international centuries.
      </p>

      <p className="mt-8 text-sm text-yellow-400">
        New fact every day
      </p>
    </GlassCard>
  );
}

export default CricketFactCard;