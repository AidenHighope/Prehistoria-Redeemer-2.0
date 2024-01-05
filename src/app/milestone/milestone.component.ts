import { Component } from '@angular/core';
import { RecipeService } from '../Services/recipe.service';
import { Ingredients, Milestones } from '../Models/Milestone-Crafts';

@Component({
  selector: 'app-milestone',
  templateUrl: './milestone.component.html',
  styleUrls: ['./milestone.component.scss'],
})
export class MilestoneComponent {
  constructor(private recipeService: RecipeService) {
    this.allMilestones = recipeService.getAllMilestones();
  }

  allMilestones: Milestones[];
  craftableMilestones: Milestones[] = [];
  playerInput!: string;
  playerItems: Ingredients[] = [];
  isActive: boolean = true;

  //#region DOM
  toggleCollapse(): void {
    this.isActive = !this.isActive;
  }

  //#endregion

  processItems(input: string): void {
    let list = this.parseInput(input);
    this.getMilestone(list);
  }
  parseInput(input: string): Ingredients[] {
    return this.recipeService.parseIngredients(input);
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
}
