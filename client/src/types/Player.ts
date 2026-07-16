export interface Player {
  id: number;
  name: string;
  country: string;

  batting: number;
  bowling: number;
  fielding: number;
  overall: number;

  rarity: "Standard" | "Elite" | "Gold";

  image: string;
}