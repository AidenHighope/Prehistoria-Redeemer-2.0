import { redeemItem } from './Game-item';

export interface Crafts {
  name: string;
  difficulty: string;
  requiredItems: Ingredients[];
  craftable: boolean;
}

export interface Milestones {
  category: string;
  name: string;
  phaseId?: number;
  requiredItems: Ingredients[];
}

export interface Ingredients {
  name: string;
  qty: number;
}
