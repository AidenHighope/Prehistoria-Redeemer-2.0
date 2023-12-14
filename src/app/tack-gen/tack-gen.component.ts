import { Component } from '@angular/core';
import { TackService } from '../Services/tack.service';
import { tack } from '../Models/Game-item';
import { beast } from '../Models/Beast';
import { filter } from 'rxjs';

@Component({
  selector: 'app-tack-gen',
  templateUrl: './tack-gen.component.html',
  styleUrls: ['./tack-gen.component.scss'],
})
export class TackGenComponent {
  constructor(private tackService: TackService) {}

  //#region Variable
  displayedItems: tack[] = [];
  line: tack = { name: '---', type: 'none', activity: 'none' };
  selectedTack: tack[] = [];
  splitSelected: tack[] = [];
  tackedBeast!: beast;
  activities: string[] = [
    'hunting',
    'fishing',
    'discovery',
    'foraging',
    'telt',
  ];
  beastName!: string;
  species: string = '';
  id: string = '';
  message: string = '';
  advantage: string = '';
  disadvantage: string = '';
  isHidden = true;
  NoTotem: boolean = true;
  //#endregion

  //#region beast logic

  setupBeast(): void {
    let id = this.id.toLowerCase();
    if (id.includes('s')) {
      this.species = 'saber';
    } else if (id.includes('d')) {
      this.species = 'worg';
    } else if (id.includes('m')) {
      this.species = 'megaloceros';
    } else if (id.includes('t')) {
      this.species = 'terror bird';
    } else if (id.includes('w')) {
      this.species = 'mammoth';
    } else if (id.includes('u')) {
      this.species = 'ursus';
    } else if (id.includes('e')) {
      this.species = 'equus;';
    }

    this.setLuckyTotem(this.species);
    this.setDisAdvantage(this.species);
  }
  setDisAdvantage(species: string) {
    let luckyTotem = this.selectedTack.find((a) => {
      return a.name === 'lucky totem';
    });
    switch (species) {
      case 'saber':
        this.advantage = 'hunting';
        break;
      case 'worg':
        this.advantage = 'discovery';
        break;
      case 'equus':
        this.advantage = 'foraging';
        break;
      case 'ursus':
        this.advantage = 'fishing';
        break;
      case 'megaloceros':
        this.advantage = 'foraging';
        break;
      case 'terror bird':
        this.advantage = 'hunting';
        break;
      case 'mammoth':
        this.advantage = 'discovery';
        break;
    }
    if (!luckyTotem) {
      switch (species) {
        case 'saber':
          this.disadvantage = 'discovery';
          break;
        case 'worg':
          this.disadvantage = 'foraging';
          break;
        case 'equus':
          this.disadvantage = 'fishing';
          break;
        case 'ursus':
          this.disadvantage = 'hunting';
          break;
        case 'megaloceros':
          this.disadvantage = 'hunting';
          break;
        case 'terror bird':
          this.disadvantage = 'foraging';
          break;
        case 'mammoth':
          this.disadvantage = 'fishing';
          break;
      }
    } else {
      this.disadvantage = '';
    }
  }

  setLuckyTotem(species: string) {
    let luckyTotem = this.selectedTack.find((a) => {
      return a.name === 'lucky totem';
    });
    if (luckyTotem) {
      switch (species) {
        case 'saber':
          luckyTotem.activity = 'discovery';
          break;
        case 'worg':
          luckyTotem.activity = 'foraging';
          break;
        case 'equus':
          luckyTotem.activity = 'fishing';
          break;
        case 'ursus':
          luckyTotem.activity = 'hunting';
          break;
        case 'megaloceros':
          luckyTotem.activity = 'hunting';
          break;
        case 'terror bird':
          luckyTotem.activity = 'foraging';
          break;
        case 'mammoth':
          luckyTotem.activity = 'fishing';
          break;
      }
    }
  }
  //#endregion

  //#region tack-gen logic
  addTack(item: tack, setDuration: number) {
    let hasTrials = this.selectedTack.find((a) => {
      return a.type === 'trials';
    });
    let existingItem = this.selectedTack.find((a) => {
      return a.name === item.name;
    });
    if ((hasTrials && item.type === 'trials') || existingItem) {
      this.message = 'already applied/has trials';
      setTimeout(() => {
        this.message = '';
      }, setDuration);
    } else {
      this.selectedTack.push(item);
    }
    this.setupBeast();
  }
  removeTack(item: tack) {
    let index = this.selectedTack.indexOf(item);
    this.selectedTack.splice(index, 1);
    this.setupBeast();
  }

  DistributeTack(activity: string, list: tack[]): void {
    list.filter((a) => a.activity === activity);
    this.orderTack(list);
  }

  //#endregion

  //#region utilities -
  toggleVisibility() {
    this.isHidden = !this.isHidden;
  }
  //#region clear methods
  clearAll(): void {
    this.clearOne(this.selectedTack);
    this.clearOne(this.splitSelected);
  }
  clearOne(list: any[]): void {
    list.splice(0, list.length);
  }

  //#endregion

  //#endregion

  //#region Sorting
  tackResult(activity: string): tack[] {
    this.splitSelected = [...this.selectedTack];
    this.orderTack(this.splitSelected);
    let newArray = [];
    for (let i = 0; i < this.splitSelected.length; i++) {
      if (this.splitSelected[i].type.includes('trait')) {
        this.splitSelected[i].type = 'trait';
      }
      newArray.push(this.splitSelected[i]);
      if (
        i < this.splitSelected.length - 1 &&
        this.splitSelected[i].type !== this.splitSelected[i + 1].type
      ) {
        newArray.push(this.line);
      }
    }

    return this.filterAndCleanLines(newArray, activity);
  }

  filterAndCleanLines(list: tack[], activity: string): tack[] {
    let filteredList = list.filter(
      (a) =>
        a.activity === activity || a.activity === 'any' || a.activity === 'none'
    );

    for (let i = 0; i < filteredList.length - 1; i++) {
      if (
        filteredList[i].name === '---' &&
        filteredList[i + 1].name === '---'
      ) {
        filteredList.splice(i, 1);
        i--;
      }
    }

    return filteredList;
  }

  filterByCategory(name: string) {
    this.displayedItems = this.tackService.getByType(name);
  }

  hideAll() {
    this.displayedItems.splice(0, this.displayedItems.length);
  }

  getTraits() {
    this.displayedItems = this.tackService.getAllTrait();
  }

  orderTack(list: tack[]): void {
    this.tackService.sortByType(list);
  }
  //#endregion
}
