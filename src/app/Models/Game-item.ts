export interface gameitems {
  name: string;
  category: string;
  price: number;
  redeemType: string;
}

export interface redeemItem {
  qty: number;
  itemType: gameitems;
  isStashed: boolean;
}

export interface tack {
  name: string;
  type: string;
  activity: string;
}
export interface CategoryOrder {
  top: number;
  trials: number;
  special_trait: number;
  primal_trait: number;
  trait: number;
  companions: number;
  tack: number;
}
