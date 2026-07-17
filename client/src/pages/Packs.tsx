import { useState } from "react";

import PackCard from "../components/PackCard";
import PackOpeningModal from "../components/PackOpeningModal";

import { packs } from "../data/packs";
import type { Pack } from "../data/packs";

function Packs() {
  const [selectedPack, setSelectedPack] = useState<Pack | null>(null);

  return (
    <>
      <main className="mx-auto min-h-screen w-11/12 max-w-7xl py-12">

        {/* Heading */}

        <div className="mb-14 text-center">

          <h1 className="text-5xl font-black text-white">
            Open Packs
          </h1>

          <p className="mt-4 text-lg text-slate-400">
            Unlock powerful cricketers and strengthen your squad.
          </p>

        </div>

        {/* Pack Grid */}

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {packs.map((pack) => (

            <PackCard
              key={pack.id}
              pack={pack}
              onOpen={() => setSelectedPack(pack)}
            />

          ))}

        </div>

      </main>

      {/* Opening Modal */}

      <PackOpeningModal
        pack={selectedPack}
        onClose={() => setSelectedPack(null)}
      />

    </>
  );
}

export default Packs;