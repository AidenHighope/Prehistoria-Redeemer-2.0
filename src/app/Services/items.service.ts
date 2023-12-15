import { Injectable } from '@angular/core';
import { gameitems, redeemItem } from '../Models/Game-item';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}

  //#region FakeDB
  private _database: gameitems[] = [
    { name: 'broken bow string', category: 'hunting', price: 20 },
    { name: 'mauled pelt', category: 'hunting', price: 40 },
    { name: 'dewclaw', category: 'hunting', price: 60 },
    { name: 'cloven hooves', category: 'hunting', price: 80 },
    { name: 'cave bear claws', category: 'hunting', price: 100 },
    { name: 'warm wolf fur', category: 'hunting', price: 200 },
    { name: 'handful of predator teeth', category: 'hunting', price: 230 },
    { name: 'pristine lion fangs', category: 'hunting', price: 260 },
    { name: 'elk pelt', category: 'hunting', price: 300 },
    { name: 'striped pelt', category: 'hunting', price: 400 },
    { name: 'silky albino fur', category: 'hunting', price: 450 },
    { name: 'wooly rhino horn', category: 'hunting', price: 500 },
    { name: 'cursed mammoth tusk', category: 'hunting', price: 700 },
    { name: 'chimeric pelt', category: 'hunting', price: 800 },
    { name: 'coral', category: 'fishing', price: 20 },
    { name: 'Eurypterid', category: 'fishing', price: 40 },
    { name: 'succulent fish meat', category: 'fishing', price: 60 },
    { name: 'black coelacanth', category: 'fishing', price: 80 },
    { name: 'sabertooth salmon', category: 'fishing', price: 100 },
    { name: 'Ammonite Shell', category: 'fishing', price: 200 },
    { name: 'Golden Coelacanth Scale', category: 'fishing', price: 200 },
    { name: 'Large Shining Scale', category: 'fishing', price: 200 },
    { name: 'Nothosaurus claw', category: 'fishing', price: 230 },
    { name: 'Henodus shell', category: 'fishing', price: 260 },
    { name: 'thalassomedon skull', category: 'fishing', price: 300 },
    { name: 'opabinia', category: 'fishing', price: 400 },
    { name: 'horseshoe crab shell', category: 'fishing', price: 450 },
    { name: 'megalodon tooth', category: 'fishing', price: 500 },
    { name: 'dunkleosteus', category: 'fishing', price: 700 },
    { name: 'megalodon carcass', category: 'fishing', price: 800 },
    { name: 'ochre', category: 'discovery', price: 20 },
    { name: 'leather strips', category: 'discovery', price: 40 },
    { name: 'sharpened flint', category: 'discovery', price: 60 },
    { name: 'sinew rope', category: 'discovery', price: 80 },
    { name: 'woven basket', category: 'discovery', price: 100 },
    { name: 'assorted feathers', category: 'discovery', price: 200 },
    { name: 'ancient jewelry', category: 'discovery', price: 230 },
    { name: 'antler spear head', category: 'discovery', price: 260 },
    { name: 'sturdy lumber', category: 'discovery', price: 300 },
    { name: 'ancient metal ring', category: 'discovery', price: 400 },
    { name: 'jagged tooth knife', category: 'discovery', price: 450 },
    { name: 'obsidian blade', category: 'discovery', price: 500 },
    { name: 'Moonsteel bar', category: 'discovery', price: 700 },
    { name: 'skyfire diamond', category: 'discovery', price: 800 },
    { name: 'golden sabertooth idol', category: 'discovery', price: 3000 },
    { name: 'seeds', category: 'foraging', price: 20 },
    { name: 'tomato', category: 'foraging', price: 40 },
    { name: 'potato', category: 'foraging', price: 60 },
    { name: 'chamomile', category: 'foraging', price: 80 },
    { name: 'marigold', category: 'foraging', price: 100 },
    { name: 'berries', category: 'foraging', price: 200 },
    { name: 'apple', category: 'foraging', price: 230 },
    { name: 'mint', category: 'foraging', price: 260 },
    { name: 'aloe vera', category: 'foraging', price: 300 },
    { name: 'catnip', category: 'foraging', price: 400 },
    { name: 'parsnip', category: 'foraging', price: 450 },
    { name: 'hawthorn', category: 'foraging', price: 500 },
    { name: 'strawberries', category: 'foraging', price: 700 },
    { name: 'cherries', category: 'foraging', price: 800 },
    { name: 'titanoboa scales', category: 'telt', price: 220 },
    { name: 'passion fruit', category: 'telt', price: 240 },
    { name: 'vanilla', category: 'telt', price: 260 },
    { name: 'red clay brick', category: 'telt', price: 280 },
    { name: 'turquoise', category: 'telt', price: 300 },
    { name: 'snake figuring', category: 'telt', price: 400 },
    { name: 'chunk of obsidian', category: 'telt', price: 430 },
    { name: 'jade bracelet', category: 'telt', price: 460 },
    { name: 'jaguar statuette', category: 'telt', price: 500 },
    { name: 'sarcosuchus tooth', category: 'telt', price: 600 },
    { name: 'quetzal feathers', category: 'telt', price: 650 },
    { name: 'golden coin', category: 'telt', price: 700 },
    { name: 'sarchosuchus', category: 'telt', price: 900 },
    { name: 'headdress amulet', category: 'telt', price: 1000 },
    { name: 'Obsidian Saber', category: 'telt', price: 3000 },
    { name: 'wandering ancient', category: 'telt', price: 0 },
    { name: 'Calendar Piece: death', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: deer', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: dog', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: eagle', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: fire', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: flint', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: grass', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: jaguar', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: lizard', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: monkey', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: moon', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: motion', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: rabbit', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: rain', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: reed', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: sarco', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: snake', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: temple', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: vulture', category: 'calendar', price: 350 },
    { name: 'Calendar Piece: water', category: 'calendar', price: 350 },
    { name: 'Tawny Hyaenodon', category: 'companions', price: 200 },
    { name: 'spotted Hyaenodon', category: 'companions', price: 200 },
    { name: 'striped Hyaenodon', category: 'companions', price: 200 },
    { name: 'bicolor Hyaenodon', category: 'companions', price: 200 },
    { name: 'tawny Thylacine', category: 'companions', price: 200 },
    { name: 'golden Thylacine', category: 'companions', price: 200 },
    { name: 'pied Thylacine', category: 'companions', price: 200 },
    { name: 'brown Jerboa', category: 'companions', price: 200 },
    { name: 'black Jerboa', category: 'companions', price: 200 },
    { name: 'pied Jerboa', category: 'companions', price: 200 },
    { name: 'tawny Eucladoceros', category: 'companions', price: 200 },
    { name: 'spotted Eucladoceros', category: 'companions', price: 200 },
    { name: 'cream Eucladoceros', category: 'companions', price: 200 },
    { name: 'Red Warrah', category: 'companions', price: 200 },
    { name: 'Black Warrah', category: 'companions', price: 200 },
    { name: 'Striped Warrah', category: 'companions', price: 200 },
    { name: 'tawny Cave Lion Cub', category: 'companions', price: 400 },
    { name: 'spotted Cave Lion Cub', category: 'companions', price: 400 },
    { name: 'Melanistic Cave Lion Cub', category: 'companions', price: 400 },
    { name: 'ivory Megalania', category: 'companions', price: 400 },
    { name: 'nightstalker Megalania', category: 'companions', price: 400 },
    { name: 'snowblind Daeodon', category: 'companions', price: 400 },
    { name: 'silvermane Daeodon', category: 'companions', price: 400 },
    { name: 'stripehide Daeodon', category: 'companions', price: 400 },
    { name: 'spotted Gorgonops', category: 'companions', price: 400 },
    { name: 'red sable Gorgonops', category: 'companions', price: 400 },
    { name: 'melanistic Gorgonops', category: 'companions', price: 400 },
    { name: 'brown Trilobite', category: 'companions', price: 400 },
    { name: 'blue grey Trilobite', category: 'companions', price: 400 },
    {
      name: 'great white Baby Thalattoarchon',
      category: 'companions',
      price: 400,
    },
    {
      name: 'coral reef Baby Thalattoarchon',
      category: 'companions',
      price: 400,
    },
    {
      name: 'erythristic Baby Thalattoarchon',
      category: 'companions',
      price: 400,
    },
    { name: 'liver Gomphotaria', category: 'companions', price: 400 },
    {
      name: 'raindrop glacier Gomphotaria',
      category: 'companions',
      price: 400,
    },
    { name: 'shadow vitiligo Gomphotaria', category: 'companions', price: 400 },
    { name: 'blue Coelacanth', category: 'companions', price: 400 },
    { name: 'earth Coelacanth', category: 'companions', price: 400 },
    { name: 'white Coelacanth', category: 'companions', price: 400 },
    { name: 'stonejaw Titanoboa', category: 'companions', price: 400 },
    { name: 'dunestrike Titanoboa', category: 'companions', price: 400 },
    { name: 'albino diamond Titanoboa', category: 'companions', price: 400 },
    { name: 'warm clay Cistecephalus', category: 'companions', price: 400 },
    { name: 'sunrise Cistecephalus', category: 'companions', price: 400 },
    { name: 'bicolor Cistecephalus', category: 'companions', price: 400 },
    { name: 'tundra Muskox Calf', category: 'companions', price: 400 },
    { name: 'snowstorm Muskox Calf', category: 'companions', price: 400 },
    { name: 'cloudhorn Muskox Calf', category: 'companions', price: 400 },
    { name: 'common grey Pigeon', category: 'companions', price: 400 },
    { name: 'pied Pigeon', category: 'companions', price: 400 },
    { name: 'barred oriental Pigeon', category: 'companions', price: 400 },
    { name: 'sunrunner Hyracotherium', category: 'companions', price: 400 },
    { name: 'twilight Hyracotherium', category: 'companions', price: 400 },
    { name: 'Koi Hyracotherium', category: 'companions', price: 400 },
    { name: 'gray Saber Squirrel', category: 'companions', price: 400 },
    { name: 'darkwood Saber Squirrel', category: 'companions', price: 400 },
    {
      name: 'fire melanistic Saber Squirrel',
      category: 'companions',
      price: 400,
    },
    { name: 'muddy Baby Metridiochoerus', category: 'companions', price: 400 },
    { name: 'pied Baby Metridiochoerus', category: 'companions', price: 400 },
    {
      name: 'darkwood Baby Metridiochoerus',
      category: 'companions',
      price: 400,
    },
    { name: 'oakfist Chalicotherium', category: 'companions', price: 400 },
    { name: 'dustback Chalicotherium', category: 'companions', price: 400 },
    { name: 'marbleside Chalicotherium', category: 'companions', price: 400 },
    { name: 'Pink Dodo', category: 'companions', price: 400 },
    { name: 'Blue Dodo', category: 'companions', price: 400 },
    { name: 'Albino Dodo', category: 'companions', price: 400 },
    { name: 'Brown Wooly Rhino Calf', category: 'companions', price: 400 },
    { name: 'White Wooly Rhino Calf', category: 'companions', price: 400 },
    { name: 'Bicolor Wooly Rhino Calf', category: 'companions', price: 400 },
    { name: 'Dun Equus Foal', category: 'companions', price: 400 },
    { name: 'Cream Dun Equus Foal', category: 'companions', price: 400 },
    { name: 'Pied Palomino Equus Foal', category: 'companions', price: 400 },
    { name: 'Moonblessed Equus Foal', category: 'companions', price: 400 },
    { name: 'Black Terror Bird Chick', category: 'companions', price: 400 },
    { name: 'Spotted Terror Bird Chick', category: 'companions', price: 400 },
    { name: 'Pink Terror Bird Chick', category: 'companions', price: 400 },
    { name: 'Brown Moose', category: 'companions', price: 400 },
    { name: 'Albino Moose', category: 'companions', price: 400 },
    { name: 'Pied Moose', category: 'companions', price: 400 },
    { name: 'Spotted Megaloceros', category: 'companions', price: 400 },
    { name: 'Earthen Megaloceros', category: 'companions', price: 400 },
    { name: 'Cream Megaloceros', category: 'companions', price: 400 },
    { name: 'Brown Wolverine', category: 'companions', price: 400 },
    { name: 'Blone Striped Wolverine', category: 'companions', price: 400 },
    { name: 'Snowstalker Wolverine', category: 'companions', price: 400 },
    { name: 'Pygmy Onyc', category: 'companions', price: 1000 },
    { name: 'Albino Pygmy Onyc', category: 'companions', price: 1000 },
    { name: 'Badger Pygmy Onyc', category: 'companions', price: 1000 },
    { name: 'Polar Cave Bear Cub', category: 'companions', price: 1000 },
    { name: 'Brown Cave Bear Cub', category: 'companions', price: 1000 },
    { name: 'Glacier Cave Bear Cub', category: 'companions', price: 1000 },
    { name: 'spotted spring bunny', category: 'companions', price: 1000 },
    { name: 'brown spring bunny', category: 'companions', price: 1000 },
    { name: 'Earthen Striped Chriacus', category: 'companions', price: 1000 },
    { name: 'Golden Chriacus', category: 'companions', price: 1000 },
    { name: 'Moonblessed Chriacus', category: 'companions', price: 1000 },
    { name: 'Huxli', category: 'companions', price: 1000 },
    { name: 'Luxili', category: 'companions', price: 1000 },
    { name: 'Jungle Jaguar Cub', category: 'companions', price: 1500 },
    { name: 'Golden Jaguar Cub', category: 'companions', price: 1500 },
    { name: 'Black Jaguar Cub', category: 'companions', price: 1500 },
    { name: 'Ginger Jaguar Cub', category: 'companions', price: 1500 },
    { name: 'Calico Jaguar Cub', category: 'companions', price: 1500 },
    { name: 'Pied Jaguar Cub', category: 'companions', price: 1500 },
    { name: 'fawn Tapir', category: 'companions', price: 1500 },
    { name: 'banded Tapir', category: 'companions', price: 1500 },
    { name: 'striped Tapir', category: 'companions', price: 1500 },
    { name: 'brown Josephoartigasia', category: 'companions', price: 1500 },
    { name: 'cream Josephoartigasia', category: 'companions', price: 1500 },
    { name: 'bicolor Josephoartigasia', category: 'companions', price: 1500 },
    { name: 'swamp Glyptodon', category: 'companions', price: 1500 },
    { name: 'mud Glyptodon', category: 'companions', price: 1500 },
    { name: 'golden Glyptodon', category: 'companions', price: 1500 },
    { name: 'sand Macrauchenia', category: 'companions', price: 1500 },
    { name: 'savannah Macrauchenia', category: 'companions', price: 1500 },
    { name: 'moonblessed Macrauchenia', category: 'companions', price: 1500 },
    { name: 'Spectral Trilobite', category: 'companions', price: 0 },
    { name: 'Golden Coelacanth', category: 'companions', price: 0 },
    { name: 'Winter Festival Reindeer', category: 'companions', price: 0 },
    { name: 'Blue Moon Jellyfish', category: 'companions', price: 0 },
    { name: 'Violet Moon Jellyfish', category: 'companions', price: 0 },
    { name: 'Jynx, the sweet pea', category: 'companions', price: 0 },
    { name: 'Impy', category: 'companions', price: 0 },
    { name: 'dima, the baby mammoth', category: 'companions', price: 0 },
    { name: 'red lore keeper familiar', category: 'companions', price: 0 },
    { name: 'blue lore keeper familiar', category: 'companions', price: 0 },
    { name: "hasswei''s familiar", category: 'companions', price: 0 },
    { name: "larkka''s familiar", category: 'companions', price: 0 },
    { name: "Umbru''s Familiar", category: 'companions', price: 0 },
    { name: "Purrtato''s minion", category: 'companions', price: 0 },
    { name: 'Cloverbite', category: 'companions', price: 0 },
    { name: 'mr. bunbun', category: 'companions', price: 0 },
    { name: "Mamota''s Messenger", category: 'companions', price: 0 },
    { name: 'striped otter', category: 'companions', price: 0 },
    { name: 'toasty marshmallow', category: 'companions', price: 0 },
    { name: 'Earthen Mesonyx', category: 'companions', price: 0 },
    { name: 'Pied Mesonyx', category: 'companions', price: 0 },
    { name: 'Sunray Mesonyx', category: 'companions', price: 0 },
    { name: 'Mr. Crayfish', category: 'companions', price: 0 },
    { name: 'Arco, the Archelon Hoarder', category: 'companions', price: 0 },
    { name: 'will o wisp', category: 'companions', price: 0 },
    { name: 'Crismun Fex, the Ice Dancer', category: 'companions', price: 0 },
    { name: 'stardust', category: 'event', price: 100 },
    { name: 'moonstone', category: 'event', price: 500 },
    { name: 'celestial bead', category: 'event', price: 700 },
    { name: 'crescent moon bead', category: 'event', price: 900 },
    { name: 'ghost cookie', category: 'event', price: 100 },
    { name: 'bloody mask', category: 'event', price: 400 },
    { name: 'gnarled branch', category: 'event', price: 500 },
    { name: 'spiderweb', category: 'event', price: 600 },
    { name: 'unidentified fang', category: 'event', price: 600 },
    { name: 'jack-o-lantern', category: 'event', price: 700 },
    { name: 'ghastly lantern', category: 'event', price: 800 },
    { name: "sorcerers'' notes", category: 'event', price: 900 },
    { name: 'festive tree cookie', category: 'event', price: 100 },
    { name: 'poinsettia', category: 'event', price: 400 },
    { name: 'pine branch', category: 'event', price: 500 },
    { name: 'hefty elk haunch', category: 'event', price: 600 },
    { name: 'chocolate wreath cookie', category: 'event', price: 700 },
    { name: 'mistletoe', category: 'event', price: 800 },
    { name: 'sunstone', category: 'event', price: 100 },
    { name: 'red rose', category: 'event', price: 400 },
    { name: 'sweet hearts', category: 'event', price: 500 },
    { name: 'chocolates', category: 'event', price: 600 },
    { name: 'pink rose', category: 'event', price: 600 },
    { name: 'caramel hearts', category: 'event', price: 800 },
    { name: 'sacred water', category: 'event', price: 100 },
    { name: 'green egg', category: 'event', price: 400 },
    { name: 'colorful egg', category: 'event', price: 500 },
    { name: 'sunset egg', category: 'event', price: 600 },
    { name: 'rainy egg', category: 'event', price: 600 },
    { name: 'pink tulip', category: 'event', price: 700 },
    { name: 'carrots', category: 'event', price: 800 },
    { name: 'golden egg', category: 'event', price: 1500 },
    { name: 'birthday cake', category: 'event', price: 0 },
    { name: 'handful of relic fragments', category: 'event', price: 100 },
    { name: 'pouch of relic fragments', category: 'event', price: 250 },
    { name: 'bag of relic fragments', category: 'event', price: 500 },
    { name: 'golden apple', category: 'event', price: 0 },
    { name: 'celestial satchel', category: 'event', price: 1500 },
    { name: 'clump of moss', category: 'event', price: 1000 },
    { name: 'grimoire', category: 'event', price: 0 },
    { name: 'hot chocolate', category: 'event', price: 900 },
    { name: 'log cake', category: 'event', price: 200 },
    { name: 'lovely note', category: 'event', price: 700 },
    { name: 'valentines candle', category: 'event', price: 900 },
    { name: 'bouquet', category: 'event', price: 900 },
    { name: 'chocolate eggs', category: 'event', price: 900 },
    { name: 'golden fox bell', category: 'event', price: 1500 },
    { name: 'carrot cake', category: 'event', price: 1500 },
    { name: 'wiggling burlap sack', category: 'Reveal', price: 10 },
    { name: 'chewed up hunters pack', category: 'reveal', price: 10 },
    { name: 'clawed medicinal bag', category: 'reveal', price: 10 },
    { name: 'carefully wrapped hide package', category: 'reveal', price: 10 },
    { name: 'fertility pouch', category: 'reveal', price: 10 },
    { name: 'bloodied string of beads', category: 'reveal', price: 10 },
    { name: 'polished wooden beads', category: 'reveal', price: 10 },
    { name: 'abandoned saber kitten', category: 'reveal', price: 0 },
    { name: 'abandoned dire worg pup', category: 'reveal', price: 0 },
    { name: 'abandoned equus foal', category: 'reveal', price: 0 },
    { name: 'abandoned ursus cub', category: 'reveal', price: 0 },
    { name: 'abandoned megaloceros calf', category: 'reveal', price: 0 },
    { name: 'abandoned terror bird chick', category: 'reveal', price: 0 },
    { name: 'abandoned woolly mammoth calf', category: 'reveal', price: 0 },
    { name: 'sinew bound chest', category: 'reveal', price: 0 },
    { name: 'overflowing treasure chest', category: 'reveal', price: 0 },
    { name: 'rusty lockbox', category: 'reveal', price: 0 },
    { name: 'loot-filled pumpkin', category: 'reveal', price: 0 },
    { name: 'giant oyster', category: 'reveal', price: 200 },
    { name: 'lucky totem', category: 'tack', price: 750 },
    { name: 'sharpened spear', category: 'tack', price: 800 },
    { name: 'hide wrapped quiver', category: 'tack', price: 500 },
    { name: 'claw of the great hunt', category: 'tack', price: 1500 },
    { name: 'hand woven net', category: 'tack', price: 800 },
    { name: 'simple bait', category: 'tack', price: 500 },
    { name: 'glittering talisman', category: 'tack', price: 1500 },
    { name: 'warm bindings', category: 'tack', price: 800 },
    { name: 'map', category: 'tack', price: 500 },
    { name: 'muddy notes', category: 'tack', price: 1500 },
    { name: 'small plant bag', category: 'tack', price: 800 },
    { name: 'bone sickle', category: 'tack', price: 500 },
    { name: 'abandonned foraging basket', category: 'tack', price: 1500 },
    { name: 'machuahuilt', category: 'tack', price: 1500 },
    { name: 'headdress of the stars', category: 'tack', price: 2000 },
    { name: 'horn of beasts', category: 'tack', price: 1500 },
    { name: 'burning statue', category: 'tack', price: 0 },
    { name: 'runed talisman', category: 'tack', price: 0 },
    { name: 'adornments', category: 'cosmetic', price: 500 },
    { name: 'magical adornments', category: 'cosmetic', price: 2000 },
    { name: 'bowl of paints', category: 'cosmetic', price: 500 },
    { name: 'battle wounds', category: 'cosmetic', price: 500 },
    { name: 'eye changer', category: 'cosmetic', price: 2000 },
    { name: 'expression changer', category: 'cosmetic', price: 2000 },
    { name: 'ear changer', category: 'cosmetic', price: 2000 },
    { name: 'witches wand', category: 'cosmetic', price: 500 },
    { name: 'witches brew', category: 'cosmetic', price: 300 },
    { name: 'custom title', category: 'cosmetic', price: 0 },
    { name: 'blessing of umbru', category: 'cosmetic', price: 900 },
    { name: 'moonflower', category: 'cosmetic', price: 900 },
    { name: 'black rose', category: 'cosmetic', price: 900 },
    { name: 'bone ornament', category: 'cosmetic', price: 900 },
    { name: 'bone bracelet', category: 'cosmetic', price: 900 },
    { name: 'stone of arwii', category: 'breeding', price: 300 },
    { name: 'ancient life rune', category: 'breeding', price: 600 },
    { name: 'false statue', category: 'breeding', price: 0 },
    { name: 'crude steel statue', category: 'breeding', price: 0 },
    { name: 'False donii', category: 'breeding', price: 0 },
    { name: 'lovingly carved donii', category: 'breeding', price: 0 },
    { name: 'roast', category: 'breeding', price: 1000 },
    { name: 'potion of wisdom', category: 'breeding', price: 0 },
    { name: 'golden charm of bending', category: 'breeding', price: 0 },
    { name: 'rainbow rose', category: 'breeding', price: 0 },
    { name: "chris''s entourage", category: 'breeding', price: 0 },
    { name: 'silver apple', category: 'breeding', price: 0 },
    { name: 'golden blood of arwii', category: 'breeding', price: 0 },
    { name: "imdir''s horn", category: 'breeding', price: 0 },
    { name: 'umbru token', category: 'breeding', price: 0 },
    { name: 'purified water of hathar', category: 'breeding', price: 0 },
    { name: 'runic blessing of hasswei', category: 'breeding', price: 0 },
    { name: "donii''s flower", category: 'breeding', price: 0 },
    { name: 'antlered skull', category: 'breeding', price: 0 },
    { name: 'totem of ruda', category: 'breeding', price: 0 },
    { name: 'feather of fury', category: 'breeding', price: 0 },
    { name: 'fruit of arwii', category: 'geno', price: 1000 },
    { name: 'four leaf clover', category: 'geno', price: 1500 },
    { name: 'stitched bear', category: 'geno', price: 1500 },
    { name: 'potion of the night', category: 'geno', price: 2000 },
    { name: 'golden charm of shapeshifting', category: 'geno', price: 0 },
    { name: 'golden charm of altering', category: 'geno', price: 0 },
    { name: 'call of the wild trait stone', category: 'trait', price: 0 },
    { name: 'evasive trait stone', category: 'trait', price: 0 },
    { name: 'loner trait stone', category: 'trait', price: 0 },
    { name: 'piercing blows trait stone', category: 'trait', price: 0 },
    { name: 'quick learner trait stone', category: 'trait', price: 0 },
    { name: 'fatal strikes trait stone', category: 'trait', price: 0 },
    { name: 'impressive stamina trait stone', category: 'trait', price: 0 },
    { name: 'treasure hunter trait stone', category: 'trait', price: 0 },
    { name: "larkka''s luck trait stone", category: 'trait', price: 0 },
    { name: 'proud parent trait stone', category: 'trait', price: 0 },
    { name: 'silver tongue trait stone', category: 'trait', price: 0 },
    { name: 'holiday cheer trait stone', category: 'trait', price: 0 },
    { name: 'pumkin-o-plenty trait stone', category: 'trait', price: 0 },
    { name: 'treasure seeker trait stone', category: 'trait', price: 0 },
    { name: "ra''d''s frenzy trait stone", category: 'trait', price: 0 },
    { name: 'long forgotten coin', category: 'currency', price: 2000 },
    { name: 'trait shard', category: 'currency', price: 1000 },
    { name: 'quest ticket', category: 'misc', price: 0 },
    { name: 'fragmented soul essence', category: 'currency', price: 0 },
    { name: 'lifeshard', category: 'currency', price: 0 },
    { name: 'south shore pearl', category: 'misc', price: 500 },
    { name: 'iridescent pearl', category: 'misc', price: 1000 },
    { name: 'hathars eye', category: 'misc', price: 2000 },
    { name: 'corrupted pearl', category: 'misc', price: 2000 },
    { name: 'snow cat', category: 'misc', price: 1000 },
    { name: 'snow fish', category: 'misc', price: 1000 },
    { name: 'snow mammoth', category: 'misc', price: 1500 },
  ];
  private _redeems: gameitems[] = [];

  private _currencies: string[] = [
    'festive tree cookie',
    'pouch of relic fragments',
    'handful of relic fragments',
    'bag of relic fragments',
    'stardust',
    'sunstone',
    'ghost cookie',
    'sacred water',
  ];

  private _reveal: string[] = [
    'bouquet',
    'birthday cake',
    'chocolate eggs',
    'log cake',
    'grimoire',
    'valentine candle',
    'love note',
    'wandering ancient',
    'hand written card',
    'clump of moss',
  ];

  private _oneTimeUse: string[] = [
    'carrot cake',
    'golden coelacanth scale',
    'golden fox bell',
    'bead of devotion',
    'large shining scale',
  ];
  //#endregion

  getItems(): gameitems[] {
    return this._database;
  }

  getRedeems(): gameitems[] {
    return this._redeems;
  }

  getByCategory(category: string): gameitems[] {
    return this._database.filter((items) => items.category === category);
  }

  getActivities(list: redeemItem[]): redeemItem[] {
    return list.filter(
      (item) =>
        (item.itemType.category === 'hunting' ||
          item.itemType.category === 'fishing' ||
          item.itemType.category === 'foraging' ||
          item.itemType.category === 'discovery' ||
          item.itemType.category === 'telt' ||
          item.itemType.category === 'event') &&
        (!item.itemType.name.toLowerCase().includes('golden sabertooth idol') ||
          !item.itemType.name.toLowerCase().includes('obsidian saber')) &&
        (!this._currencies.includes(item.itemType.name.toLowerCase()) ||
          !this._reveal.includes(item.itemType.name.toLowerCase()) ||
          !this._oneTimeUse.includes(item.itemType.name.toLowerCase()))
    );
  }

  getOne(name: string): gameitems[] {
    name.trim().toLowerCase();
    return this._database.filter(
      (items) =>
        items.name.toLowerCase() === name ||
        items.name.toLowerCase().includes(name)
    );
  }

  redeemOne(item: gameitems): void {
    this._redeems.push(item);
  }

  getOneTimeUse(list: redeemItem[]): redeemItem[] {
    return list.filter((i) => this._oneTimeUse.includes(i.itemType.name));
  }

  getCurrency(list: redeemItem[]): redeemItem[] {
    return list.filter((items) => {
      items.itemType.category === 'currency' ||
        this._currencies.includes(items.itemType.name.toLowerCase());
    });
  }

  getTack(list: redeemItem[]): redeemItem[] {
    return list.filter((items) => {
      items.itemType.category === 'tack' ||
        items.itemType.category === 'companions' ||
        items.itemType.category === 'trait' ||
        items.itemType.name.toLowerCase().includes('obsidian saber') ||
        items.itemType.name.toLowerCase().includes('golden sabertooth idol');
    });
  }

  getCosmetic(list: redeemItem[]): redeemItem[] {
    return list.filter((items) => {
      items.itemType.category === 'cosmetic';
    });
  }
  getReveal(list: redeemItem[]): redeemItem[] {
    return list.filter((i) => {
      i.itemType.category === 'reveal' ||
        this._reveal.includes(i.itemType.name.toLowerCase());
    });
  }
  getBreedingAndGeno(list: redeemItem[]): redeemItem[] {
    return list.filter((i) => {
      i.itemType.category === 'breeding' || i.itemType.category === 'geno';
    });
  }
}
