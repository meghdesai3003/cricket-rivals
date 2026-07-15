function DailyRewardCard() {
  return (
    <section className="mx-auto mt-8 w-11/12 max-w-4xl rounded-2xl bg-slate-800 p-6 shadow-xl">
      <h2 className="text-2xl font-bold">
        Daily Reward
      </h2>

      <p className="mt-3 text-gray-300">
        Come back every day to earn exciting rewards and grow your collection.
      </p>

      <button
        className="
          mt-6
          w-full
          rounded-xl
          bg-yellow-400
          py-3
          font-bold
          text-slate-900
          transition-all
          duration-300
          hover:bg-yellow-300
          hover:scale-[1.02]
        "
      >
        Claim Reward
      </button>
    </section>
  );
}

export default DailyRewardCard;