import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { Player } from "../types/Player";

interface PlayingXIContextType {
  playingXI: Player[];
  captainId: number | null;
  viceCaptainId: number | null;

  addPlayer: (player: Player) => void;
  removePlayer: (id: number) => void;

  setCaptain: (id: number) => void;
  setViceCaptain: (id: number) => void;
  isTeamValid: () => boolean;
}



const PlayingXIContext =
  createContext<PlayingXIContextType | null>(null);

export function PlayingXIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [playingXI, setPlayingXI] = useState<Player[]>(() => {
    const saved = localStorage.getItem("playingXI");

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }

    return [];
  });

  const [captainId, setCaptainId] = useState<number | null>(null);
  const [viceCaptainId, setViceCaptainId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem(
      "playingXI",
      JSON.stringify(playingXI)
    );
  }, [playingXI]);

  const isTeamValid = () => {
  return playingXI.length === 11;
};

 

  function addPlayer(player: Player) {
  setPlayingXI((prev) => {

    if (prev.some((p) => p.id === player.id)) {
      alert("Player is already in your Playing XI.");
      return prev;
    }

    if (prev.length >= 11) {
      alert("Playing XI already has 11 players.");
      return prev;
    }

    return [...prev, player];

  });
}

  function removePlayer(id: number) {

  setPlayingXI((prev) =>
    prev.filter((p) => p.id !== id)
  );

  if (captainId === id) {
    setCaptainId(null);
  }

  if (viceCaptainId === id) {
    setViceCaptainId(null);
  }

}
  function setCaptain(id: number) {
  if (viceCaptainId === id) {
    setViceCaptainId(null);
  }

  setCaptainId(id);
}

function setViceCaptain(id: number) {
  if (captainId === id) {
    setCaptainId(null);
  }

  setViceCaptainId(id);
}

  return (
    <PlayingXIContext.Provider
      value={{
        playingXI,
        addPlayer,
        removePlayer,
        captainId,
        viceCaptainId,
        setCaptain,
        setViceCaptain,
        isTeamValid,
      }}
    >
      {children}
    </PlayingXIContext.Provider>
  );
}

export function usePlayingXI() {
  const context = useContext(PlayingXIContext);

  if (!context) {
    throw new Error(
      "usePlayingXI must be used inside PlayingXIProvider"
    );
  }

  return context;
}








