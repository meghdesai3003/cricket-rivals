import { useMemo, useState } from "react";

import type { Pack } from "../data/packs";
import { generatePack } from "../utils/generatePack";

import AnimatedPack from "./AnimatedPack";
import RevealCard from "./RevealCard";
import { useCollection } from "../context/CollectionContext";
import { useCoins } from "../context/CoinContext";

interface PackOpeningModalProps {
  pack: Pack | null;
  onClose: () => void;
}

function PackOpeningModal({
  pack,
  onClose,
}: PackOpeningModalProps) {
  if (!pack) return null;

  const { addPlayers, collection } = useCollection();
  const { addCoins } = useCoins();

  const glow = useMemo(() => {
    switch (pack.name) {
      case "Gold Pack":
        return {
          ring: "ring-yellow-400/70",
          shadow: "shadow-yellow-500/60",
          button: "bg-yellow-400 hover:bg-yellow-300",
          background:
            "from-yellow-500/20 via-yellow-300/5 to-transparent",
        };

      case "Elite Pack":
        return {
          ring: "ring-sky-400/70",
          shadow: "shadow-sky-500/60",
          button: "bg-sky-400 hover:bg-sky-300",
          background:
            "from-sky-500/20 via-sky-300/5 to-transparent",
        };

      default:
        return {
          ring: "ring-slate-400/60",
          shadow: "shadow-slate-400/50",
          button: "bg-slate-300 hover:bg-white",
          background:
            "from-slate-400/20 via-slate-300/5 to-transparent",
        };
    }
  }, [pack]);

  const borderColor =
    pack.name === "Gold Pack"
      ? "border-yellow-400"
      : pack.name === "Elite Pack"
      ? "border-sky-400"
      : "border-slate-500";

  const [isOpening, setIsOpening] = useState(false);

  const [showFlash, setShowFlash] = useState(false);

  const [showCards, setShowCards] = useState(false);

  const [rewardPopup, setRewardPopup] = useState<number | null>(null);

  const [flyCoins, setFlyCoins] = useState(false);

  const revealedPlayers = useMemo(() => {
    return generatePack(pack.name);
  }, [pack]);

const calculateDuplicateReward = () => {
  let reward = 0;

  revealedPlayers.forEach((player) => {
    const alreadyOwned = collection.find(
      (p) => p.id === player.id
    );

    if (!alreadyOwned) return;

    switch (player.rarity) {
      case "Gold":
        reward += 300;
        break;

      case "Elite":
        reward += 150;
        break;

      default:
        reward += 50;
    }
  });

  return reward;
};

const handleOpen = () => {
  if (isOpening) return;

  setIsOpening(true);

  // Calculate duplicate reward
  const reward = calculateDuplicateReward();

  // Award duplicate coins
if (reward > 0) {
  addCoins(reward);
}

  // Save ALL opened players
  addPlayers(revealedPlayers);

  // Opening animation
  setTimeout(() => {
    setShowFlash(true);
  }, 900);

  setTimeout(() => {
  setShowFlash(false);
  setShowCards(true);

  // Wait until all cards finish flipping
  setTimeout(() => {
    if (reward > 0) {
      setRewardPopup(reward);

setFlyCoins(true);

setTimeout(() => {
    setFlyCoins(false);
},900);

setTimeout(() => {
    setRewardPopup(null);
},2500);
    }
  }, revealedPlayers.length * 400 + 700);

}, 1400);
};

    return (
    <div
      onClick={onClose}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/80
        backdrop-blur-md
        animate-fadeIn
        p-6
      "
    >
      {/* Flash Overlay */}

      {showFlash && (
        <div
          className="
            absolute
            inset-0
            z-[60]
            bg-white
            opacity-90
          "
        />
      )}

      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative
          w-full
          max-w-6xl
          overflow-hidden
          rounded-3xl
          border-2
          ${borderColor}
          bg-gradient-to-b
          from-slate-900
          via-slate-900
          to-slate-950
          p-8
          shadow-2xl
          ${glow.shadow}
          animate-scaleIn
        `}
      >
        {/* Background Glow */}

        <div
          className={`
            absolute
            inset-0
            bg-gradient-to-b
            ${glow.background}
            opacity-70
            blur-3xl
            pointer-events-none
          `}
        />

        {/* Close Button */}

        <button
          onClick={onClose}
          className="
            absolute
            right-5
            top-5
            z-30
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-slate-800
            text-2xl
            font-bold
            text-white
            transition-all
            duration-300
            hover:rotate-90
            hover:bg-red-500
          "
        >
          ×
        </button>

        {/* Heading */}

        <div className="relative z-20">

          <h2 className="text-center text-4xl font-black text-white">
            {pack.name}
          </h2>

          <p className="mt-3 text-center text-slate-400">
            {pack.description}
          </p>

        </div>

        {/* Pack */}

        {!showCards && (

          <div className="relative z-20 mt-10 flex justify-center">

            <AnimatedPack
              image={pack.image}
              name={pack.name}
              ring={glow.ring}
              opening={isOpening}
            />

          </div>

        )}
        {rewardPopup && (
  <div
    className="
      absolute
      left-1/2
      top-32
      z-50
      -translate-x-1/2
      animate-bounce
    "
  >
    <div
      className="
        rounded-2xl
        border
        border-yellow-400
        bg-slate-900/95
        px-8
        py-5
        text-center
        shadow-2xl
        shadow-yellow-500/30
      "
    >
      <p className="text-lg font-bold text-yellow-300">
         Duplicate Reward
      </p>

      <p className="mt-2 text-3xl font-black text-yellow-400">
        +{rewardPopup} 🪙
        {flyCoins && (
    <div
        className="
            absolute
            left-1/2
            top-10
            -translate-x-1/2
            animate-[coinFly_0.9s_ease-out_forwards]
            text-4xl
            pointer-events-none
        "
    >
        🪙
    </div>
)}
      </p>
    </div>
  </div>
)}

        {/* Reveal Cards */}

        {showCards && (

          <div
            className="
              relative
              z-20
              mt-10
              grid
              grid-cols-1
              gap-8
              justify-items-center
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {revealedPlayers.map((player, index) => (

              <RevealCard
                key={player.id}
                player={player}
                delay={index * 400}
              />

            ))}
          </div>

        )}

        {/* Footer */}

        {!showCards && (

          <>
            <div className="relative z-20 mt-8 text-center">

              <span
                className="
                  rounded-full
                  bg-slate-800
                  px-5
                  py-2
                  text-lg
                  font-bold
                  text-yellow-300
                "
              >
                {pack.cards} Cards
              </span>

            </div>

            <div className="relative z-20 mt-10">

              <button
                onClick={handleOpen}
                disabled={isOpening}
                className={`
                  w-full
                  rounded-2xl
                  py-4
                  text-xl
                  font-bold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:scale-105
                  ${glow.button}
                `}
              >
                {isOpening
                  ? "Opening..."
                  : " Tap To Open "}
              </button>

            </div>

          </>

        )}
        </div>
      </div>
    );
}
export default PackOpeningModal;