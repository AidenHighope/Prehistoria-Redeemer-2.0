import { Injectable } from '@angular/core';
import { CategoryOrder, tack } from '../Models/Game-item';

@Injectable({
  providedIn: 'root',
})
export class TackService {
  constructor() {}
  //#region fakedb
  private _tackdb: tack[] = [
    { name: 'Hyaenodon', type: 'companions', activity: 'hunting' },
    { name: 'Thylacine', type: 'companions', activity: 'fishing' },
    { name: 'Jerboa', type: 'companions', activity: 'discovery' },
    { name: 'Eucladoceros', type: 'companions', activity: 'foraging' },
    { name: 'Warrah', type: 'companions', activity: 'boss' },
    { name: 'Cave Lion Cub', type: 'companions', activity: 'hunting' },
    { name: 'Megalania', type: 'companions', activity: 'hunting' },
    { name: 'Daeodon', type: 'companions', activity: 'hunting' },
    { name: 'Gorgonops', type: 'companions', activity: 'hunting' },

    { name: 'Trilobite (normal)', type: 'companions', activity: 'fishing' },

    {
      name: 'Baby Thalattoarchon',
      type: 'companions',
      activity: 'fishing',
    },

    { name: 'Gomphotaria', type: 'companions', activity: 'fishing' },

    { name: 'Coelacanth (normal)', type: 'companions', activity: 'fishing' },

    { name: 'Titanoboa', type: 'companions', activity: 'discovery' },

    {
      name: 'Cistecephalus',
      type: 'companions',
      activity: 'discovery',
    },

    { name: 'Muskox Calf', type: 'companions', activity: 'discovery' },

    { name: 'Pigeon', type: 'companions', activity: 'discovery' },

    {
      name: 'Hyracotherium',
      type: 'companions',
      activity: 'foraging',
    },

    { name: 'Saber Squirrel', type: 'companions', activity: 'foraging' },

    {
      name: 'Baby Metridiochoerus',
      type: 'companions',
      activity: 'foraging',
    },

    {
      name: 'Chalicotherium',
      type: 'companions',
      activity: 'foraging',
    },

    { name: 'Dodo', type: 'companions', activity: 'any' },

    { name: 'Wooly Rhino Calf', type: 'companions', activity: 'boss' },

    { name: 'Terror Bird Chick', type: 'companions', activity: 'boss' },

    { name: 'Megaloceros', type: 'companions', activity: 'any' },

    { name: 'Wolverine', type: 'companions', activity: 'any' },

    { name: 'Pygmy Onyc', type: 'companions', activity: 'any' },

    { name: 'Cave Bear Cub', type: 'companions', activity: 'any' },

    { name: 'Chriacus', type: 'companions', activity: 'any' },

    { name: 'Huxli', type: 'companions', activity: 'any' },
    { name: 'Luxili', type: 'companions', activity: 'any' },
    { name: 'Jaguar Cub', type: 'companions', activity: 'telt' },
    { name: 'Tapir', type: 'companions', activity: 'telt' },

    { name: 'Josephoartigasia', type: 'companions', activity: 'telt' },

    { name: 'Glyptodon', type: 'companions', activity: 'telt' },

    { name: 'Macrauchenia', type: 'companions', activity: 'telt' },

    { name: 'Spectral Trilobite', type: 'companions', activity: 'any' },
    { name: 'Golden Coelacanth', type: 'companions', activity: 'any' },
    { name: 'Winter Festival Reindeer', type: 'companions', activity: 'any' },
    { name: 'Jynx', type: 'companions', activity: 'any' },
    { name: 'Impy', type: 'companions', activity: 'any' },
    { name: "Purrtato''s minion", type: 'companions', activity: 'any' },
    { name: 'Cloverbite', type: 'companions', activity: 'any' },
    { name: "Mamota''s Messenger", type: 'companions', activity: 'any' },
    { name: 'otter', type: 'companions', activity: 'any' },
    { name: 'Mesonyx', type: 'companions', activity: 'any' },
    { name: 'Arco', type: 'companions', activity: 'any' },
    { name: 'will o wisp', type: 'companions', activity: 'any' },
    {
      name: 'Crismun Fex',
      type: 'companions',
      activity: 'any',
    },
    { name: 'lucky totem', type: 'tack top', activity: 'any' },
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
    { name: 'treasure hunter', type: 'trait', activity: 'any' },
    { name: 'silver tongue', type: 'trait', activity: 'any' },
    { name: 'holiday cheer', type: 'trait', activity: 'any' },
    {
      name: "ra''d''s frenzy",
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
    { name: 'species advantage', type: 'top', activity: 'any' },
    { name: 'species disadvantage', type: 'top', activity: 'any' },
  ];
  //#endregion

  getAll(): tack[] {
    return this._tackdb;
  }

  getByType(name: string): tack[] {
    return this._tackdb.filter((i) => i.type.includes(name));
  }

  getByActivity(activity: string): tack[] {
    return this._tackdb.filter((i) => i.activity === activity);
  }

  getAllTrait(): tack[] {
    return this._tackdb.filter(
      (i) =>
        i.type === 'special_trait' ||
        i.type === 'primal_trait' ||
        i.type === 'trait'
    );
  }

  sortByType(equipment: tack[]): void {
    equipment.sort(this.customTackSort);
  }

  customTackSort(a: tack, b: tack): number {
    const categoryOrder: CategoryOrder = {
      top: 1,
      trials: 2,
      special_trait: 3,
      primal_trait: 4,
      trait: 5,
      companions: 6,
      tack: 7,
    };
    const isTopType = (tack: tack): boolean =>
      tack.type.toLowerCase().includes('top');

    const typeA = isTopType(a)
      ? 'top'
      : (a.type.toLowerCase() as keyof CategoryOrder);
    const typeB = isTopType(b)
      ? 'top'
      : (b.type.toLowerCase() as keyof CategoryOrder);
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
