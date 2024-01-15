import { Injectable } from '@angular/core';
import { Coat, Geno, Lineage, Markings, Mutation } from '../Models/Beast';

@Injectable({
  providedIn: 'root',
})
export class BreedingService {
  constructor() {}
  private _markingsDB: Markings[] = [
    { name: 'badger', rarity: 'common' },
    { name: 'bald', rarity: 'common' },
    { name: 'banded', rarity: 'common' },
    { name: 'bullseye', rarity: 'common' },
    { name: 'dipped', rarity: 'common' },
    { name: 'dust', rarity: 'common' },
    { name: 'highway', rarity: 'common' },
    { name: 'nimbus', rarity: 'common' },
    { name: 'pangare', rarity: 'common' },
    { name: 'patch', rarity: 'common' },
    { name: 'scruff', rarity: 'common' },
    { name: 'siamese', rarity: 'common' },
    { name: 'sika', rarity: 'common' },
    { name: 'tar', rarity: 'common' },
    { name: 'unders', rarity: 'common' },
    { name: 'appaloosa', rarity: 'uncommon' },
    { name: 'dapple', rarity: 'uncommon' },
    { name: 'fox', rarity: 'uncommon' },
    { name: 'garter', rarity: 'uncommon' },
    { name: 'glossy', rarity: 'uncommon' },
    { name: 'sable', rarity: 'uncommon' },
    { name: 'spotting', rarity: 'uncommon' },
    { name: 'streak', rarity: 'uncommon' },
    { name: 'stripes', rarity: 'uncommon' },
    { name: 'dun', rarity: 'uncommon' },
    { name: 'avian', rarity: 'uncommon' },
    { name: 'points', rarity: 'uncommon' },
    { name: 'frosted', rarity: 'uncommon' },
    { name: 'rabicano', rarity: 'uncommon' },
    { name: 'sooty', rarity: 'uncommon' },
    { name: 'ink', rarity: 'uncommon' },
    { name: 'mask', rarity: 'uncommon' },
    { name: 'gazelle', rarity: 'uncommon' },
    { name: 'cheekdot', rarity: 'uncommon' },
    { name: 'hooded', rarity: 'uncommon' },
    { name: 'blotched', rarity: 'uncommon' },
    { name: 'molted', rarity: 'uncommon' },
    { name: 'misty', rarity: 'rare' },
    { name: 'pied', rarity: 'rare' },
    { name: 'raindrop', rarity: 'rare' },
    { name: 'roan', rarity: 'rare' },
    { name: 'speckles', rarity: 'rare' },
    { name: 'tapir', rarity: 'rare' },
    { name: 'clouded leopard', rarity: 'rare' },
    { name: 'ocelot', rarity: 'rare' },
    { name: 'rosette', rarity: 'rare' },
    { name: 'tabby', rarity: 'rare' },
    { name: 'jackal', rarity: 'rare' },
    { name: 'merle', rarity: 'rare' },
    { name: 'bloodmark', rarity: 'rare' },
    { name: 'camo', rarity: 'rare' },
    { name: 'lacing', rarity: 'rare' },
    { name: 'honeymark', rarity: 'rare' },
    { name: 'saimaa', rarity: 'rare' },
    { name: 'shield', rarity: 'rare' },
    { name: 'artic', rarity: 'rare' },
  ];

  private _baseCoatDb: Coat[] = [
    { name: 'snow', key: 'snow', isSpecial: false },
    { name: 'glacier snow', key: 'snow', isSpecial: true },
    { name: 'night', key: 'night', isSpecial: false },
    { name: 'twilight night', key: 'night', isSpecial: true },
    { name: 'earth', key: 'earth', isSpecial: false },
    { name: 'darkwood earth', key: 'earth', isSpecial: true },
    { name: 'fawn', key: 'fawn', isSpecial: false },
    { name: 'suntouched fawn', key: 'fawn', isSpecial: true },
    { name: 'ochre', key: 'ochre', isSpecial: false },
    { name: 'dawn ochre', key: 'ochre', isSpecial: true },
  ];

  private _mutations: Mutation[] = [
    { name: 'beach morning', type: 'color', stackable: false },
    { name: 'melanism', type: 'color', stackable: false },
    { name: 'moonblessed', type: 'color', stackable: true },
  ];

  parseGeno(input: string): Geno | null {
    let GenoPattern =
      /Phenotype:\s(\w+)(?:\swith\s([\w\s,]+(?:\s?and\s[\w\s,]+(?:\s?and\s[\w\s,]+)*)?)?)?[\n\r]+Mane Type:\s([\w\s]+)[\n\r]+Tail Type:\s([\w\s]+)[\n\r]+Mutations:\s([\w\s-]+)/i;

    let replaceAnd = input.replace(/\sand\s/g, ', ').toLowerCase();
    let match = replaceAnd.match(GenoPattern);

    if (!match) {
      console.log('bad geno input');
      return null;
    }

    let [, baseCoat, markingsList, mane, tail] = match;

    //TODO fix basecoat logic to handle special basecoat input
    let validCoat = this._baseCoatDb.find((validCoat) => {
      let trimmedCoat = validCoat.name.trim().toLowerCase();
      return trimmedCoat === baseCoat.trim().toLowerCase();
    });

    if (!validCoat) {
      console.log('Invalid base coat');
      return null;
    }
    let markings: Markings[] = markingsList
      ? markingsList.split(',').map((marking) => {
          let trimmedMarking = marking.trim().toLowerCase();

          let dbMarking = this._markingsDB.find(
            (dbMarking) => dbMarking.name === trimmedMarking
          );

          if (dbMarking) {
            return { name: trimmedMarking, rarity: dbMarking.rarity };
          } else {
            return { name: trimmedMarking, rarity: 'unknown' };
          }
        })
      : [];

    let geno: Geno = {
      baseCoat: validCoat!,
      markings: markings,
      mane: [mane.trim()],
      tail: tail.trim(),
      mutation: '',
    };
    return geno;
  }

  getAllBaseCoat(): Coat[] {
    return this._baseCoatDb;
  }

  getAllMarkings(): Markings[] {
    return this._markingsDB;
  }

  CheckBaseCoat(baseCoat: string): string | null {
    let validBaseCoats = this._baseCoatDb;
    let lowerCaseBaseCoat = baseCoat.toLowerCase();
    for (let coat of validBaseCoats) {
      if (coat.name.includes(lowerCaseBaseCoat)) {
        return lowerCaseBaseCoat;
      }
    }
    return null;
  }

  rollDice(rarity: string): number {
    let modifier: number = 0;
    switch (rarity) {
      case 'common':
        modifier = 5;
        break;
      case 'uncommon':
        modifier = 3;
        break;
      case 'rare':
        modifier = 1;
        break;
      case 'unknown':
      case 'exotic':
        modifier = 0;
        break;
    }

    return Math.floor(Math.random() * 20) + modifier;
  }

  rollOffsprint(sire: Geno, dam: Geno): Geno {
    let childGeno: Geno;
    let passedMarkings: Markings[];
    let baseCoat = this.rollBaseCoat(sire, dam);
    passedMarkings = this.rollMarkings(sire, dam);
    return (childGeno = {
      baseCoat: baseCoat,
      markings: passedMarkings,
      mane: ['standard'],
      tail: 'standard',
      mutation: 'none',
    });
  }

  rollBaseCoat(sire: Geno, dam: Geno): Coat {
    let coatOfSire = sire.baseCoat;
    let coatOfDam = dam.baseCoat;
    let nbSpecialCoat = 0;
    let modifier = 0;

    if (coatOfDam.isSpecial) {
      nbSpecialCoat++;
    }

    if (coatOfSire.isSpecial) {
      nbSpecialCoat++;
    }

    if (coatOfSire.key.toLowerCase() === coatOfDam.key.toLowerCase()) {
      switch (nbSpecialCoat) {
        case 1:
          modifier = 2;
          break;
        case 2:
          modifier = 5;
          break;
      }

      if (Math.floor(Math.random() * 20) + modifier > 12) {
        return this._baseCoatDb.find(
          (coat) => coat.key.includes(coatOfSire.key) && coat.isSpecial
        )!;
      } else {
        return this._baseCoatDb.find(
          (coat) => coat.key.includes(coatOfSire.key) && !coat.isSpecial
        )!;
      }
    } else if (Math.floor(Math.random() * 2 + 1) === 1) {
      return this._baseCoatDb.find(
        (coat) => coat.key.includes(coatOfSire.key) && !coat.isSpecial
      )!;
    } else {
      return this._baseCoatDb.find(
        (coat) => coat.key.includes(coatOfDam.key) && !coat.isSpecial
      )!;
    }
  }
  rollMarkings(sire: Geno, dam: Geno): Markings[] {
    let passedMarkings: Markings[] = [];
    let existingMarkings = new Set<string>();

    let addMarking = (genes: Markings) => {
      let markingKey = genes.name.toLowerCase();
      if (!existingMarkings.has(markingKey)) {
        existingMarkings.add(markingKey);
        passedMarkings.push(genes);
      }
    };

    for (let genes of sire.markings) {
      let roll = this.rollDice(genes.rarity);
      if (roll >= 12) {
        addMarking(genes);
      }
    }
    for (let genes of dam.markings) {
      let roll = this.rollDice(genes.rarity);
      if (roll >= 12) {
        addMarking(genes);
      }
    }

    return passedMarkings;
  }

  //#region old
  // rollMarkings(sire: Geno, dam: Geno): Markings[] {
  //   let passedMarkings: Markings[] = [];
  //   let existingMarkings //how to handle the logic
  //   for (let genes of sire.markings) {
  //     let roll = this.rollDice(genes.rarity);
  //     if (roll >= 12) {
  //       passedMarkings.push(genes);
  //     }
  //   }
  //   for (let genes of dam.markings) {
  //     let roll = this.rollDice(genes.rarity);
  //     if (roll >= 12) {
  //       passedMarkings.push(genes);
  //     }
  //   }
  //   return passedMarkings;
  // }
  //#endregion
}
