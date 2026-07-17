import type { Player } from "../types/Player";
import CricketField from "./CricketField";

interface SelectedTeamProps {
  selectedPlayers: Player[];
}

function SelectedTeam({
  selectedPlayers,
}: SelectedTeamProps) {

  return (
    <div>

      <div className="mb-6 text-center">

        <h2 className="text-3xl font-bold text-white">
          Playing XI
        </h2>

        <p className="mt-2 text-slate-400">
          {selectedPlayers.length} / 11 Selected
        </p>

      </div>

      <CricketField
        selectedPlayers={selectedPlayers}
      />

    </div>
  );
}

export default SelectedTeam;