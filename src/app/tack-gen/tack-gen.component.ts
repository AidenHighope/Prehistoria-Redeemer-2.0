import { Component } from '@angular/core';
import { TackService } from '../Services/tack.service';
import { tack } from '../Models/Game-item';
import { beast } from '../Models/Beast';

@Component({
  selector: 'app-tack-gen',
  templateUrl: './tack-gen.component.html',
  styleUrls: ['./tack-gen.component.scss'],
})
export class TackGenComponent {
  constructor(private tackService: TackService) {}

  //TODO prevent user to add multiple trials
  //TODO check if item is added already
  //TODO find a way to make a prettier formatting

  //#region Variable
  activities: string[] = [
    'hunting',
    'fishing',
    'discovery',
    'foraging',
    'telt',
  ];
  allItems: tack[] = [];
  selectedTack: tack[] = [];
  splitSelected: tack[] = [];
  tackedBeast!: beast;
  beastName!: string;
  species: string = '';
  id: number = 0;
  isHidden = true;

  tackResult(activity: string): tack[] {
    this.splitSelected = [...this.selectedTack];
    this.orderTack(this.splitSelected);
    return this.splitSelected.filter(
      (a) => a.activity === activity || a.activity === 'any'
    );
  }

  //#endregion

  toggleVisibility() {
    this.isHidden = !this.isHidden;
  }

  //#region tack-gen logic
  addTack(item: tack) {
    this.selectedTack.push(item);
  }
  removeTack(item: tack) {
    let index = this.selectedTack.indexOf(item);
    this.selectedTack.splice(index, 1);
  }

  DistributeTack(activity: string, list: tack[]): void {
    list.filter((a) => a.activity === activity);
    this.orderTack(list);
  }

  //#endregion

  //#region Sorting
  filterByCategory(name: string) {
    this.allItems = this.tackService.getByType(name);
  }

  hideAll() {
    this.allItems.splice(0, this.allItems.length);
  }

  getTraits() {
    this.allItems = this.tackService.getAllTrait();
  }

  orderTack(list: tack[]): void {
    this.tackService.sortByType(list);
  }
  //#endregion
}
