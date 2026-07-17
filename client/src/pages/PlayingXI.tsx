import { useState } from "react";
import type { Player } from "../types/Player";

import SelectedTeam from "../components/SelectedTeam";
import PlayingXIGrid from "../components/PlayingXIGrid";

function PlayingXI() {
  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  function handleTogglePlayer(player: Player) {
    const alreadySelected = selectedPlayers.some(
      (p) => p.id === player.id
    );

    if (alreadySelected) {
      setSelectedPlayers(
        selectedPlayers.filter((p) => p.id !== player.id)
      );
      return;
    }

    if (selectedPlayers.length >= 11) {
      alert("You can only select 11 players.");
      return;
    }

    setSelectedPlayers([...selectedPlayers, player]);
  }

  return (
    <main className="mx-auto w-11/12 max-w-7xl py-12">
      <h1 className="mb-10 text-4xl font-bold text-white">
        Playing XI Builder
      </h1>

      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">

        <SelectedTeam
          selectedPlayers={selectedPlayers}
        />

        <PlayingXIGrid
          selectedPlayers={selectedPlayers}
          onTogglePlayer={handleTogglePlayer}
        />

      </div>
    </main>
  );
}

export default PlayingXI;