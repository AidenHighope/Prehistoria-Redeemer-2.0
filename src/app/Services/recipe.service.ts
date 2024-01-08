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
  private _crafts: Crafts[] = [
    {
      name: 'hide wrapped quiver',
      difficulty: 'beginner',
      requiredItems: [
        { qty: 3, name: 'mauled pelt' },
        { qty: 1, name: 'assorted feathers' },
        { qty: 1, name: 'sharpened flint' },
      ],
    },
    {
      name: 'simple bait',
      difficulty: 'beginner',
      requiredItems: [
        { qty: 2, name: 'dewclaw' },
        { qty: 2, name: 'succulent fish meat' },
        { qty: 1, name: 'broken bow string' },
      ],
    },
    {
      name: 'map',
      difficulty: 'beginner',
      requiredItems: [
        { qty: 3, name: 'leather strips' },
        { qty: 1, name: 'ochre' },
        { qty: 1, name: 'pristine lion fangs' },
      ],
    },
    {
      name: 'bone sickle',
      difficulty: 'beginner',
      requiredItems: [
        { qty: 2, name: 'antler spear head' },
        { qty: 2, name: 'leather strips' },
        { qty: 1, name: 'thalassomedon skull' },
      ],
    },
    {
      name: 'adornments',
      difficulty: 'beginner',
      requiredItems: [
        { qty: 2, name: 'ammonite shell' },
        { qty: 1, name: 'cave bear claws' },
        { qty: 2, name: 'ancient jewelry' },
      ],
    },
    {
      name: 'battle wounds',
      difficulty: 'beginner',
      requiredItems: [
        { qty: 2, name: 'aloe vera' },
        { qty: 2, name: 'chamomile' },
        { qty: 1, name: 'sharpened flint' },
      ],
    },
    {
      name: 'bowl of paints',
      difficulty: 'beginner',
      requiredItems: [
        { qty: 3, name: 'marigold' },
        { qty: 1, name: 'berries' },
        { qty: 1, name: 'mint' },
      ],
    },
    {
      name: 'cosmetic remover 1',
      difficulty: 'beginner',
      requiredItems: [
        { qty: 2, name: 'aloe vera' },
        { qty: 2, name: 'woven basket' },
        { qty: 1, name: 'sharpened flint' },
      ],
    },
    {
      name: 'companion remover 1',
      difficulty: 'beginner',
      requiredItems: [
        { qty: 3, name: 'sinew rope' },
        { qty: 1, name: 'elk pelt' },
        { qty: 1, name: 'woven basket' },
      ],
    },
    {
      name: 'trait remover 1',
      difficulty: 'beginner',
      requiredItems: [
        { qty: 2, name: 'cloven hooves' },
        { qty: 1, name: 'henodus shell' },
        { qty: 1, name: 'sturdy lumber' },
      ],
    },
    {
      name: 'tack remover 1',
      difficulty: 'beginner',
      requiredItems: [
        { qty: 2, name: 'sabertooth salmon' },
        { qty: 1, name: 'handful of predator teeth' },
        { qty: 1, name: 'nothosaurus claws' },
      ],
    },
    {
      name: 'sharpened spear',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 2, name: 'sinew rope' },
        { qty: 1, name: 'antler spear head' },
        { qty: 1, name: 'megalodon tooth' },
        { qty: 1, name: 'sturdy lumber' },
      ],
    },
    {
      name: 'hand woven net',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 5, name: 'broken bow string' },
        { qty: 1, name: 'ancient metal rings' },
        { qty: 1, name: 'black coelacanth' },
      ],
    },
    {
      name: 'warm bindings',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 3, name: 'warm wolf fur' },
        { qty: 2, name: 'leather strips' },
        { qty: 1, name: 'silky albino fur' },
      ],
    },
    {
      name: 'small plant bag',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 3, name: 'seeds' },
        { qty: 2, name: 'potato' },
        { qty: 1, name: 'catnip' },
        { qty: 1, name: 'elk pelt' },
      ],
    },
    {
      name: 'witches wand',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 4, name: 'leather strips' },
        { qty: 1, name: 'sturdy lumber' },
        { qty: 1, name: 'large shining scale' },
      ],
    },
    {
      name: 'expression changer',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 4, name: 'eurypterid' },
        { qty: 3, name: 'marigold' },
        { qty: 1, name: 'hawthorn' },
      ],
    },
    {
      name: 'ear changer',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 3, name: 'aloe vera' },
        { qty: 2, name: 'broken bow string' },
        { qty: 2, name: 'jagged tooth knife' },
      ],
    },
    {
      name: 'eye changer',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 2, name: 'berries' },
        { qty: 2, name: 'leather strips' },
        { qty: 1, name: 'hawthorn' },
        { qty: 1, name: 'henodus shell' },
      ],
    },
    {
      name: 'magical adornments',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 2, name: 'ammonite shell' },
        { qty: 2, name: 'ancient jewelry' },
        { qty: 2, name: 'cave bear claws' },
        { qty: 1, name: 'large shining scale' },
      ],
    },
    {
      name: 'bait',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 3, name: 'succulent fish meat' },
        { qty: 2, name: 'apple' },
        { qty: 2, name: 'berries' },
        { qty: 1, name: 'catnip' },
      ],
    },
    {
      name: 'tack upgrade',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 4, name: 'leather strips' },
        { qty: 1, name: 'horseshoe crab shell' },
        { qty: 1, name: 'striped pelt' },
      ],
    },
    {
      name: 'health potion',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 3, name: 'chamomile' },
        { qty: 2, name: 'aloe vera' },
        { qty: 2, name: 'berries' },
        { qty: 1, name: 'catnip' },
      ],
    },
    {
      name: 'machuahuilt',
      difficulty: 'apprentice',
      requiredItems: [
        { qty: 3, name: 'chunk of obsidian' },
        { qty: 2, name: 'sarcosuchus tooth' },
        { qty: 2, name: 'turquoise' },
        { qty: 1, name: 'golden coin' },
      ],
    },
    {
      name: 'claw of the great hunt',
      difficulty: 'expert',
      requiredItems: [
        { qty: 4, name: 'pristine lion fangs' },
        { qty: 2, name: 'fragmented soul essence' },
        { qty: 2, name: 'sinew rope' },
        { qty: 1, name: 'obsidian blade' },
      ],
    },
    {
      name: 'glittering talisman',
      difficulty: 'expert',
      requiredItems: [
        { qty: 3, name: 'ancient jewelry' },
        { qty: 2, name: 'broken bow string' },
        { qty: 2, name: 'golden coelacanth scale' },
        { qty: 1, name: 'large shining scale' },
        { qty: 1, name: 'skyfire diamond' },
      ],
    },
    {
      name: 'muddy notes',
      difficulty: 'expert',
      requiredItems: [
        { qty: 4, name: 'ochre' },
        { qty: 2, name: 'elk pelt' },
        { qty: 2, name: 'striped pelt' },
        { qty: 1, name: 'mauled pelt' },
        { qty: 1, name: 'strawberries' },
      ],
    },
    {
      name: 'abandoned foraging basket',
      difficulty: 'expert',
      requiredItems: [
        { qty: 4, name: 'woven basket' },
        { qty: 2, name: 'parsnip' },
        { qty: 2, name: 'tomato' },
        { qty: 1, name: 'elk pelt' },
        { qty: 1, name: 'cherries' },
      ],
    },
    {
      name: 'lucky totem',
      difficulty: 'expert',
      requiredItems: [
        { name: 'berries', qty: 4 },
        { qty: 2, name: 'mint' },
        { qty: 2, name: 'obsidian blade' },
        { qty: 1, name: 'cursed mammoth tusks' },
        { qty: 1, name: 'fragmented soul essence' },
      ],
    },
    {
      name: 'false statue',
      difficulty: 'expert',
      requiredItems: [
        { qty: 6, name: 'mint' },
        { qty: 3, name: 'catnip' },
        { qty: 1, name: 'megalodon carcass' },
      ],
    },
    {
      name: 'false donii',
      difficulty: 'expert',
      requiredItems: [
        { qty: 5, name: 'coral' },
        { qty: 3, name: 'obsidian blade' },
        { qty: 1, name: 'dunkleosteus' },
      ],
    },
    {
      name: 'potion of oblivion',
      difficulty: 'expert',
      requiredItems: [
        { qty: 1, name: 'fragmented soul essence' },
        { qty: 1, name: 'hawthorn' },
        { qty: 4, name: 'marigold' },
        { qty: 1, name: 'moonsteel bar' },
        { qty: 1, name: 'opabinia' },
      ],
    },
    {
      name: 'cosmetic remover 2',
      difficulty: 'expert',
      requiredItems: [
        { qty: 4, name: 'woven basket' },
        { qty: 2, name: 'aloe vera' },
        { qty: 2, name: 'jagged tooth knife' },
        { qty: 2, name: 'fragmented soul essence' },
      ],
    },
    {
      name: 'companion remover 2',
      difficulty: 'expert',
      requiredItems: [
        { qty: 3, name: 'succulent fish meat' },
        { qty: 2, name: 'apple' },
        { qty: 2, name: 'catnip' },
        { qty: 1, name: 'chimeric pelt' },
        { qty: 1, name: 'silky albino fur' },
      ],
    },
    {
      name: 'trait remover 2',
      difficulty: 'expert',
      requiredItems: [
        { qty: 3, name: 'henodus shell' },
        { qty: 2, name: 'cloven hooves' },
        { qty: 2, name: 'opabinia' },
        { qty: 2, name: 'wooly rhino horn' },
        { qty: 1, name: 'skyfire diamond' },
      ],
    },
    {
      name: 'tack remover 2',
      difficulty: 'expert',
      requiredItems: [
        { qty: 3, name: 'sabertooth salmon' },
        { qty: 2, name: 'fragmented soul essence' },
        { qty: 2, name: 'handful of predator teeth' },
        { qty: 2, name: 'nothosaurus claws' },
        { qty: 1, name: 'megalodon tooth' },
      ],
    },
    {
      name: 'wooden spirit idol',
      difficulty: 'expert',
      requiredItems: [
        { qty: 4, name: 'sharpened flint' },
        { qty: 2, name: 'fragmented soul essence' },
        { qty: 2, name: 'sturdy lumber' },
        { qty: 1, name: 'jagged tooth knife' },
        { qty: 1, name: 'obsidian blade' },
      ],
    },
    {
      name: 'species advantage booster',
      difficulty: 'expert',
      requiredItems: [
        { qty: 4, name: 'cloven hooves' },
        { qty: 2, name: 'ammonite shell' },
        { qty: 2, name: 'ancient metal rings' },
        { qty: 1, name: 'cherries' },
      ],
    },
    {
      name: 'event booster',
      difficulty: 'expert',
      requiredItems: [
        { qty: 4, name: 'tomato' },
        { qty: 2, name: 'antler spear head' },
        { qty: 2, name: 'opabinia' },
        { qty: 1, name: 'dunkleosteus' },
      ],
    },
    {
      name: 'potion of wisdom',
      difficulty: 'expert',
      requiredItems: [
        { qty: 4, name: 'black coelacanth' },
        { qty: 3, name: 'assorted feathers' },
        { qty: 1, name: 'horseshoe crab shell' },
        { qty: 1, name: 'megalodon carcass' },
      ],
    },
    {
      name: 'lovingly carved donii',
      difficulty: 'master',
      requiredItems: [
        { qty: 4, name: 'nothosaurus claws' },
        { qty: 3, name: 'fragmented soul essence' },
        { qty: 2, name: 'catnip' },
        { qty: 2, name: 'jagged tooth knife' },
        { qty: 2, name: 'strawberries' },
        { qty: 1, name: 'cursed mammoth tusks' },
      ],
    },
    {
      name: 'crude steel statue',
      difficulty: 'master',
      requiredItems: [
        { qty: 4, name: 'henodus shell' },
        { qty: 3, name: 'fragmented soul essence' },
        { qty: 2, name: 'cherries' },
        { qty: 2, name: 'hawthorn' },
        { qty: 2, name: 'striped pelt' },
        { qty: 1, name: 'moonsteel bar' },
      ],
    },
    {
      name: 'witches brew',
      difficulty: 'master',
      requiredItems: [
        { qty: 4, name: 'mint' },
        { qty: 3, name: 'assorted feathers' },
        { qty: 3, name: 'silky albino fur' },
        { qty: 2, name: 'megalodon carcass' },
        { qty: 2, name: 'opabinia' },
        { qty: 1, name: 'chimeric pelt' },
      ],
    },
    {
      name: 'golden charm of bending',
      difficulty: 'master',
      requiredItems: [
        { qty: 3, name: 'golden coelacanth scale' },
        { qty: 2, name: 'long forgotten coin' },
        { qty: 2, name: 'obsidian blade' },
        { qty: 1, name: 'skyfire diamond' },
        { qty: 1, name: 'strawberries' },
      ],
    },
    {
      name: 'golden charm of shapeshifting',
      difficulty: 'master',
      requiredItems: [
        { qty: 5, name: 'fragmented soul essence' },
        { qty: 3, name: 'golden coelacanth scale' },
        { qty: 2, name: 'long forgotten coin' },
        { qty: 2, name: 'obsidian blade' },
        { qty: 1, name: 'skyfire diamond' },
      ],
    },
    {
      name: 'golden charm of altering',
      difficulty: 'master',
      requiredItems: [
        { qty: 3, name: 'golden coelacanth scale' },
        { qty: 2, name: 'long forgotten coin' },
        { qty: 2, name: 'obsidian blade' },
        { qty: 1, name: 'large shining scale' },
        { qty: 1, name: 'skyfire diamond' },
      ],
    },
    {
      name: 'head armor',
      difficulty: 'master',
      requiredItems: [
        { qty: 4, name: 'handful of predator teeth' },
        { qty: 4, name: 'thalassomedon skull' },
        { qty: 3, name: 'ancient metal rings' },
        { qty: 2, name: 'silky albino fur' },
        { qty: 1, name: 'dunkleosteus' },
      ],
    },
    {
      name: 'leg armor',
      difficulty: 'master',
      requiredItems: [
        { qty: 4, name: 'handful of predator teeth' },
        { qty: 4, name: 'nothosaurus claws' },
        { qty: 3, name: 'ancient metal rings' },
        { qty: 2, name: 'silky albino fur' },
        { qty: 1, name: 'dunkleosteus' },
      ],
    },
    {
      name: 'body armor',
      difficulty: 'master',
      requiredItems: [
        { qty: 5, name: 'handful of predator teeth' },
        { qty: 4, name: 'ancient metal rings' },
        { qty: 3, name: 'silky albino fur' },
        { qty: 2, name: 'dunkleosteus' },
        { qty: 2, name: 'wooly rhino horn' },
      ],
    },
    {
      name: 'custom title',
      difficulty: 'master',
      requiredItems: [
        { qty: 4, name: 'berries' },
        { qty: 3, name: 'ammonite shell' },
        { qty: 2, name: 'ancient metal rings' },
        { qty: 2, name: 'mint' },
        { qty: 1, name: 'chimeric pelt' },
        { qty: 1, name: 'moonsteel bar' },
      ],
    },
    {
      name: 'headdress of the stars',
      difficulty: 'master',
      requiredItems: [
        { qty: 5, name: 'quetzal feathers' },
        { qty: 4, name: 'golden coin' },
        { qty: 3, name: 'chunk of obsidian' },
        { qty: 2, name: 'headdress amulet' },
      ],
    },
  ];

  getAllCrafts(): Crafts[] {
    return this._crafts;
  }

  getCraftables(requiredItems: Ingredients[]): Crafts[] {
    return this._crafts.filter((crafts) => {
      let allItemsPresent = crafts.requiredItems.every((requiredItem) => {
        let matchingItem = requiredItems.find(
          (playerItem) =>
            playerItem.name.toLowerCase() === requiredItem.name.toLowerCase()
        );

        return matchingItem && matchingItem.qty >= requiredItem.qty;
      });

      return allItemsPresent;
    });
  }

  getCraftsByLevel(level: string): Crafts[] {
    return this._crafts.filter((crafts) => crafts.difficulty === level);
  }

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
