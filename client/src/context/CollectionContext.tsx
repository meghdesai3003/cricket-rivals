import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { Player } from "../types/Player";

interface CollectionPlayer extends Player {
  owned: number;
}

interface CollectionContextType {
  collection: CollectionPlayer[];
  addPlayers: (players: Player[]) => void;
}

const CollectionContext =
  createContext<CollectionContextType | null>(null);

export function CollectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collection, setCollection] = useState<CollectionPlayer[]>(() => {
    const saved = localStorage.getItem("collection");

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
    console.log("Saving collection:", collection);

    localStorage.setItem(
      "collection",
      JSON.stringify(collection)
    );
  }, [collection]);

function addPlayers(players: Player[]) {
  setCollection((prev) => {
    const updated = [...prev];

    players.forEach((player) => {
      const existing = updated.find(
        (p) => p.id === player.id
      );

      if (existing) {
        existing.owned += 1;
      } else {
        updated.push({
          ...player,
          owned: 1,
        });
      }
    });

    return updated;
  });
}
  return (
    <CollectionContext.Provider
      value={{
        collection,
        addPlayers,
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollection() {
  const context = useContext(CollectionContext);

  if (!context) {
    throw new Error(
      "useCollection must be used inside CollectionProvider"
    );
  }

  return context;
}