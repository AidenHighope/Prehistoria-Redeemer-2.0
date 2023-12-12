import { Injectable } from '@angular/core';
import { CategoryOrder, tack } from '../Models/Game-item';

@Injectable({
  providedIn: 'root',
})
export class TackService {
  constructor() {}
  //#region fakedb
  private _tackdb: tack[] = [
    { name: 'Tawny Hyaenodon', type: 'companions', activity: 'hunting' },
    { name: 'spotted Hyaenodon', type: 'companions', activity: 'hunting' },
    { name: 'striped Hyaenodon', type: 'companions', activity: 'hunting' },
    { name: 'bicolor Hyaenodon', type: 'companions', activity: 'hunting' },
    { name: 'tawny Thylacine', type: 'companions', activity: 'fishing' },
    { name: 'golden Thylacine', type: 'companions', activity: 'fishing' },
    { name: 'pied Thylacine', type: 'companions', activity: 'fishing' },
    { name: 'brown Jerboa', type: 'companions', activity: 'discovery' },
    { name: 'black Jerboa', type: 'companions', activity: 'discovery' },
    { name: 'pied Jerboa', type: 'companions', activity: 'discovery' },
    { name: 'tawny Eucladoceros', type: 'companions', activity: 'foraging' },
    { name: 'spotted Eucladoceros', type: 'companions', activity: 'foraging' },
    { name: 'cream Eucladoceros', type: 'companions', activity: 'foraging' },
    { name: 'Red Warrah', type: 'companions', activity: 'boss' },
    { name: 'Black Warrah', type: 'companions', activity: 'boss' },
    { name: 'Striped Warrah', type: 'companions', activity: 'boss' },
    { name: 'tawny Cave Lion Cub', type: 'companions', activity: 'hunting' },
    { name: 'spotted Cave Lion Cub', type: 'companions', activity: 'hunting' },
    {
      name: 'Melanistic Cave Lion Cub',
      type: 'companions',
      activity: 'hunting',
    },
    { name: 'ivory Megalania', type: 'companions', activity: 'hunting' },
    { name: 'nightstalker Megalania', type: 'companions', activity: 'hunting' },
    { name: 'snowblind Daeodon', type: 'companions', activity: 'hunting' },
    { name: 'silvermane Daeodon', type: 'companions', activity: 'hunting' },
    { name: 'silvermane Daeodon', type: 'companions', activity: 'any' },
    { name: 'stripehide Daeodon', type: 'companions', activity: 'hunting' },
    { name: 'spotted Gorgonops', type: 'companions', activity: 'hunting' },
    { name: 'red sable Gorgonops', type: 'companions', activity: 'hunting' },
    { name: 'melanistic Gorgonops', type: 'companions', activity: 'hunting' },
    { name: 'brown Trilobite', type: 'companions', activity: 'fishing' },
    { name: 'blue grey Trilobite', type: 'companions', activity: 'fishing' },
    {
      name: 'great white Baby Thalattoarchon',
      type: 'companions',
      activity: 'fishing',
    },
    {
      name: 'coral reef Baby Thalattoarchon',
      type: 'companions',
      activity: 'fishing',
    },
    {
      name: 'erythristic Baby Thalattoarchon',
      type: 'companions',
      activity: 'fishing',
    },
    { name: 'liver Gomphotaria', type: 'companions', activity: 'fishing' },
    {
      name: 'raindrop glacier Gomphotaria',
      type: 'companions',
      activity: 'fishing',
    },
    {
      name: 'shadow vitiligo Gomphotaria',
      type: 'companions',
      activity: 'fishing',
    },
    { name: 'blue Coelacanth', type: 'companions', activity: 'fishing' },
    { name: 'earth Coelacanth', type: 'companions', activity: 'fishing' },
    { name: 'white Coelacanth', type: 'companions', activity: 'fishing' },
    { name: 'stonejaw Titanoboa', type: 'companions', activity: 'discovery' },
    { name: 'dunestrike Titanoboa', type: 'companions', activity: 'discovery' },
    {
      name: 'albino diamond Titanoboa',
      type: 'companions',
      activity: 'discovery',
    },
    {
      name: 'warm clay Cistecephalus',
      type: 'companions',
      activity: 'discovery',
    },
    {
      name: 'sunrise Cistecephalus',
      type: 'companions',
      activity: 'discovery',
    },
    {
      name: 'bicolor Cistecephalus',
      type: 'companions',
      activity: 'discovery',
    },
    { name: 'tundra Muskox Calf', type: 'companions', activity: 'discovery' },
    {
      name: 'snowstorm Muskox Calf',
      type: 'companions',
      activity: 'discovery',
    },
    {
      name: 'cloudhorn Muskox Calf',
      type: 'companions',
      activity: 'discovery',
    },
    { name: 'common grey Pigeon', type: 'companions', activity: 'discovery' },
    { name: 'pied Pigeon', type: 'companions', activity: 'discovery' },
    {
      name: 'barred oriental Pigeon',
      type: 'companions',
      activity: 'discovery',
    },
    {
      name: 'sunrunner Hyracotherium',
      type: 'companions',
      activity: 'foraging',
    },
    {
      name: 'twilight Hyracotherium',
      type: 'companions',
      activity: 'foraging',
    },
    { name: 'Koi Hyracotherium', type: 'companions', activity: 'foraging' },
    { name: 'gray Saber Squirrel', type: 'companions', activity: 'foraging' },
    {
      name: 'darkwood Saber Squirrel',
      type: 'companions',
      activity: 'foraging',
    },
    {
      name: 'fire melanistic Saber Squirrel',
      type: 'companions',
      activity: 'foraging',
    },
    {
      name: 'muddy Baby Metridiochoerus',
      type: 'companions',
      activity: 'foraging',
    },
    {
      name: 'pied Baby Metridiochoerus',
      type: 'companions',
      activity: 'foraging',
    },
    {
      name: 'darkwood Baby Metridiochoerus',
      type: 'companions',
      activity: 'foraging',
    },
    {
      name: 'oakfist Chalicotherium',
      type: 'companions',
      activity: 'foraging',
    },
    {
      name: 'dustback Chalicotherium',
      type: 'companions',
      activity: 'foraging',
    },
    {
      name: 'marbleside Chalicotherium',
      type: 'companions',
      activity: 'foraging',
    },
    { name: 'Pink Dodo', type: 'companions', activity: 'any' },
    { name: 'Blue Dodo', type: 'companions', activity: 'any' },
    { name: 'Albino Dodo', type: 'companions', activity: 'any' },
    { name: 'Brown Wooly Rhino Calf', type: 'companions', activity: 'boss' },
    { name: 'White Wooly Rhino Calf', type: 'companions', activity: 'boss' },
    { name: 'Bicolor Wooly Rhino Calf', type: 'companions', activity: 'boss' },
    { name: 'Black Terror Bird Chick', type: 'companions', activity: 'boss' },
    { name: 'Spotted Terror Bird Chick', type: 'companions', activity: 'boss' },
    { name: 'Pink Terror Bird Chick', type: 'companions', activity: 'boss' },
    { name: 'Spotted Megaloceros', type: 'companions', activity: 'any' },
    { name: 'Earthen Megaloceros', type: 'companions', activity: 'any' },
    { name: 'Cream Megaloceros', type: 'companions', activity: 'any' },
    { name: 'Brown Wolverine', type: 'companions', activity: 'any' },
    { name: 'Blone Striped Wolverine', type: 'companions', activity: 'any' },
    { name: 'Snowstalker Wolverine', type: 'companions', activity: 'any' },
    { name: 'Pygmy Onyc', type: 'companions', activity: 'any' },
    { name: 'Albino Pygmy Onyc', type: 'companions', activity: 'any' },
    { name: 'Badger Pygmy Onyc', type: 'companions', activity: 'any' },
    { name: 'Polar Cave Bear Cub', type: 'companions', activity: 'any' },
    { name: 'Brown Cave Bear Cub', type: 'companions', activity: 'any' },
    { name: 'Glacier Cave Bear Cub', type: 'companions', activity: 'any' },
    { name: 'Earthen Striped Chriacus', type: 'companions', activity: 'any' },
    { name: 'Golden Chriacus', type: 'companions', activity: 'any' },
    { name: 'Moonblessed Chriacus', type: 'companions', activity: 'any' },
    { name: 'Huxli', type: 'companions', activity: 'any' },
    { name: 'Luxili', type: 'companions', activity: 'any' },
    { name: 'Jungle Jaguar Cub', type: 'companions', activity: 'telt' },
    { name: 'Golden Jaguar Cub', type: 'companions', activity: 'telt' },
    { name: 'Black Jaguar Cub', type: 'companions', activity: 'telt' },
    { name: 'Ginger Jaguar Cub', type: 'companions', activity: 'telt' },
    { name: 'Calico Jaguar Cub', type: 'companions', activity: 'telt' },
    { name: 'Pied Jaguar Cub', type: 'companions', activity: 'telt' },
    { name: 'fawn Tapir', type: 'companions', activity: 'telt' },
    { name: 'banded Tapir', type: 'companions', activity: 'telt' },
    { name: 'striped Tapir', type: 'companions', activity: 'telt' },
    { name: 'brown Josephoartigasia', type: 'companions', activity: 'telt' },
    { name: 'cream Josephoartigasia', type: 'companions', activity: 'telt' },
    { name: 'bicolor Josephoartigasia', type: 'companions', activity: 'telt' },
    { name: 'swamp Glyptodon', type: 'companions', activity: 'telt' },
    { name: 'mud Glyptodon', type: 'companions', activity: 'telt' },
    { name: 'golden Glyptodon', type: 'companions', activity: 'telt' },
    { name: 'sand Macrauchenia', type: 'companions', activity: 'telt' },
    { name: 'savannah Macrauchenia', type: 'companions', activity: 'telt' },
    { name: 'moonblessed Macrauchenia', type: 'companions', activity: 'telt' },
    { name: 'Spectral Trilobite', type: 'companions', activity: 'any' },
    { name: 'Golden Coelacanth', type: 'companions', activity: 'any' },
    { name: 'Winter Festival Reindeer', type: 'companions', activity: 'any' },
    { name: 'Jynx, the sweet pea', type: 'companions', activity: 'any' },
    { name: 'Impy', type: 'companions', activity: 'any' },
    { name: "Purrtato''s minion", type: 'companions', activity: 'any' },
    { name: 'Cloverbite', type: 'companions', activity: 'any' },
    { name: "Mamota''s Messenger", type: 'companions', activity: 'any' },
    { name: 'striped otter', type: 'companions', activity: 'any' },
    { name: 'Earthen Mesonyx', type: 'companions', activity: 'any' },
    { name: 'Pied Mesonyx', type: 'companions', activity: 'any' },
    { name: 'Sunray Mesonyx', type: 'companions', activity: 'any' },
    { name: 'Arco, the Archelon Hoarder', type: 'companions', activity: 'any' },
    { name: 'will o wisp', type: 'companions', activity: 'any' },
    {
      name: 'Crismun Fex, the Ice Dancer',
      type: 'companions',
      activity: 'any',
    },
    { name: 'lucky totem', type: 'tack', activity: 'any' },
    { name: 'sharpened spear', type: 'tack', activity: 'hunting' },
    { name: 'hide wrapped quiver', type: 'tack', activity: 'hunting' },
    { name: 'claw of the great hunt', type: 'tack', activity: 'hunting' },
    { name: 'hand woven net', type: 'tack', activity: 'fishing' },
    { name: 'simple bait', type: 'tack', activity: 'fishing' },
    { name: 'glittering talisman', type: 'tack', activity: 'fishing' },
    { name: 'warm bindings', type: 'tack', activity: 'discovery' },
    { name: 'map', type: 'tack', activity: 'discovery' },
    { name: 'muddy notes', type: 'tack', activity: 'discovery' },
    { name: 'small plant bag', type: 'tack', activity: 'foraging' },
    { name: 'bone sickle', type: 'tack', activity: 'foraging' },
    { name: 'abandonned foraging basket', type: 'tack', activity: 'foraging' },
    { name: 'machuahuilt', type: 'tack', activity: 'telt' },
    { name: 'headdress of the stars', type: 'tack', activity: 'telt' },
    { name: 'horn of beasts', type: 'tack', activity: 'any' },
    { name: 'burning statue', type: 'tack', activity: 'any' },
    { name: 'loner trait stone', type: 'trait', activity: 'any' },
    { name: 'treasure hunter trait stone', type: 'trait', activity: 'any' },
    { name: 'silver tongue trait stone', type: 'trait', activity: 'any' },
    { name: 'holiday cheer trait stone', type: 'trait', activity: 'any' },
    {
      name: "ra''d''s frenzy trait stone",
      type: 'trait',
      activity: 'discovery',
    },
    { name: 'plains prowler', type: 'primal_trait', activity: 'hunting' },
    { name: 'aquatic affinity', type: 'primal_trait', activity: 'fishing' },
    { name: 'natural navigator', type: 'primal_trait', activity: 'discovery' },
    {
      name: 'protector of the harvest',
      type: 'primal_trait',
      activity: 'hunting',
    },
    { name: 'sun chaser', type: 'primal_trait', activity: 'any' },
    { name: 'snow wanderer', type: 'primal_trait', activity: 'any' },
    { name: 'legendary resilience', type: 'special_trait', activity: 'any' },
    { name: 'path of the handler', type: 'special_trait', activity: 'any' },
    { name: 'path of the primal', type: 'special_trait', activity: 'any' },
    { name: "lover's bond", type: 'special_trait', activity: 'any' },
    { name: "Umbru's runestone", type: 'trials', activity: 'any' },
    { name: "Larkka's runestone", type: 'trials', activity: 'discovery' },
    { name: "Hasswei's runestone", type: 'trials', activity: 'hunting' },
    { name: "Hathar's runestone", type: 'trials', activity: 'fishing' },
    { name: "enlil's runestone", type: 'trials', activity: 'foraging' },
    { name: "imdir's runestone", type: 'trials', activity: 'expedition' },
    { name: "K'malou's runestone", type: 'trials', activity: 'any' },
  ];
  //#endregion

  getByType(name: string): tack[] {
    return this._tackdb.filter((i) => i.type === name);
  }

  getByActivity(activity: string): tack[] {
    return this._tackdb.filter((i) => i.activity === activity);
  }

  sortByType(equipment: tack[]): void {
    equipment.sort(this.customTackSort);
  }

  customTackSort(a: tack, b: tack): number {
    const categoryOrder: CategoryOrder = {
      trials: 1,
      special_trait: 2,
      primal_trait: 3,
      trait: 4,
      companions: 5,
      tack: 6,
    };

    const typeA: keyof CategoryOrder =
      a.type.toLowerCase() as keyof CategoryOrder;
    const typeB: keyof CategoryOrder =
      b.type.toLowerCase() as keyof CategoryOrder;
    const orderA = categoryOrder[typeA] || Number.MAX_SAFE_INTEGER;
    const orderB = categoryOrder[typeB] || Number.MAX_SAFE_INTEGER;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    return nameA.localeCompare(nameB);
  }
}
