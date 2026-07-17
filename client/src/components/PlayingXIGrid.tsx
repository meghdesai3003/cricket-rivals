import PlayerCard from "./PlayerCard";
import { players } from "../data/players";
import type { Player } from "../types/Player";

interface PlayingXIGridProps {
  selectedPlayers: Player[];
  onTogglePlayer: (player: Player) => void;
}

function PlayingXIGrid({
  selectedPlayers,
  onTogglePlayer,
}: PlayingXIGridProps) {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold text-white">
        Available Players
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => {
          const selected = selectedPlayers.some(
            (p) => p.id === player.id
          );

          return (
            <PlayerCard
              key={player.id}
              player={player}
              selected={selected}
              onClick={() => onTogglePlayer(player)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PlayingXIGrid;