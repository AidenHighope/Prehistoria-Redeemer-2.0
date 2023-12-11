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
  //TODO add a way to add custom reward (for non regular items given by monthly bonus or something)
  //Variables
  database: gameitems[];
  Redeem: gameitems[];
  redeemedItems: redeemItem[] = [];
  currentRedeem: redeemItem[] = [];
  oneRedeem: redeemItem[] = [];
  Comment: admincomment[] = [];
  buttonDisabled: boolean = false;
  input: string = '';
  url: string = '';
  extrabeads: string = '0';
  usesSilverTongue: boolean = false;

  //#region filter and search

  filterCategory(name: string): void {
    this.database = this.itemService.getByCategory(name);
  }

  searchItem(name: string): void {
    this.database = this.itemService.getOne(name);
    this.input = '';
  }

  //#endregion

  //#region items handling
  addOrStash(item: gameitems, bool: string) {
    this.itemService.redeemOne(item);
    let lePush: redeemItem;
    if (bool === 'true') {
      lePush = { qty: 1, itemType: item, isStashed: true };
    } else {
      lePush = { qty: 1, itemType: item, isStashed: false };
    }

    let existingItem = this.currentRedeem.find((a) => {
      return item.name === a.itemType.name && lePush.isStashed === a.isStashed;
    });
    if (existingItem) {
      existingItem.qty++;
    } else {
      this.currentRedeem.push(lePush);
    }
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

  toggleSilverTongue(): void {
    this.usesSilverTongue = !this.usesSilverTongue;
  }
  mapSilverTongue(price: number): number {
    return Math.floor(price * 1.1);
  }
  //#endregion

  //#region new comment

  newComment(): void {
    this.oneRedeem = [...this.currentRedeem];

    let sum = 0;
    this.currentRedeem.forEach((beads) => {
      let price = beads.itemType.price;
      if (this.usesSilverTongue) {
        price = price * 1.1;
      }
      if (!beads.isStashed) {
        sum += price * beads.qty;
      } else {
        sum += 0;
      }
    });
    sum += parseInt(this.extrabeads);
    let commentContent = {
      loot: this.oneRedeem,
      subtotal: sum,
      url: this.url,
      bonusBeads: parseInt(this.extrabeads),
      silverTongue: this.usesSilverTongue,
    };
    if (this.currentRedeem.length > 0) {
      this.Comment.push(commentContent);
    }
    this.redeemedItems.push(...this.oneRedeem);
    this.clearOne(this.currentRedeem);
    this.url = '';
    this.extrabeads = '0';
    this.disableOnClick();
  }

  disableOnClick(): void {
    this.buttonDisabled = true;
    setTimeout(() => {
      this.buttonDisabled = false;
    }, 300);
  }

  //#endregion

  //#region handle total
  TotalBeads(): number {
    let sum: number = 0;
    this.Comment.forEach((beads) => {
      if (beads.subtotal) {
        sum += beads.subtotal;
      } else {
        sum += 0;
      }
      return sum;
    });
    return sum;
  }

  clearOne(list: redeemItem[]): void {
    list.splice(0, list.length);
  }

  clearAll(): void {
    this.clearOne(this.currentRedeem);
    this.clearOne(this.redeemedItems);
    this.clearOne(this.oneRedeem);
    this.Comment.splice(0, this.Comment.length);
  }

  processedItems(): redeemItem[] {
    let groupedItems: redeemItem[] = [];

    this.redeemedItems.forEach((item) => {
      let existingItem = groupedItems.find((groupedItem) => {
        return (
          groupedItem.itemType.name === item.itemType.name &&
          groupedItem.isStashed === item.isStashed
        );
      });

      if (existingItem) {
        existingItem.qty += item.qty;
      } else {
        groupedItems.push({
          itemType: item.itemType,
          qty: item.qty,
          isStashed: item.isStashed,
        });
      }
    });
    groupedItems.sort((a, b) => a.itemType.name.localeCompare(b.itemType.name));
    return groupedItems;
  }
  //#endregion
}
