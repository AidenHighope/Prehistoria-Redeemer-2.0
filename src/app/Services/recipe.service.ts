import { Injectable } from '@angular/core';
import { Crafts, Ingredients, Milestones } from '../Models/Milestone-Crafts';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}
  private _milestones: Milestones[] = [
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 1,
      requiredItems: [{ name: 'mauled pelt', qty: 5 }],
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 2,
      requiredItems: [{ name: 'warm wolf fur', qty: 5 }],
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 3,
      requiredItems: [
        { name: 'pristine lion fangs', qty: 4 },
        { name: 'silky albino fur', qty: 2 },
      ],
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 4,
      requiredItems: [
        { name: 'striped pelt', qty: 3 },
        { name: 'silky albino fur', qty: 2 },
      ],
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 5,
      requiredItems: [
        { name: 'wooly rhino horn', qty: 2 },
        { name: 'cursed mammoth tusks', qty: 1 },
      ],
    },
  ];
  private _crafts: Crafts[] = [];

  getAllMilestones(): Milestones[] {
    return this._milestones;
  }

  getAvailableMilestones(requiredItems: Ingredients[]): Milestones[] {
    return this._milestones.filter((milestone) => {
      let allItemsPresent = milestone.requiredItems.every((requiredItem) => {
        let matchingItem = requiredItems.find(
          (playerItem) =>
            playerItem.name.toLowerCase() === requiredItem.name.toLowerCase()
        );

        return matchingItem && matchingItem.qty >= requiredItem.qty;
      });

      return allItemsPresent;
    });
  }

  parseIngredients(inputText: string): Ingredients[] {
    let lines = inputText.split('\n');
    let itemList: Ingredients[] = [];
    lines.forEach((line) => {
      let match = line.match(/^(\d+)x\s+(.+)/);
      if (match) {
        let qty = parseInt(match[1], 10);
        let name = match[2].trim().toLowerCase();
        itemList.push({ name, qty });
      }
    });
    return itemList;
  }
}
