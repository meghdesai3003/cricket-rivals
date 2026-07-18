import type { Player } from "./Player";

export interface CollectionPlayer extends Player {
  owned: number;
}