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
      reward: {
        item: '1x Stone of Arwii OR 1x Ancient Life Rune',
        type: 'breeding',
      },
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 2,
      requiredItems: [{ name: 'warm wolf fur', qty: 5 }],
      reward: { item: '1x Sharpened Spear', type: 'tack' },
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 3,
      requiredItems: [
        { name: 'pristine lion fangs', qty: 4 },
        { name: 'silky albino fur', qty: 2 },
      ],
      reward: { item: '1x Claw of the Great Hunt', type: 'tack' },
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 4,
      requiredItems: [
        { name: 'striped pelt', qty: 3 },
        { name: 'silky albino fur', qty: 2 },
      ],
      reward: {
        item: '1x Megalania OR 1x Daeodon OR 1x Gorgonops',
        type: 'tack',
      },
    },
    {
      category: 'hunting',
      name: 'Protecting the Homelands',
      phaseId: 5,
      requiredItems: [
        { name: 'wooly rhino horn', qty: 2 },
        { name: 'cursed mammoth tusks', qty: 1 },
      ],
      reward: {
        item: '1x Predator of the Plains Title and 1x Lovingly Carved Donii OR 1x Crude Steel Statue',
        type: 'breeding',
      },
    },
    {
      category: 'hunting',
      name: 'scrap collection',
      requiredItems: [
        { name: 'mauled pelt', qty: 2 },
        { name: 'dewclaw', qty: 2 },
        { name: 'broken bow string', qty: 2 },
      ],
      reward: { item: '1x Bloodied String of Beads', type: 'misc' },
    },
    {
      category: 'hunting',
      name: 'Overpopulated',
      requiredItems: [
        { name: 'elk pelt', qty: 3 },
        { name: 'striped pelt', qty: 2 },
      ],
      reward: { item: '2x Long Forgotten Coin', type: 'currency' },
    },
    {
      category: 'hunting',
      name: 'balance and providing',
      requiredItems: [{ name: 'chimeric pelt', qty: 2 }],
      reward: {
        item: '1x Exotic Companion Token for the first time, 1x Rare Companion Token for every other time submitting this Milestone',
        type: 'tack',
      },
    },
    {
      category: 'fishing',
      name: 'bounty of the seas',
      phaseId: 1,
      requiredItems: [{ name: 'coral', qty: 5 }],
      reward: {
        item: '1x Stone of Arwii OR 1x Ancient Life Rune',
        type: 'breeding',
      },
    },
    {
      category: 'fishing',
      name: 'bounty of the seas',
      phaseId: 2,
      requiredItems: [{ name: 'ammonite shell', qty: 5 }],
      reward: { item: '1x Hand Woven Net', type: 'tack' },
    },
    {
      category: 'fishing',
      name: 'bounty of the seas',
      phaseId: 3,
      requiredItems: [
        { name: 'henodus shell', qty: 4 },
        { name: 'horseshoe crab shell', qty: 2 },
      ],
      reward: { item: '1x Glittering Talisman', type: 'tack' },
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
      reward: {
        item: '1x Baby Thalattoarchon OR 1x Gomphotaria OR 1x Coelacanth',
        type: 'tack',
      },
    },
    {
      category: 'fishing',
      name: 'bounty of the seas',
      phaseId: 5,
      requiredItems: [
        { name: 'megalodon tooth', qty: 2 },
        { name: 'megalodon carcass', qty: 1 },
      ],
      reward: {
        item: '1x Stalker of the High Seas Title and 1x Lovingly Carved Donii OR 1x Crude Steel Statue',
        type: 'breeding',
      },
    },
    {
      category: 'fishing',
      name: 'hungry',
      requiredItems: [
        { name: 'black coelacanth', qty: 2 },
        { name: 'sabertooth salmon', qty: 2 },
        { name: 'eurypterid', qty: 2 },
      ],
      reward: { item: '1x Large Shining Scale', type: 'misc' },
    },
    {
      category: 'fishing',
      name: 'life on the seafloors',
      requiredItems: [{ name: 'opabinia', qty: 4 }],
      reward: { item: '4x Trait Shard', type: 'currency' },
    },
    {
      category: 'fishing',
      name: 'the hardest armor',
      requiredItems: [{ name: 'dunkleosteus', qty: 2 }],
      reward: {
        item: '1x Any God, Ancient Temple, Special, Event or Merchants Background for the first time, 1x Any Special, Event or Merchants Background for every other time submitting this Milestone',
        type: 'misc',
      },
    },
    {
      category: 'discovery',
      name: 'lending a helping paw',
      phaseId: 1,
      requiredItems: [{ name: 'sinew rope', qty: 5 }],
      reward: {
        item: '1x Stone of Arwii OR 1x Ancient Life Rune',
        type: 'breeding',
      },
    },
    {
      category: 'discovery',
      name: 'lending a helping paw',
      phaseId: 2,
      requiredItems: [{ name: 'antler spear head', qty: 5 }],
      reward: { item: '1x Warm Bindings', type: 'tack' },
    },
    {
      category: 'discovery',
      name: 'lending a helping paw',
      phaseId: 3,
      requiredItems: [
        { name: 'sturdy lumber', qty: 4 },
        { name: 'jagged tooth knife', qty: 2 },
      ],
      reward: { item: '1x Muddy Notes', type: 'tack' },
    },
    {
      category: 'discovery',
      name: 'lending a helping paw',
      phaseId: 4,
      requiredItems: [
        { name: 'ancient metal rings', qty: 3 },
        { name: 'obsidian blade', qty: 2 },
      ],
      reward: {
        item: '1x Cistecephalus OR 1x Muskox Calf OR 1x Pigeon',
        type: 'tack',
      },
    },
    {
      category: 'discovery',
      name: 'lending a helping paw',
      phaseId: 5,
      requiredItems: [
        { name: 'moonsteel bar', qty: 1 },
        { name: 'skyfire diamond', qty: 1 },
      ],
      reward: {
        item: '1x The Honored Title and 1x Lovingly Carved Donii OR 1x Crude Steel Statue',
        type: 'breeding',
      },
    },
    {
      category: 'discovery',
      name: 'crafty',
      requiredItems: [
        { name: 'leather strips', qty: 3 },
        { name: 'ochre', qty: 2 },
      ],
      reward: { item: '1x Polished Wooden Beads', type: 'misc' },
    },
    {
      category: 'discovery',
      name: 'the shaman new clothes',
      requiredItems: [
        { name: 'ancient jewelry', qty: 2 },
        { name: 'ancient metal rings', qty: 2 },
        { name: 'assorted feathers', qty: 1 },
      ],
      reward: {
        item: '1x Long Forgotten Coin and 2x Trait Shard',
        type: 'currency',
      },
    },
    {
      category: 'discovery',
      name: 'shiny!',
      requiredItems: [{ name: 'skyfire diamond', qty: 2 }],
      reward: {
        item: '1x Any Primal, NPC or God / Godesses Slot (excluding Xanmeer, Ichtaca, Nantli, Purrtato, Lady and Old Bear) for the first time, 1x Any Primal Slot for every other time submitting this Milestone',
        type: 'breeding',
      },
    },
    {
      category: 'foraging',
      name: 'apex herbivore',
      phaseId: 1,
      requiredItems: [{ name: 'chamomile', qty: 5 }],
      reward: {
        item: '1x Stone of Arwii OR 1x Ancient Life Rune',
        type: 'breeding',
      },
    },
    {
      category: 'foraging',
      name: 'apex herbivore',
      phaseId: 2,
      requiredItems: [{ name: 'aleo vera', qty: 5 }],
      reward: { item: '1x Small Plant Bag', type: 'tack' },
    },
    {
      category: 'foraging',
      name: 'apex herbivore',
      phaseId: 3,
      requiredItems: [
        { name: 'apple', qty: 3 },
        { name: 'parsnip', qty: 2 },
      ],
      reward: { item: '1x Abandoned Foraging Basket', type: 'tack' },
    },
    {
      category: 'foraging',
      name: 'apex herbivore',
      phaseId: 4,
      requiredItems: [{ name: 'catnip', qty: 4 }],
      reward: {
        item: '1x Saber Squirrel OR 1x Baby Metridiochoerus OR 1x Chalicotherium',
        type: 'tack',
      },
    },
    {
      category: 'foraging',
      name: 'apex herbivore',
      phaseId: 5,
      requiredItems: [
        { name: 'hawthorn', qty: 2 },
        { name: 'strawberries', qty: 1 },
      ],
      reward: {
        item: '1x The Herbalist Title and 1x Lovingly Carved Donii OR 1x Crude Steel Statue',
        type: 'breeding',
      },
    },
    {
      category: 'foraging',
      name: 'flying tomatoes',
      requiredItems: [{ name: 'tomato', qty: 5 }],
      reward: { item: '1x Wiggling Burlap Sack', type: 'misc' },
    },
    {
      category: 'foraging',
      name: 'potato master',
      requiredItems: [{ name: 'potato', qty: 26 }],
      reward: { item: '1x Horn of Beasts', type: 'tack' },
    },
    {
      category: 'foraging',
      name: 'sweeter than a cherry pie',
      requiredItems: [{ name: 'cherries', qty: 2 }],
      reward: {
        item: '1x Any Common, Uncommon, Rare, Exotic or Misc Trait (excluding Traits gained with Harmony Ranks or through Trials / the Lifemate status) for the first time, 1x Any Common, Uncommon or Rare Trait for every other time submitting this Milestone',
        type: 'tack',
      },
    },
    {
      category: 'telt',
      name: 'welcome to the jungle',
      phaseId: 1,
      requiredItems: [{ name: 'titanoboa scales', qty: 5 }],
      reward: {
        item: '1x Stone of Arwii OR 1x Ancient Life Rune',
        type: 'breeding',
      },
    },
    {
      category: 'telt',
      name: 'welcome to the jungle',
      phaseId: 2,
      requiredItems: [{ name: 'jade bracelet', qty: 5 }],
      reward: { item: '1x Golden Saber Idol', type: 'tack' },
    },
    {
      category: 'telt',
      name: 'welcome to the jungle',
      phaseId: 3,
      requiredItems: [
        { name: 'chunk of obsidian', qty: 3 },
        { name: 'golden coin', qty: 2 },
      ],
      reward: { item: '1x Machuahuitl', type: 'tack' },
    },
    {
      category: 'telt',
      name: 'welcome to the jungle',
      phaseId: 4,
      requiredItems: [
        { name: 'sarcosuchus tooth', qty: 3 },
        { name: 'quetzal feathers', qty: 2 },
      ],
      reward: { item: '1x Jaguar Cub of your choice', type: 'tack' },
    },
    {
      category: 'telt',
      name: 'welcome to the jungle',
      phaseId: 5,
      requiredItems: [
        { name: 'quetzal feathers', qty: 2 },
        { name: 'headdress amulet', qty: 1 },
      ],
      reward: {
        item: '1x The Legend of the Jungle Title and 1x Lovingly Carved Donii OR 1x Crude Steel Statue',
        type: 'breeding',
      },
    },
    {
      category: 'telt',
      name: 'building a house',
      requiredItems: [{ name: 'red clay brick', qty: 5 }],
      reward: { item: '2x Golden Coin', type: 'misc' },
    },
    {
      category: 'telt',
      name: "it's a snake!",
      requiredItems: [{ name: 'snake figuring', qty: 5 }],
      reward: { item: '1x Ear Mutation', type: 'misc' },
    },
    {
      category: 'telt',
      name: 'battling giants',
      requiredItems: [{ name: 'sarcosuchus', qty: 2 }],
      reward: {
        item: '1x Obsidian Saber for the first time, 5x Long Forgotten Coin for every other time submitting this Milestone',
        type: 'currency',
      },
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
      reward: { item: '1x Special Tetl Calendar BG', type: 'misc' },
    },
    {
      category: 'event',
      name: 'warming up',
      requiredItems: [{ name: 'chocolate wreath cookie', qty: 5 }],
      reward: { item: '1x Hot Chocolate', type: 'misc' },
    },
    {
      category: 'event',
      name: 'time for cake!',
      requiredItems: [
        { name: 'pine branch', qty: 1 },
        { name: 'mistletoe', qty: 3 },
        { name: 'poinsettia', qty: 5 },
      ],
      reward: { item: '1x Log Cake', type: 'misc' },
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
      reward: {
        item: '1x Slot to the Snow King (Claimable once per Account per Event)',
        type: 'breeding',
      },
    },
    {
      category: 'event',
      name: 'old toys',
      requiredItems: [
        { name: 'chocolates', qty: 5 },
        { name: 'caramel hearts', qty: 3 },
      ],
      reward: { item: '1x Stitched Bear', type: 'breeding' },
    },
    {
      category: 'event',
      name: 'magic roses',
      requiredItems: [
        { name: 'bouquet', qty: 1 },
        { name: 'pink rose', qty: 5 },
        { name: 'red rose', qty: 10 },
      ],
      reward: {
        item: '1x Rainbow Rose (Claimable twice per Account per Event)',
        type: 'breeding',
      },
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
      reward: {
        item: '1x Slot to Shaggy (Claimable once per Account per Event)',
        type: 'breeding',
      },
    },
    {
      category: 'event',
      name: 'a nest with golden eggs',
      requiredItems: [
        { name: 'green eggs', qty: 10 },
        //TODO handle the fact it's a total of 10 eggs among 3 types
      ],
      reward: { item: '3x Golden Eggs', type: 'misc' },
    },
    {
      category: 'event',
      name: 'eggschange',
      requiredItems: [
        { name: 'rainy eggs', qty: 1 },
        { name: 'sunset egg', qty: 3 },
        { name: 'colorful egg', qty: 3 },
        { name: 'green eggs', qty: 5 },
      ],
      reward: { item: '1x Chocolate Eggs', type: 'misc' },
    },
    {
      category: 'event',
      name: 'of bunnies and carrots',
      requiredItems: [
        { name: 'carrot cake', qty: 1 },
        { name: 'pink tulips', qty: 5 },
        { name: 'carrots', qty: 10 },
      ],
      reward: {
        item: '1x Mr. Bunbun (Claimable twice per Account per Event)',
        type: 'tack',
      },
    },
    {
      category: 'event',
      name: 'celestial trade',
      requiredItems: [
        { name: 'celestial bead', qty: 1 },
        { name: 'moonstone', qty: 3 },
      ],
      reward: { item: '1x Celestial Satchel', type: 'misc' },
    },
    {
      category: 'event',
      name: "a potions' ingredients",
      requiredItems: [
        { name: 'crescent moon bead', qty: 1 },
        { name: 'celestial bead', qty: 3 },
        { name: 'moonstone', qty: 5 },
      ],
      reward: {
        item: '1x Potion of the Night OR 1x Favored of Umbru Title',
        type: 'breeding',
      },
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
      reward: {
        item: "1x Umbru's Familiar (Claimable twice per Account per Event)",
        type: 'tack',
      },
    },
    {
      category: 'event',
      name: 'new pet',
      requiredItems: [{ name: 'badger pygmy onyc', qty: 1 }],
      reward: { item: '1x Clump of Moss OR 1x Bat Hunter Title', type: 'misc' },
    },
    {
      category: 'event',
      name: 'ancient books',
      requiredItems: [
        { name: 'sorcerers notes', qty: 3 },
        { name: 'ghastly lantern', qty: 5 },
      ],
      reward: { item: '1x Grimoire', type: 'misc' },
    },
    {
      category: 'event',
      name: 'pumpkin-o-plenty',
      requiredItems: [
        { name: 'ghastly lantern', qty: 3 },
        { name: 'jack-o-lantern', qty: 5 },
        { name: 'bloody mask', qty: 10 },
      ],
      reward: {
        item: '1x Pumpkin-O-Plenty: Trait Stone (Claimable twice per Account per Event)',
        type: 'tack',
      },
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

  getMilestonesByReward(input: string): Milestones[] {
    return this._milestones.filter(
      (milestone) => milestone.reward?.type === input
    );
  }
}
