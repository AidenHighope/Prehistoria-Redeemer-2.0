import { gameitems, redeemItem } from './Game-item';

export interface admincomment {
  url?: string;
  loot: redeemItem[];
  subtotal?: number;
  bonusBeads?: number;
  silverTongue: boolean;
}
