import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { Player } from "../types/Player";

interface PlayingXIContextType {
  playingXI: Player[];
  addPlayer: (player: Player) => void;
  removePlayer: (id: number) => void;
}

const PlayingXIContext =
  createContext<PlayingXIContextType | null>(null);

export function PlayingXIProvider({
  children,
}: {
  children: React.ReactNode;
}) {

  const [playingXI, setPlayingXI] = useState<Player[]>(() => {

    const saved =
      localStorage.getItem("playingXI");

    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }

    return [];

  });

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

  return (

    <PlayingXIContext.Provider
      value={{
        playingXI,
        addPlayer,
        removePlayer,
      }}
    >
      {children}
    </PlayingXIContext.Provider>

  );

}

export function usePlayingXI() {

  const context =
    useContext(PlayingXIContext);

  if (!context)
    throw new Error(
      "usePlayingXI must be used inside PlayingXIProvider"
    );

  return context;

}