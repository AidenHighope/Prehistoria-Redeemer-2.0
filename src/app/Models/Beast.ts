import { tack } from './Game-item';

export interface beast {
  name: string;
  nickname?: string;
  ID: string;
  owner: string;
  equipped: tack[];
  geno: Geno;
  lineage: Lineage[];
}

export interface Geno {
  baseCoat: Coat;
  markings: Markings[];
  mane: string[];
  tail: string;
  mutation: Mutation[];
}

export interface Markings {
  name: string;
  rarity: string;
}

export interface Coat {
  name: string;
  key: string;
  isSpecial: boolean;
}

export interface Mutation {
  name: string;
  type: string;
  stackable: boolean;
}

export interface Lineage {
  sire: string;
  dam: string;
  ss: string;
  sss: string;
  ssd: string;
  sd: string;
  sds: string;
  sdd: string;
  ds: string;
  dss: string;
  dsd: string;
  dd: string;
  dds: string;
  ddd: string;
}
/* 
note : those letters means the following :
ss  : sire of the sire (father side grandpa)
sss : sire of the "sire sire" (father side great grandpa)
sd  : dam of the sire (father side grandma)
ssd : dam of the "sire sire" (father side great grandma)

and same idea for the Dam letters.

those letters are used to check inbreeding.

in game example of a lineage :
----------------------------------SSS: Wild
---------------SS: Mahamba D139
----------------------------------SSD: Wild
Sire: North WD715
----------------------------------SDS: Wild
---------------SD: Rikili D282
----------------------------------SDD: Wild
----------------------------------DSS: Storm D284
---------------DS: Loki D368
----------------------------------DSD: Frost D09
Dam: Aurelia D647
----------------------------------DDS: Altair D47
---------------DD: Hayley D246
----------------------------------DDD: Naluaa D58
*/
