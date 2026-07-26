import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CoinToss() {
  const navigate = useNavigate();

  const [userChoice, setUserChoice] = useState<
    "Heads" | "Tails" | null
  >(null);

  const [isFlipping, setIsFlipping] = useState(false);

  const [coinResult, setCoinResult] = useState<
    "Heads" | "Tails" | null
  >(null);

  const [userWon, setUserWon] = useState(false);

  function tossCoin() {
    if (!userChoice) return;

    setIsFlipping(true);
    setCoinResult(null);

    setTimeout(() => {
      const result =
        Math.random() < 0.5 ? "Heads" : "Tails";

      setCoinResult(result);

      setUserWon(result === userChoice);

      setIsFlipping(false);
    }, 2000);
  }

  function continueToMatch() {
  navigate("/match", {
    state: {
      tossWinner: userWon ? "PLAYER" : "COMPUTER",
    },
  });
}

  return (
    <main className="mx-auto flex min-h-screen w-11/12 max-w-6xl flex-col items-center justify-center py-12">

      {/* Heading */}

      <h1 className="text-5xl font-black text-white">
        Coin Toss
      </h1>

      <p className="mt-3 text-lg text-slate-400">
        Choose Heads or Tails
      </p>

      {/* Coin */}

      <div
        className={`
          mt-16
          flex
          h-56
          w-56
          items-center
          justify-center
          rounded-full
          border-8
          border-yellow-400
          bg-gradient-to-br
          from-yellow-300
          to-yellow-500
          text-6xl
          font-black
          text-slate-900
          shadow-2xl
          transition-all
          duration-1000

          ${isFlipping ? "animate-spin" : ""}
        `}
      >
        {coinResult ?? "₹"}
      </div>

      {/* Choice Buttons */}

      {!coinResult && (
        <div className="mt-16 flex gap-8">

          <button
            onClick={() => setUserChoice("Heads")}
            className={`
              rounded-2xl
              px-10
              py-4
              text-xl
              font-bold
              transition-all
              duration-300

              ${
                userChoice === "Heads"
                  ? "bg-yellow-400 text-slate-900"
                  : "bg-slate-800 text-white hover:bg-slate-700"
              }
            `}
          >
            Heads
          </button>

          <button
            onClick={() => setUserChoice("Tails")}
            className={`
              rounded-2xl
              px-10
              py-4
              text-xl
              font-bold
              transition-all
              duration-300

              ${
                userChoice === "Tails"
                  ? "bg-yellow-400 text-slate-900"
                  : "bg-slate-800 text-white hover:bg-slate-700"
              }
            `}
          >
            Tails
          </button>

        </div>
      )}

      {/* Toss Button */}

      {!coinResult && (
        <button
          disabled={!userChoice || isFlipping}
          onClick={tossCoin}
          className={`
            mt-16
            rounded-3xl
            px-16
            py-5
            text-2xl
            font-black
            transition-all
            duration-300

            ${
              userChoice && !isFlipping
                ? "bg-green-500 text-white hover:scale-105 active:scale-95"
                : "cursor-not-allowed bg-slate-700 text-slate-400"
            }
          `}
        >
          {isFlipping ? "Flipping..." : "Toss Coin"}
        </button>
      )}

      {/* Toss Result */}

      {coinResult && (
        <div className="mt-16 text-center">

          <h2 className="text-5xl font-black text-yellow-400">
            {coinResult}
          </h2>

          <p className="mt-6 text-3xl font-bold text-white">
            {userWon
              ? "🎉 You won the toss!"
              : "🤖 Computer won the toss!"}
          </p>

          <p className="mt-4 text-lg text-slate-400">
            {userWon
              ? "You will get the first turn in the match."
              : "Computer will get the first turn in the match."}
          </p>

          <button
            onClick={continueToMatch}
            className="
              mt-12
              rounded-3xl
              bg-gradient-to-r
              from-green-500
              to-green-600
              px-16
              py-5
              text-2xl
              font-black
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-105
              active:scale-95
            "
          >
            Continue
          </button>

        </div>
      )}

    </main>
  );
}

export default CoinToss;