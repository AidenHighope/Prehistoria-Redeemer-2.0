import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stModifier',
})
export class StModifierPipe implements PipeTransform {
  transform(price: number, bool: boolean): number {
    if (bool) {
      price = price * 1.1;
    } else {
      price = price;
    }

    return price;
  }
}
