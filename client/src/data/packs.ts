export interface Pack {
  id: number;
  name: string;
  description: string;
  color: string;
  border: string;
  button: string;
  image: string;
  cards: number;
}

export const packs: Pack[] = [
  {
    id: 1,
    name: "Standard Pack",
    description:
      "Contains 5 Standard Players.",

    color:
      "from-slate-700 via-slate-800 to-slate-900",

    border:
      "border-slate-500",

    button:
      "bg-slate-500 hover:bg-slate-400",

    image:
      "/packs/standard-pack.png",

    cards: 5,
  },

  {
    id: 2,

    name: "Elite Pack",

    description:
      "Contains 3 Standard + 2 Elite Players.",

    color:
      "from-sky-700 via-sky-900 to-slate-950",

    border:
      "border-sky-400",

    button:
      "bg-sky-500 hover:bg-sky-400",

    image:
      "/packs/elite-pack.png",

    cards: 5,
  },

  {
    id: 3,

    name: "Gold Pack",

    description:
      "Contains 3 Standard + 1 Elite + 1 Gold Player.",

    color:
      "from-yellow-500 via-yellow-700 to-slate-950",

    border:
      "border-yellow-400",

    button:
      "bg-yellow-400 hover:bg-yellow-300",

    image:
      "/packs/gold-pack.png",

    cards: 5,
  },
];