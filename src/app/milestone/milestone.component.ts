import { Component } from '@angular/core';
import { RecipeService } from '../Services/recipe.service';
import { Crafts, Ingredients, Milestones } from '../Models/Milestone-Crafts';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
})
export class MilestoneComponent {
  constructor(private recipeService: RecipeService) {
    this.allMilestones = recipeService.getAllMilestones();
    this.allCrafts = recipeService.getAllCrafts();
  }
  playerInput!: string;
  playerItems: Ingredients[] = [];
  isActive: boolean = true;

  toggleCollapse(): void {
    this.isActive = !this.isActive;
  }

  parseInput(input: string): Ingredients[] {
    return this.recipeService.parseIngredients(input);
  }

  generateAll(input: string): void {
    this.processCraftItems(input);
    this.processItems(input);
  }

  //#region Crafts
  allCrafts: Crafts[];
  craftableCrafts: Crafts[] = [];

  getCraftables(list: Ingredients[]): void {
    this.craftableCrafts = this.recipeService.getCraftables(list);
  }

  processCraftItems(input: string): void {
    let list = this.parseInput(input);
    this.getCraftables(list);
  }

  filterByLevel(input: string): Crafts[] {
    return (this.craftableCrafts = this.recipeService.getCraftsByLevel(input));
  }

  //#endregion

  //#region Milestones
  allMilestones: Milestones[];
  craftableMilestones: Milestones[] = [];

  processItems(input: string): void {
    let list = this.parseInput(input);
    this.getMilestone(list);
  }

  //#region getItems
  getMilestone(list: Ingredients[]): void {
    this.craftableMilestones = this.recipeService.getAvailableMilestones(list);
  }

  filterCategory(input: string): Milestones[] {
    return (this.craftableMilestones =
      this.recipeService.getMilestonesByCategory(input));
  }

  filterReward(input: string): Milestones[] {
    return (this.craftableMilestones =
      this.recipeService.getMilestonesByReward(input));
  }
  //#endregion
  //#endregion
}
