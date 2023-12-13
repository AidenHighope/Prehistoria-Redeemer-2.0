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
  id: string = '';
  isHidden = true;
  message: string = '';
  line: tack = { name: '----', type: 'none', activity: 'none' };

  //#endregion

  //#region beast logic
  setupBeast(id: string): void {
    id = this.id.toLowerCase();
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
    let dataToPush = {
      species: this.species,
      ID: this.id,
      equipped: this.selectedTack,
    };
    this.setLuckyTotem(this.species);
    this.tackedBeast = dataToPush;
    this.toggleVisibility();
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
    // this.orderTack(this.selectedTack);
    this.splitSelected = [...this.selectedTack];
    this.orderTack(this.splitSelected);

    return this.splitSelected.filter(
      (a) => a.activity === activity || a.activity === 'any'
    );
  }

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
