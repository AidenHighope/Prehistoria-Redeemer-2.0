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

  processItems(input: string): void {
    let list = this.parseInput(input);
    this.getMilestone(list);
  }

  getMilestone(list: Ingredients[]): void {
    this.craftableMilestones = this.recipeService.getAvailableMilestones(list);
  }
  parseInput(input: string): Ingredients[] {
    return this.recipeService.parseIngredients(input);
  }
}
