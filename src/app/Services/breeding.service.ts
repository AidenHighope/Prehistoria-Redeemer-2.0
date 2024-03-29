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
    { name: 'albino', type: 'color', stackable: false },
    { name: 'maltese', type: 'color', stackable: false },
    { name: 'cross', type: 'color', stackable: true },
    { name: 'dhole', type: 'color', stackable: false },
    { name: 'cremello', type: 'color', stackable: false },
    { name: 'ice', type: 'color', stackable: false },
    { name: 'tropical', type: 'color', stackable: false },
    { name: 'terracotta', type: 'color', stackable: false },
    { name: 'chimera', type: 'marking', stackable: true },
    { name: 'vitiligo', type: 'marking', stackable: true },
    { name: 'king cheetah', type: 'marking', stackable: true },
    { name: 'african wild dog', type: 'marking', stackable: true },
    { name: 'brindle', type: 'marking', stackable: true },
    { name: 'marbled', type: 'marking', stackable: true },
    { name: 'somatic', type: 'marking', stackable: true },
    { name: 'panda', type: 'marking', stackable: true },
    { name: 'fangs', type: 'misc', stackable: true },
    { name: 'goldkissed', type: 'coat', stackable: false },
    { name: 'metal', type: 'marking', stackable: true },
    { name: 'cumulus', type: 'marking', stackable: true },
    { name: 'typhoon', type: 'marking', stackable: true },
    { name: 'runehide', type: 'marking', stackable: true },
    { name: "larkka's touch", type: 'marking', stackable: true },
  ];
  parseGeno(input: string): Geno | null {
    let GenoPattern =
      /Phenotype:\s(\w+)(?:\swith\s([\w\s,]+(?:\s?and\s[\w\s,]+(?:\s?and\s[\w\s,]+)*)?)?)?[\n\r]+Mane Type:\s([\w\s]+)[\n\r]+Tail Type:\s([\w\s]+)[\n\r]+Mutations:\s([\w\s,-]+)/i;

    let replaceAnd = input.replace(/\sand\s/g, ', ').toLowerCase();
    let match = replaceAnd.match(GenoPattern);

    if (!match) {
      console.log('bad geno input');
      return null;
    }

    let [, baseCoat, markingsList, maneList, tailType, mutationsList] = match;

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

    let mutations: Mutation[] = mutationsList
      ? mutationsList.split(',').map((mut) => {
          let trimmedMut = mut.trim().toLowerCase();
          let dbMut = this._mutations.find(
            (dbMut) => dbMut.name === trimmedMut
          );

          if (dbMut) {
            return {
              name: trimmedMut,
              type: dbMut.type,
              stackable: dbMut.stackable,
            };
          } else {
            return { name: 'none', type: 'none', stackable: false };
          }
        })
      : [];

    let geno: Geno = {
      baseCoat: validCoat!,
      markings: markings,
      mane: [maneList.trim()],
      tail: tailType.trim(),
      mutation: mutations,
    };

    for (let mut of geno.mutation) {
      console.log(mut.name + ' ' + mut.type);
    }
    return geno;
  }
  //#region parse Geno that works
  /*  
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
*/
  //#endregion
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
    let passedMutations: Mutation[];
    let baseCoat = this.rollBaseCoat(sire, dam);
    passedMarkings = this.rollMarkings(sire, dam);
    passedMutations = this.rollMutations(sire, dam);
    return (childGeno = {
      baseCoat: baseCoat,
      markings: passedMarkings,
      mane: ['standard'],
      tail: 'standard',
      mutation: passedMutations,
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

  rollMutations(sire: Geno, dam: Geno): Mutation[] {
    let passedMut: Mutation[] = [];
    let existingMut = new Set<string>();
    let existingType = new Set<string>();
    let addMut = (mut: Mutation) => {
      let mutKey = mut.name.toLowerCase();
      let typeKey = mut.type.toLowerCase();

      if (!existingMut.has(mutKey)) {
        existingMut.add(mutKey);

        if (!existingType.has(typeKey)) {
          existingType.add(typeKey);
          passedMut.push(mut);
        } else if (mut.stackable) {
          let existingTypeArray = Array.from(existingType);
          let otherTypes = existingTypeArray.filter((t) => t !== typeKey);

          if (otherTypes.length > 0) {
            passedMut.push(mut);
          }
        }
      }
    };

    for (let mut of sire.mutation) {
      let roll = this.rollDice('exotic');
      if (roll >= 12) {
        addMut(mut);
      }
    }

    for (let mut of dam.mutation) {
      let roll = this.rollDice('exotic');
      if (roll >= 12) {
        addMut(mut);
      }
    }

    return passedMut;
  }
}
