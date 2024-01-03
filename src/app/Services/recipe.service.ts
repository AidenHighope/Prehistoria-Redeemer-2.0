import { Injectable } from '@angular/core';
import { Crafts, Milestones } from '../Models/Milestone-Crafts';

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
      itemName: ['mauled pelt'],
      itemQty: [5],
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 2,
      itemName: ['warm wolf fur'],
      itemQty: [5],
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 3,
      itemName: ['pristine lion fangs', 'silky albino fur'],
      itemQty: [4, 2],
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 4,
      itemName: ['striped pelt', 'silky albino fur'],
      itemQty: [3, 2],
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 5,
      itemName: ['wooly rhino horn', 'cursed mammoth tusks'],
      itemQty: [2, 1],
    },
  ];
  private _crafts: Crafts[] = [];
}
