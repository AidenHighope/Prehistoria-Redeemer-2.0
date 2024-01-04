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
    {
      category: 'hunting',
      name: 'scrap collection',
      requiredItems: [
        { name: 'mauled pelt', qty: 2 },
        { name: 'dewclaw', qty: 2 },
        { name: 'broken bow string', qty: 2 },
      ],
    },
    {
      category: 'hunting',
      name: 'scrap collection',
      requiredItems: [
        { name: 'elk pelt', qty: 3 },
        { name: 'striped pelt', qty: 2 },
      ],
    },
    {
      category: 'hunting',
      name: 'balance and providing',
      requiredItems: [{ name: 'chimeric pelt', qty: 2 }],
    },
    {
      category: 'fishing',
      name: 'bounty of the seas',
      phaseId: 1,
      requiredItems: [{ name: 'coral', qty: 5 }],
    },
    {
      category: 'fishing',
      name: 'bounty of the seas',
      phaseId: 2,
      requiredItems: [{ name: 'ammonite shell', qty: 5 }],
    },
    {
      category: 'fishing',
      name: 'bounty of the seas',
      phaseId: 3,
      requiredItems: [
        { name: 'henodus shell', qty: 4 },
        { name: 'horseshoe crab shell', qty: 2 },
      ],
    },
    {
      category: 'fishing',
      name: 'bounty of the seas',
      phaseId: 4,
      requiredItems: [
        { name: 'megalodon tooth', qty: 3 },
        { name: 'golden coelacanth scale', qty: 1 },
        { name: 'large shining scale', qty: 1 },
      ],
    },
    {
      category: 'fishing',
      name: 'bounty of the seas',
      phaseId: 5,
      requiredItems: [
        { name: 'megalodon tooth', qty: 2 },
        { name: 'megalodon carcass', qty: 1 },
      ],
    },
    {
      category: 'fishing',
      name: 'hungry',
      requiredItems: [
        { name: 'black coelacanth', qty: 2 },
        { name: 'sabertooth salmon', qty: 2 },
        { name: 'eurypterid', qty: 2 },
      ],
    },
    {
      category: 'fishing',
      name: 'life on the seafloors',
      requiredItems: [{ name: 'opabinia', qty: 4 }],
    },
    {
      category: 'fishing',
      name: 'the hardest armor',
      requiredItems: [{ name: 'dunkleosteus', qty: 2 }],
    },
    {
      category: 'discovery',
      name: 'lending a helping paw',
      phaseId: 1,
      requiredItems: [{ name: 'sinew rope', qty: 5 }],
    },
    {
      category: 'discovery',
      name: 'lending a helping paw',
      phaseId: 2,
      requiredItems: [{ name: 'antler spear head', qty: 5 }],
    },
    {
      category: 'discovery',
      name: 'lending a helping paw',
      phaseId: 3,
      requiredItems: [
        { name: 'sturdy lumber', qty: 4 },
        { name: 'jagged tooth knife', qty: 2 },
      ],
    },
    {
      category: 'discovery',
      name: 'lending a helping paw',
      phaseId: 4,
      requiredItems: [
        { name: 'ancient metal rings', qty: 3 },
        { name: 'obsidian blade', qty: 2 },
      ],
    },
    {
      category: 'discovery',
      name: 'lending a helping paw',
      phaseId: 5,
      requiredItems: [
        { name: 'moonsteel bar', qty: 1 },
        { name: 'skyfire diamond', qty: 1 },
      ],
    },
    {
      category: 'discovery',
      name: 'crafty',
      requiredItems: [
        { name: 'leather strips', qty: 3 },
        { name: 'ochre', qty: 2 },
      ],
    },
    {
      category: 'discovery',
      name: 'the shaman new clothes',
      requiredItems: [
        { name: 'ancient jewelry', qty: 2 },
        { name: 'ancient metal rings', qty: 2 },
        { name: 'assorted feathers', qty: 1 },
      ],
    },
    {
      category: 'discovery',
      name: 'shiny!',
      requiredItems: [{ name: 'skyfire diamond', qty: 2 }],
    },
    {
      category: 'foraging',
      name: 'apex herbivore',
      phaseId: 1,
      requiredItems: [{ name: 'chamomile', qty: 5 }],
    },
    {
      category: 'foraging',
      name: 'apex herbivore',
      phaseId: 2,
      requiredItems: [{ name: 'aleo vera', qty: 5 }],
    },
    {
      category: 'foraging',
      name: 'apex herbivore',
      phaseId: 3,
      requiredItems: [
        { name: 'apple', qty: 3 },
        { name: 'parsnip', qty: 2 },
      ],
    },
    {
      category: 'foraging',
      name: 'apex herbivore',
      phaseId: 4,
      requiredItems: [{ name: 'catnip', qty: 4 }],
    },
    {
      category: 'foraging',
      name: 'apex herbivore',
      phaseId: 5,
      requiredItems: [
        { name: 'hawthorn', qty: 2 },
        { name: 'strawberries', qty: 1 },
      ],
    },
    {
      category: 'foraging',
      name: 'flying tomatoes',
      requiredItems: [{ name: 'tomato', qty: 5 }],
    },
    {
      category: 'foraging',
      name: 'potato master',
      requiredItems: [{ name: 'potato', qty: 26 }],
    },
    {
      category: 'foraging',
      name: 'sweeter than a cherry pie',
      requiredItems: [{ name: 'cherries', qty: 2 }],
    },
    {
      category: 'telt',
      name: 'welcome to the jungle',
      phaseId: 1,
      requiredItems: [{ name: 'titanoboa scales', qty: 5 }],
    },
    {
      category: 'telt',
      name: 'welcome to the jungle',
      phaseId: 2,
      requiredItems: [{ name: 'jade bracelet', qty: 5 }],
    },
    {
      category: 'telt',
      name: 'welcome to the jungle',
      phaseId: 3,
      requiredItems: [
        { name: 'chunk of obsidian', qty: 3 },
        { name: 'golden coin', qty: 2 },
      ],
    },
    {
      category: 'telt',
      name: 'welcome to the jungle',
      phaseId: 4,
      requiredItems: [
        { name: 'sarcosuchus tooth', qty: 3 },
        { name: 'quetzal feathers', qty: 2 },
      ],
    },
    {
      category: 'telt',
      name: 'welcome to the jungle',
      phaseId: 5,
      requiredItems: [
        { name: 'quetzal feathers', qty: 2 },
        { name: 'headdress amulet', qty: 1 },
      ],
    },
    {
      category: 'telt',
      name: 'building a house',
      requiredItems: [{ name: 'red clay brick', qty: 5 }],
    },
    {
      category: 'telt',
      name: "it's a snake!",
      requiredItems: [{ name: 'snake figuring', qty: 5 }],
    },
    {
      category: 'telt',
      name: 'battling giants',
      requiredItems: [{ name: 'sarcosuchus', qty: 2 }],
    },
    {
      category: 'telt',
      name: 'completing the collections',
      requiredItems: [
        { name: 'death', qty: 1 },
        { name: 'deer', qty: 1 },
        { name: 'dog', qty: 1 },
        { name: 'eagle', qty: 1 },
        { name: 'fire', qty: 1 },
        { name: 'flint', qty: 1 },
        { name: 'grass', qty: 1 },
        { name: 'jaguar', qty: 1 },
        { name: 'lizard', qty: 1 },
        { name: 'monkey', qty: 1 },
        { name: 'moon', qty: 1 },
        { name: 'motion', qty: 1 },
        { name: 'rabbit', qty: 1 },
        { name: 'rain', qty: 1 },
        { name: 'reed', qty: 1 },
        { name: 'sarco', qty: 1 },
        { name: 'snake', qty: 1 },
        { name: 'temple', qty: 1 },
        { name: 'vulture', qty: 1 },
        { name: 'water', qty: 1 },
      ],
    },
    {
      category: 'event',
      name: 'warming up',
      requiredItems: [{ name: 'chocolate wreath cookie', qty: 5 }],
    },
    {
      category: 'event',
      name: 'time for cake!',
      requiredItems: [
        { name: 'pine branch', qty: 1 },
        { name: 'mistletoe', qty: 3 },
        { name: 'poinsettia', qty: 5 },
      ],
    },
    {
      category: 'event',
      name: 'gifts for the king',
      requiredItems: [
        { name: 'roast', qty: 1 },
        { name: 'hefty elk haunch', qty: 3 },
        { name: 'mistletoe', qty: 5 },
        { name: 'poinsettia', qty: 5 },
        { name: 'pine branch', qty: 5 },
      ],
    },
    {
      category: 'event',
      name: 'old toys',
      requiredItems: [
        { name: 'chocolates', qty: 5 },
        { name: 'caramel hearts', qty: 3 },
      ],
    },
    {
      category: 'event',
      name: 'magic roses',
      requiredItems: [
        { name: 'bouquet', qty: 1 },
        { name: 'pink rose', qty: 5 },
        { name: 'red rose', qty: 10 },
      ],
    },
    {
      category: 'event',
      name: 'the master of love',
      requiredItems: [
        { name: 'bouquet', qty: 1 },
        { name: 'caramel hearts', qty: 3 },
        { name: 'pink rose', qty: 2 },
        { name: 'red rose', qty: 3 },
        { name: 'sweet hearts', qty: 5 },
      ],
    },
    {
      category: 'event',
      name: 'a nest with golden eggs',
      requiredItems: [
        { name: 'green egg', qty: 10 },
        //TODO handle the fact it's a total of 10 eggs among 3 types
      ],
    },
    {
      category: 'event',
      name: 'eggschange',
      requiredItems: [
        { name: 'rainy egg', qty: 1 },
        { name: 'sunset egg', qty: 3 },
        { name: 'colorful egg', qty: 3 },
        { name: 'green egg', qty: 5 },
      ],
    },
    {
      category: 'event',
      name: 'of bunnies and carrots',
      requiredItems: [
        { name: 'carrot cake', qty: 1 },
        { name: 'pink tulips', qty: 5 },
        { name: 'carrot', qty: 10 },
      ],
    },
    {
      category: 'event',
      name: 'celestial trade',
      requiredItems: [
        { name: 'celestial bead', qty: 1 },
        { name: 'moonstone', qty: 3 },
      ],
    },
    {
      category: 'event',
      name: "a potions' ingredients",
      requiredItems: [
        { name: 'crescent moon bead', qty: 1 },
        { name: 'celestial bead', qty: 3 },
        { name: 'moonstone', qty: 5 },
      ],
    },
    {
      category: 'event',
      name: 'new friend',
      requiredItems: [
        { name: 'celestial satchel', qty: 1 },
        { name: 'crescent moon bead', qty: 3 },
        { name: 'celestial bead', qty: 5 },
        { name: 'moonstone', qty: 10 },
      ],
    },
    {
      category: 'event',
      name: 'new pet',
      requiredItems: [{ name: 'badger pygmy onyc', qty: 1 }],
    },
    {
      category: 'event',
      name: 'ancient books',
      requiredItems: [
        { name: 'sorcerers notes', qty: 3 },
        { name: 'ghastly lantern', qty: 5 },
      ],
    },
    {
      category: 'event',
      name: 'pumpkin-o-plenty',
      requiredItems: [
        { name: 'ghastly lantern', qty: 3 },
        { name: 'jack-o-lantern', qty: 5 },
        { name: 'bloody mask', qty: 10 },
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

  getMilestonesByCategory(input: string): Milestones[] {
    return this._milestones.filter((milestone) => milestone.category === input);
  }
}
