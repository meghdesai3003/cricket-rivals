import { useState } from "react";
import PlayerCard from "../components/PlayerCard";
import PlayerModal from "../components/PlayerModal";
import CollectionStats from "../components/CollectionStats";
import { players } from "../data/players";
import type { Player } from "../types/Player";

function Collection() {
  const [search, setSearch] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("All");
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);

  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesRarity =
      selectedRarity === "All" ||
      player.rarity === selectedRarity;

    return matchesSearch && matchesRarity;
  });

  const filterButton = (
    rarity: string,
    activeColor: string
  ) => (
    <button
      onClick={() => setSelectedRarity(rarity)}
      className={`rounded-full px-5 py-2 font-semibold transition-all duration-300 ${
        selectedRarity === rarity
          ? `${activeColor} text-slate-900`
          : "bg-slate-800 text-white hover:bg-slate-700"
      }`}
    >
      {rarity}
    </button>
  );

  return (
    <>
      <main className="mx-auto min-h-screen w-11/12 max-w-7xl py-12">

        {/* Heading */}

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Collection
          </h1>

          <p className="mt-2 text-slate-400">
            Collect, upgrade and build your ultimate cricket squad.
          </p>
        </div>

        <CollectionStats />

        {/* Search */}

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search players..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-900
              p-4
              text-white
              outline-none
              transition
              focus:border-yellow-400
            "
          />
        </div>

        {/* Filters */}

        <div className="mb-10 flex flex-wrap gap-3">
          {filterButton("All", "bg-yellow-400")}
          {filterButton("Standard", "bg-slate-400")}
          {filterButton("Elite", "bg-sky-400")}
          {filterButton("Gold", "bg-yellow-400")}
        </div>

        <p className="mb-6 text-slate-400">
          Showing {filteredPlayers.length} player
          {filteredPlayers.length !== 1 ? "s" : ""}
        </p>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPlayers.length > 0 ? (
            filteredPlayers.map((player) => (
              <div
                key={player.id}
                onClick={() => setSelectedPlayer(player)}
                className="cursor-pointer"
              >
                <PlayerCard player={player} />
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center">
              <h2 className="text-2xl font-bold text-white">
                No players found
              </h2>

              <p className="mt-3 text-slate-400">
                Try another search or filter.
              </p>
            </div>
          )}
        </div>
      </main>

      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />
    </>
  );
}

export default Collection;