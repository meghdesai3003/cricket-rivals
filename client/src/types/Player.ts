export interface Player {
  id: number;
  name: string;
  country: string;
  role: "Batter" | "Bowler" | "All-Rounder" | "Wicketkeeper";

  overall: number;
  batting: number;
  bowling: number;
  fielding: number;

  rarity: "Standard" | "Elite" | "Gold";

  image: string;
}