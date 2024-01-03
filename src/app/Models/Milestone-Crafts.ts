import { redeemItem } from './Game-item';

export interface Crafts {
  name: string;
  difficulty: string;
  ingredients: redeemItem[];
  craftable: boolean;
}

export interface Milestones {
  category: string;
  name: string;
  phaseId?: number;
  itemName: string[];
  itemQty: number[];
}
