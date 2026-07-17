import type { Player } from "../types/Player";
import FieldSlot from "./FieldSlot";

interface CricketFieldProps {
  selectedPlayers: Player[];
}

function CricketField({
  selectedPlayers,
}: CricketFieldProps) {

  return (
    <div
      className="
        relative
        rounded-[40px]
        bg-gradient-to-b
        from-green-700
        via-green-800
        to-green-900
        p-10
        shadow-2xl
      "
    >

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-56
          w-10
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-yellow-200/50
        "
      />

      <div className="flex flex-col gap-8 items-center">

        <FieldSlot
          player={selectedPlayers[0]}
          index={1}
        />

        <div className="flex gap-20">
          <FieldSlot
            player={selectedPlayers[1]}
            index={2}
          />

          <FieldSlot
            player={selectedPlayers[2]}
            index={3}
          />
        </div>

        <FieldSlot
          player={selectedPlayers[3]}
          index={4}
        />

        <div className="flex gap-20">
          <FieldSlot
            player={selectedPlayers[4]}
            index={5}
          />

          <FieldSlot
            player={selectedPlayers[5]}
            index={6}
          />
        </div>

        <div className="flex gap-8">
          <FieldSlot
            player={selectedPlayers[6]}
            index={7}
          />

          <FieldSlot
            player={selectedPlayers[7]}
            index={8}
          />

          <FieldSlot
            player={selectedPlayers[8]}
            index={9}
          />
        </div>

        <div className="flex gap-16">
          <FieldSlot
            player={selectedPlayers[9]}
            index={10}
          />

          <FieldSlot
            player={selectedPlayers[10]}
            index={11}
          />
        </div>

      </div>

    </div>
  );
}

export default CricketField;