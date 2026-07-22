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

  function addPlayer(player: Player) {
    setPlayingXI((prev) => {
      if (prev.find((p) => p.id === player.id))
        return prev;

      if (prev.length >= 11)
        return prev;

      return [...prev, player];
    });
  }

  function removePlayer(id: number) {
    setPlayingXI((prev) =>
      prev.filter((p) => p.id !== id)
    );
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

  captainId,
  viceCaptainId,

  addPlayer,
  removePlayer,

  setCaptain,
  setViceCaptain,
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








