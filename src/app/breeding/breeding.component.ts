import { Component } from '@angular/core';
import { BreedingService } from '../Services/breeding.service';
import { Geno, Lineage, Markings } from '../Models/Beast';

@Component({
  selector: 'app-breeding',
  templateUrl: './breeding.component.html',
  styleUrls: ['./breeding.component.scss'],
})
export class BreedingComponent {
  constructor(private breedingService: BreedingService) {
    this.allMarkingsDb = this.breedingService.getAllMarkings();
  }

  allMarkingsDb: Markings[];
  SireGeno!: Geno;
  DamGeno!: Geno;
  SireLineage!: Lineage;
  DamLineage!: Lineage;
  SireMarkings!: Markings[];
  DamMarkings!: Markings[];
  sireInput!: string;
  damInput!: string;
  offspring?: Geno[];
  getGeno(input: string): Geno | null {
    return this.breedingService.parseGeno(input);
  }

  //TODO : handle species number of offspring
  rollBreeding(sireInput: string, damInput: string): Geno[] {
    this.SireGeno = this.getGeno(sireInput)!;
    this.DamGeno = this.getGeno(damInput)!;

    let nbPups = Math.floor(Math.random() * 4) + 1;
    let pups: Geno[] = [];
    for (let i = 0; i < nbPups; i++) {
      pups.push(this.rollChild(this.SireGeno, this.DamGeno));
    }
    return (this.offspring = pups);
  }

  rollChild(sire: Geno, dam: Geno): Geno {
    return this.breedingService.rollOffsprint(sire, dam);
  }
}
