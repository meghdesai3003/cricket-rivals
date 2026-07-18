import { players } from "../data/players";
import type { Player } from "../types/Player";

function shuffle<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export function generatePack(packName: string): Player[] {

  const standard = shuffle(
    players.filter((p) => p.rarity === "Standard")
  );

  const elite = shuffle(
    players.filter((p) => p.rarity === "Elite")
  );

  const gold = shuffle(
    players.filter((p) => p.rarity === "Gold")
  );

  switch (packName) {

    case "Gold Pack":
      return uniquePlayers([
        gold[0],
        elite[0],
        ...standard.slice(0, 3),
      ]);

    case "Elite Pack":
      return uniquePlayers([
        ...elite.slice(0, 2),
        ...standard.slice(0, 3),
      ]);

    default:
      return uniquePlayers(
      standard.slice(0, 5)
      );
  }

}

function uniquePlayers(players: Player[]): Player[] {
  const seen = new Set<number>();

  return players.filter((player) => {
    if (seen.has(player.id)) return false;

    seen.add(player.id);
    return true;
  });
}
