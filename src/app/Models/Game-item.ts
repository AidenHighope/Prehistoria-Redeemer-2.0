export interface gameitems {
  name: string;
  category: string;
  price: number;
}

export interface redeemItem {
  qty: number;
  itemType: gameitems;
  isStashed: boolean;
}
