import { useState } from "react";
import PlayerCard from "../components/PlayerCard";
import PlayerModal from "../components/PlayerModal";
import CollectionStats from "../components/CollectionStats";
import type { Player } from "../types/Player";
import { useCollection } from "../context/CollectionContext";

function Collection() {
  const [search, setSearch] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("All");
  const [selectedRole, setSelectedRole] = useState("All");
  const [sortBy, setSortBy] = useState("Overall");
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const { collection } = useCollection();

  // Album data
  const albumCountries = ["India", "Australia", "England", "Pakistan"];
  const [selectedCountry, setSelectedCountry] = useState<string>(
    albumCountries[0]
  );

  // Simple placeholder for album players per selected country.
  // In a real app this would come from data/store.
  const albumPlayers: string[] = [];

  const filteredPlayers = collection

    .filter((player: Player) => {
      const matchesSearch = player.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesRarity =
        selectedRarity === "All" ||
        player.rarity === selectedRarity;

      const matchesRole = 
        selectedRole === "All" ||
        player.role === selectedRole;

      return matchesSearch && matchesRarity && matchesRole;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "Name":
          return a.name.localeCompare(b.name);
        case "Rarity": {
          const order: Record<Player["rarity"], number> = {
            Gold: 3,
            Elite: 2,
            Standard: 1,
          };

          return (
            order[b.rarity as keyof typeof order] -
            order[a.rarity as keyof typeof order]
          );
        }

        default:
          return b.overall - a.overall;
      }
    });

  const goldCount = filteredPlayers.filter(
    (p) => p.rarity === "Gold"
  ).length;

  const eliteCount = filteredPlayers.filter(
    (p) => p.rarity === "Elite"
  ).length;

  const standardCount = filteredPlayers.filter(
    (p) => p.rarity === "Standard"
  ).length;

  const totalCards = 180;

const totalGold = 1;
const totalElite = 1;
const totalStandard = 3;

const progress =
  
  Math.round(
    (collection.length / totalCards) * 100
  );


const filterButton = (
  rarity: string,
  activeColor: string
) => (
  <button
    onClick={() => setSelectedRarity(rarity)}
    className={`
      w-40
      h-14
      rounded-2xl
      flex
      items-center
      justify-center
      text-lg
      font-semibold
      transition-all
      duration-300
      ${
        selectedRarity === rarity
          ? `${activeColor} text-slate-900`
          : "bg-slate-800 text-white hover:bg-slate-700"
      }
    `}
  >
    {rarity}
  </button>
);

const roleButton = (role: string) => (
  <button
    onClick={() => setSelectedRole(role)}
    className={`
      w-40
      h-14
      rounded-2xl
      flex
      items-center
      justify-center
      text-lg
      font-semibold
      transition-all
      duration-300
      ${
        selectedRole === role
          ? "bg-green-400 text-slate-900"
          : "bg-slate-800 text-white hover:bg-slate-700"
      }
    `}
  >
    {role}
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

          <div className="mt-6 flex gap-3">

</div>
        </div>

       {/* <CollectionStats /> */}

        <div className="mb-10 rounded-3xl border border-slate-800 bg-slate-900 p-6">

  <div className="flex items-center justify-between">

    <div>

      <h2 className="text-2xl font-bold text-white">
        Collection Progress
      </h2>

      <p className="mt-1 text-slate-400">
        {collection.length} / {totalCards} Cards Collected
      </p>

    </div>

    <p className="text-4xl font-black text-yellow-400">
      {progress}%
    </p>

  </div>

  {/* Progress Bar */}

  <div className="mt-6 h-5 overflow-hidden rounded-full bg-slate-800">

    <div
      className="
        h-full
        rounded-full
        bg-gradient-to-r
        from-yellow-400
        via-yellow-300
        to-orange-400
        transition-all
        duration-700
      "
      style={{
        width: `${progress}%`,
      }}
    />

  </div>

  {/* Breakdown */}

  <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">

    <div className="rounded-2xl bg-yellow-400 p-5 text-center">

      <p className="text-sm font-bold uppercase text-slate-900">
        Gold
      </p>

      <p className="mt-2 text-3xl font-black text-slate-900">
        {goldCount}/{totalGold}
      </p>

    </div>

    <div className="rounded-2xl bg-sky-400 p-5 text-center">

      <p className="text-sm font-bold uppercase text-slate-900">
        Elite
      </p>

      <p className="mt-2 text-3xl font-black text-slate-900">
        {eliteCount}/{totalElite}
      </p>

    </div>

    <div className="rounded-2xl bg-slate-400 p-5 text-center">

      <p className="text-sm font-bold uppercase text-slate-900">
        Standard
      </p>

      <p className="mt-2 text-3xl font-black text-slate-900">
        {standardCount}/{totalStandard}
      </p>

    </div>

  </div>

</div>

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

        <div className="mb-6 flex items-center gap-4">

  <span className="font-semibold text-slate-300">
    Sort By
  </span>

  <select
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
    className="
      rounded-xl
      border
      border-slate-700
      bg-slate-900
      px-4
      py-2
      text-white
      outline-none
      transition
      focus:border-yellow-400
    "
  >
    <option>Overall</option>
    <option>Name</option>
    <option>Rarity</option>
  </select>

</div>

        {/* Filters */}

<div className="mb-10 space-y-5">

  {/* Rarity */}

  <div className="flex flex-wrap gap-4">
    {filterButton("All", "bg-yellow-400")}
    {filterButton("Standard", "bg-slate-400")}
    {filterButton("Elite", "bg-sky-400")}
    {filterButton("Gold", "bg-yellow-400")}
  </div>

  {/* Roles */}

  <div className="flex flex-wrap gap-4">
    {roleButton("All")}
    {roleButton("Batter")}
    {roleButton("Bowler")}
    {roleButton("All-Rounder")}
    {roleButton("Wicket-Keeper")}
  </div>

</div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-5">

  <div>
    <p className="text-sm uppercase tracking-widest text-slate-500">
      Showing
    </p>

    <h2 className="text-3xl font-black text-white">
      {filteredPlayers.length} Players
    </h2>
  </div>

  <div className="flex flex-wrap gap-4">

    <div className="rounded-xl bg-yellow-400 px-5 py-3 text-center">
      <p className="text-xs font-bold uppercase text-slate-900">
        Gold
      </p>

      <p className="text-2xl font-black text-slate-900">
        {goldCount}
      </p>
    </div>

    <div className="rounded-xl bg-sky-400 px-5 py-3 text-center">
      <p className="text-xs font-bold uppercase text-slate-900">
        Elite
      </p>

      <p className="text-2xl font-black text-slate-900">
        {eliteCount}
      </p>
    </div>

    <div className="rounded-xl bg-slate-400 px-5 py-3 text-center">
      <p className="text-xs font-bold uppercase text-slate-900">
        Standard
      </p>

      <p className="text-2xl font-black text-slate-900">
        {standardCount}
      </p>
    </div>

  </div>

</div>
<div className="mb-10 flex items-center justify-between">

</div>

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

) : (

  <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">

    <h2 className="mb-8 text-3xl font-bold text-yellow-400">
  Cricket Album
</h2>

<div className="mb-10 flex flex-wrap gap-3">

  {albumCountries.map((country) => (

    <button
      key={country}
      onClick={() => setSelectedCountry(country)}
      className={`
        rounded-xl
        px-5
        py-2
        font-bold
        transition-all
        duration-300

        ${
          selectedCountry === country
            ? "bg-yellow-400 text-slate-900"
            : "bg-slate-800 text-white hover:bg-slate-700"
        }
      `}
    >
      {country}
    </button>

  ))}

</div>

    <div
  className="
    rounded-3xl
    border
    border-slate-700
    bg-gradient-to-b
    from-slate-900
    to-slate-950
    p-8
  "
>

    </div>

  </div>

)
      </main>

      <PlayerModal
        player={selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
      />
    </>
  );
}

export default Collection;