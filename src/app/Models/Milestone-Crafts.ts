import { redeemItem } from './Game-item';

export interface Crafts {
  name: string;
  difficulty: string;
  requiredItems: Ingredients[];
}

export interface Milestones {
  category: string;
  name: string;
  phaseId?: number;
  reward?: Reward;
  requiredItems: Ingredients[];
}

export interface Ingredients {
  name: string;
  qty: number;
}

export interface Reward {
  item: string;
  type: string;
}
