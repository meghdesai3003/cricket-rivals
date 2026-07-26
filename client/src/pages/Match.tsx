import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePlayingXI } from "../context/PlayingXIContext";

type Turn = "PLAYER" | "COMPUTER";
type Attribute = "Batting" | "Bowling" | "Fielding";
type RoundWinner = "PLAYER" | "COMPUTER" | "DRAW" | null;

function Match() {
  const { playingXI } = usePlayingXI();
  const location = useLocation();
  const navigate = useNavigate();

  const tossWinner =
    ((location.state as { tossWinner?: Turn } | null)?.tossWinner ??
      "PLAYER") as Turn;

  const computerXI = useMemo(
    () => [...playingXI].sort(() => Math.random() - 0.5).slice(0, 11),
    [playingXI]
  );

  const [selectedPlayer, setSelectedPlayer] = useState<any>(null);
  const [selectedAttribute, setSelectedAttribute] =
    useState<Attribute | null>(null);

  const [computerSelectedPlayer, setComputerSelectedPlayer] =
    useState<any>(null);
  const [computerSelectedAttribute, setComputerSelectedAttribute] =
    useState<Attribute | null>(null);

  const [computerThinking, setComputerThinking] = useState(false);
  const [computerStartedRound, setComputerStartedRound] =
    useState(false);

  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const [roundWinner, setRoundWinner] = useState<RoundWinner>(null);

  const [currentTurn, setCurrentTurn] = useState<Turn>(tossWinner);
  const [roundStarter, setRoundStarter] = useState<Turn>(tossWinner);

  const [round, setRound] = useState(1);
  const [matchFinished, setMatchFinished] = useState(false);

  const [rewardCoins, setRewardCoins] = useState(0);
  const [rewardXP, setRewardXP] = useState(0);

  useEffect(() => {
    if (matchFinished || roundWinner) return;
    if (currentTurn !== "COMPUTER") return;
    if (computerSelectedPlayer) return;
    if (computerXI.length === 0) return;

    const randomPlayer =
      computerXI[Math.floor(Math.random() * computerXI.length)];

    const attributes: Attribute[] = [
      "Batting",
      "Bowling",
      "Fielding",
    ];

    const randomAttribute =
      attributes[Math.floor(Math.random() * attributes.length)];

    setComputerThinking(true);

    const timer = window.setTimeout(() => {
      setComputerStartedRound(true);
      setComputerSelectedPlayer(randomPlayer);
      setComputerSelectedAttribute(randomAttribute);
      setComputerThinking(false);
      setCurrentTurn("PLAYER");
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [
    computerXI,
    computerSelectedPlayer,
    currentTurn,
    matchFinished,
    roundWinner,
  ]);

  useEffect(() => {
    if (!matchFinished) return;

    if (playerScore > computerScore) {
      setRewardCoins(250);
      setRewardXP(120);
    } else if (computerScore > playerScore) {
      setRewardCoins(100);
      setRewardXP(50);
    } else {
      setRewardCoins(150);
      setRewardXP(80);
    }
  }, [matchFinished, playerScore, computerScore]);

  function startNextRound(starter: Turn) {
    if (round >= 11) {
      setMatchFinished(true);
      return;
    }

    setRound((prev) => prev + 1);
    setSelectedPlayer(null);
    setSelectedAttribute(null);
    setComputerSelectedPlayer(null);
    setComputerSelectedAttribute(null);
    setComputerStartedRound(false);
    setComputerThinking(false);
    setRoundWinner(null);
    setCurrentTurn(starter);
    setRoundStarter(starter);
  }

  function comparePlayers(
    player: any,
    computer: any,
    attribute: Attribute
  ) {
    if (!player || !computer) return;
    if (matchFinished || roundWinner) return;

    const playerValue =
      attribute === "Batting"
        ? player.batting
        : attribute === "Bowling"
        ? player.bowling
        : player.fielding;

    const computerValue =
      attribute === "Batting"
        ? computer.batting
        : attribute === "Bowling"
        ? computer.bowling
        : computer.fielding;

    let nextStarter: Turn = roundStarter;

    if (playerValue > computerValue) {
      setPlayerScore((prev) => prev + 1);
      setRoundWinner("PLAYER");
      nextStarter = "PLAYER";
    } else if (computerValue > playerValue) {
      setComputerScore((prev) => prev + 1);
      setRoundWinner("COMPUTER");
      nextStarter = "COMPUTER";
    } else {
      setRoundWinner("DRAW");
      nextStarter = roundStarter;
    }

    window.setTimeout(() => {
      startNextRound(nextStarter);
    }, 3000);
  }

  function handleAttributeChoice(attribute: Attribute) {
    if (matchFinished || roundWinner || !selectedPlayer) return;
    if (selectedAttribute) return;
    if (computerThinking) return;

    setSelectedAttribute(attribute);

    // Computer already started the round, so compare against the stored card.
    if (computerSelectedPlayer && computerSelectedAttribute) {
      if (attribute !== computerSelectedAttribute) return;

      comparePlayers(selectedPlayer, computerSelectedPlayer, attribute);
      return;
    }

    // Player starts the round, so the computer chooses one card once.
    setComputerStartedRound(false);
    setComputerThinking(true);

    const randomPlayer =
      computerXI[Math.floor(Math.random() * computerXI.length)];

    const timer = window.setTimeout(() => {
      setComputerSelectedPlayer(randomPlayer);
      setComputerSelectedAttribute(attribute);
      setComputerThinking(false);
      comparePlayers(selectedPlayer, randomPlayer, attribute);
    }, 1000);

    return () => window.clearTimeout(timer);
  }

  function handlePlayAgain() {
    navigate("/match-setup");
  }

  function handleBackHome() {
    navigate("/");
  }

  const roundResultText =
    roundWinner === "PLAYER"
      ? "You Win the Round!"
      : roundWinner === "COMPUTER"
      ? "Computer Wins the Round!"
      : "Round Draw";

  const computerChosenValue =
    computerSelectedPlayer && computerSelectedAttribute
      ? computerSelectedAttribute === "Batting"
        ? computerSelectedPlayer.batting
        : computerSelectedAttribute === "Bowling"
        ? computerSelectedPlayer.bowling
        : computerSelectedPlayer.fielding
      : null;

  const matchOutcome =
    playerScore > computerScore
      ? "Victory"
      : computerScore > playerScore
      ? "Defeat"
      : "Draw";

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black">
      {matchFinished && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md">
          <div className="w-[700px] rounded-3xl border border-yellow-400 bg-slate-900 p-12 text-center shadow-2xl">
            <h1 className="text-6xl font-black text-yellow-400">
              Match Complete
            </h1>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6">
                <p className="text-sm uppercase tracking-widest text-slate-400">
                  You
                </p>
                <h2 className="mt-3 text-6xl font-black text-green-400">
                  {playerScore}
                </h2>
              </div>

              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6">
                <p className="text-sm uppercase tracking-widest text-slate-400">
                  Computer
                </p>
                <h2 className="mt-3 text-6xl font-black text-red-400">
                  {computerScore}
                </h2>
              </div>

              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-6">
                <p className="text-sm uppercase tracking-widest text-slate-400">
                  Rewards
                </p>
                <h2 className="mt-3 text-4xl font-black text-yellow-400">
                  +{rewardCoins} 🪙
                </h2>
                <p className="mt-2 text-lg font-bold text-slate-300">
                  +{rewardXP} XP
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-5xl font-black text-white">
                {matchOutcome === "Victory"
                  ? "🏆 VICTORY"
                  : matchOutcome === "Defeat"
                  ? "💀 DEFEAT"
                  : "🤝 DRAW"}
              </h2>

              <p className="mt-4 text-slate-400">
                Your match rewards have been calculated.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-4 md:flex-row md:justify-center">
              <button
                onClick={handlePlayAgain}
                className="
                  rounded-2xl
                  bg-green-500
                  px-10
                  py-4
                  text-xl
                  font-black
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  active:scale-95
                "
              >
                Play Again
              </button>

              <button
                onClick={handleBackHome}
                className="
                  rounded-2xl
                  bg-slate-700
                  px-10
                  py-4
                  text-xl
                  font-black
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  active:scale-95
                "
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mx-auto flex w-11/12 max-w-7xl items-center justify-between py-8">
        <div>
          <h1 className="text-4xl font-black text-white">Match</h1>
          <p className="text-slate-400">Classic Match vs Computer</p>
        </div>

        <div className="rounded-2xl bg-slate-800 px-6 py-3">
          <p className="text-sm text-slate-400">Round</p>
          <h2 className="text-3xl font-black text-yellow-400">
            Round {round} / 11
          </h2>
        </div>
      </div>

      {/* Scoreboard */}
      <div className="mx-auto flex w-11/12 max-w-7xl justify-between rounded-3xl border border-slate-700 bg-slate-900 p-8">
        <div className="text-center">
          <p className="text-slate-400">YOU</p>
          <h1 className="text-6xl font-black text-green-400">
            {playerScore}
          </h1>
        </div>

        <div className="flex items-center">
          <h2 className="text-5xl font-black text-white">VS</h2>
        </div>

        <div className="text-center">
          <p className="text-slate-400">COMPUTER</p>
          <h1 className="text-6xl font-black text-red-400">
            {computerScore}
          </h1>
        </div>
      </div>

      {/* Turn Banner */}
      <div className="mx-auto mt-8 w-11/12 max-w-7xl">
        <div className="rounded-2xl border border-yellow-400 bg-yellow-400/10 p-5 text-center">
          <h2 className="text-2xl font-black text-yellow-400">
            {computerThinking
              ? "Computer is choosing..."
              : currentTurn === "PLAYER"
              ? "Your Turn"
              : "Computer's Turn"}
          </h2>
        </div>
      </div>

      {/* Opponent block */}
      {computerSelectedPlayer && (
        <div className="mx-auto mt-8 w-11/12 max-w-7xl rounded-3xl border border-red-500 bg-slate-900 p-8">
          <h2 className="mb-5 text-2xl font-black text-red-400">
            {computerStartedRound
              ? "Computer Played First"
              : "Computer Selected"}
          </h2>

          <div className="flex items-center gap-8">
            <img
              src={computerSelectedPlayer.image}
              alt={computerSelectedPlayer.name}
              className="h-40 object-contain"
            />

            <div>
              <h1 className="text-4xl font-black text-white">
                {computerSelectedPlayer.name}
              </h1>

              <p className="mt-3 text-yellow-400">
                OVR {computerSelectedPlayer.overall}
              </p>

              <div className="mt-5 rounded-2xl bg-slate-800 p-5">
                <p className="text-sm uppercase tracking-widest text-slate-400">
                  Computer chose
                </p>

                <div className="mt-2 flex items-end gap-4">
                  <h2 className="text-3xl font-black text-red-400">
                    {computerSelectedAttribute}
                  </h2>
                  <span className="text-5xl font-black text-white">
                    {computerChosenValue}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Playing XI */}
      <div className="mx-auto mt-8 w-11/12 max-w-7xl">
        {selectedPlayer && (
          <div className="mb-10 rounded-3xl border border-yellow-400 bg-slate-900 p-8">
            <h2 className="mb-6 text-2xl font-black text-yellow-400">
              Selected Player
            </h2>

            <div className="flex items-center gap-8">
              <img
                src={selectedPlayer.image}
                alt={selectedPlayer.name}
                className="h-44 object-contain"
              />

              <div>
                <h1 className="text-4xl font-black text-white">
                  {selectedPlayer.name}
                </h1>

                <p className="mt-2 text-xl text-yellow-400">
                  OVR {selectedPlayer.overall}
                </p>

                {computerSelectedAttribute ? (
                  <div className="mt-5 rounded-2xl bg-red-500/10 p-4">
                    <p className="text-sm uppercase tracking-widest text-red-300">
                      Computer selected
                    </p>

                    <h2 className="text-2xl font-black text-red-400">
                      {computerSelectedAttribute}
                    </h2>

                    <p className="mt-2 text-slate-300">
                      You must respond using this attribute.
                    </p>
                  </div>
                ) : (
                  <p className="mt-5 text-slate-300">
                    Choose one attribute.
                  </p>
                )}

                <div className="mt-8 grid grid-cols-3 gap-5">
                  <button
                    onClick={() => handleAttributeChoice("Batting")}
                    disabled={
                      matchFinished ||
                      roundWinner !== null ||
                      selectedAttribute !== null ||
                      computerThinking ||
                      (computerSelectedAttribute !== null &&
                        computerSelectedAttribute !== "Batting")
                    }
                    className={`
                      rounded-2xl
                      border
                      p-5
                      transition-all
                      duration-300

                      ${
                        selectedAttribute === "Batting"
                          ? "border-yellow-400 bg-yellow-400/20 scale-105"
                          : "border-red-500 bg-gradient-to-b from-red-500/20 to-red-900/20 hover:border-red-400 hover:scale-105"
                      }

                      ${
                        computerSelectedAttribute !== null &&
                        computerSelectedAttribute !== "Batting"
                          ? "opacity-40 cursor-not-allowed"
                          : ""
                      }
                    `}
                  >
                    <p className="text-sm tracking-widest text-red-300">
                      BATTING
                    </p>
                    <h2 className="mt-2 text-5xl font-black text-white">
                      {selectedPlayer.batting}
                    </h2>
                  </button>

                  <button
                    onClick={() => handleAttributeChoice("Bowling")}
                    disabled={
                      matchFinished ||
                      roundWinner !== null ||
                      selectedAttribute !== null ||
                      computerThinking ||
                      (computerSelectedAttribute !== null &&
                        computerSelectedAttribute !== "Bowling")
                    }
                    className={`
                      rounded-2xl
                      border
                      p-5
                      transition-all
                      duration-300

                      ${
                        selectedAttribute === "Bowling"
                          ? "border-yellow-400 bg-yellow-400/20 scale-105"
                          : "border-sky-500 bg-gradient-to-b from-sky-500/20 to-sky-900/20 hover:border-sky-400 hover:scale-105"
                      }

                      ${
                        computerSelectedAttribute !== null &&
                        computerSelectedAttribute !== "Bowling"
                          ? "opacity-40 cursor-not-allowed"
                          : ""
                      }
                    `}
                  >
                    <p className="text-sm tracking-widest text-sky-300">
                      BOWLING
                    </p>
                    <h2 className="mt-2 text-5xl font-black text-white">
                      {selectedPlayer.bowling}
                    </h2>
                  </button>

                  <button
                    onClick={() => handleAttributeChoice("Fielding")}
                    disabled={
                      matchFinished ||
                      roundWinner !== null ||
                      selectedAttribute !== null ||
                      computerThinking ||
                      (computerSelectedAttribute !== null &&
                        computerSelectedAttribute !== "Fielding")
                    }
                    className={`
                      rounded-2xl
                      border
                      p-5
                      transition-all
                      duration-300

                      ${
                        selectedAttribute === "Fielding"
                          ? "border-yellow-400 bg-yellow-400/20 scale-105"
                          : "border-green-500 bg-gradient-to-b from-green-500/20 to-green-900/20 hover:border-green-400 hover:scale-105"
                      }

                      ${
                        computerSelectedAttribute !== null &&
                        computerSelectedAttribute !== "Fielding"
                          ? "opacity-40 cursor-not-allowed"
                          : ""
                      }
                    `}
                  >
                    <p className="text-sm tracking-widest text-green-300">
                      FIELDING
                    </p>
                    <h2 className="mt-2 text-5xl font-black text-white">
                      {selectedPlayer.fielding}
                    </h2>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        

        {roundWinner && (
          <div className="mt-8 rounded-3xl border border-yellow-400 bg-slate-900 p-8 text-center">
            <h2 className="text-4xl font-black text-yellow-400">
              {roundResultText}
            </h2>
          </div>
        )}

        <h2 className="mb-8 text-3xl font-black text-yellow-400">
          Select Your Player
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
          {playingXI.map((player) => (
            <button
              key={player.id}
              onClick={() => {
                if (
                  matchFinished ||
                  roundWinner ||
                  currentTurn !== "PLAYER" ||
                  computerThinking ||
                  selectedAttribute !== null
                ) {
                  return;
                }
                setSelectedPlayer(player);
              }}
              disabled={
                matchFinished ||
                roundWinner !== null ||
                currentTurn !== "PLAYER" ||
                computerThinking ||
                selectedAttribute !== null
              }
              className={`
                rounded-3xl
                border
                p-4
                transition-all
                duration-300

                ${
                  selectedPlayer?.id === player.id
                    ? "border-yellow-400 bg-slate-800 scale-105 shadow-yellow-400/30 shadow-xl"
                    : "border-slate-700 bg-slate-900 hover:-translate-y-2 hover:border-yellow-400"
                }

                ${
                  currentTurn === "COMPUTER" || matchFinished || roundWinner
                    ? "opacity-40 cursor-not-allowed"
                    : ""
                }
              `}
            >
              <img
                src={player.image}
                alt={player.name}
                className="mx-auto h-36 object-contain"
              />

              <h2 className="mt-3 truncate text-center font-bold text-white">
                {player.name}
              </h2>

              <p className="text-center text-yellow-400">
                OVR {player.overall}
              </p>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Match;