import { Component, Input } from '@angular/core';
import { admincomment } from 'src/app/Models/Comment';
import { gameitems, redeemItem } from 'src/app/Models/Game-item';
import { ItemsService } from 'src/app/Services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent {
  constructor(private itemService: ItemsService) {
    this.database = itemService.getItems();
    this.Redeem = itemService.getRedeems();
  }

  //Variables
  database: gameitems[];
  Redeem: gameitems[];
  redeemedItems: redeemItem[] = [];
  currentRedeem: redeemItem[] = [];

  filterCategory(name: string): void {
    this.database = this.itemService.getByCategory(name);
  }
  //addNewItem and sets default value to push into an array
  addNewItem(item: gameitems): void {
    this.itemService.redeemOne(item);
    let lePush = { qty: 1, itemType: item, isStashed: false };
    this.currentRedeem.push(lePush);
  }

  stashNewItem(item: gameitems): void {
    this.itemService.redeemOne(item);
    let lePush = { qty: 1, itemType: item, isStashed: true };
    this.currentRedeem.push(lePush);
  }

  addQty(item: redeemItem): void {
    item.qty++;
  }

  minusQty(item: redeemItem): void {
    let index = this.currentRedeem.indexOf(item);
    item.qty--;
    if (item.qty <= 0) {
      this.currentRedeem.splice(index, 1);
    }
  }

  //stash - not yet implemented
  newComment(): void {
    for (let item of this.currentRedeem) {
      this.redeemedItems.push(item);
    }
    this.clearCurrentRedeems();
  }

  clearCurrentRedeems(): void {
    this.currentRedeem.splice(0, this.currentRedeem.length);
  }
}
