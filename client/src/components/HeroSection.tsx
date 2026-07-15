import PlayButton from "./PlayButton";

function HeroSection() {
  return (
    <section className="mx-auto mt-10 flex w-11/12 max-w-6xl flex-col items-center text-center">
      <h2 className="text-5xl font-black tracking-wide text-white">
        CRICKET RIVALS
      </h2>

      <p className="mt-4 text-xl text-yellow-400">
        Build • Collect • Compete
      </p>

      <p className="mt-6 max-w-2xl text-lg text-slate-400">
        Build your dream squad, unlock legendary players,
        compete with rivals, and become the ultimate
        Cricket Rivals champion.
      </p>

      <div className="mt-10">
        <PlayButton />
      </div>
    </section>
  );
}

export default HeroSection;