import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situation'
})
export class SituationPipe implements PipeTransform {

  transform(value: number): any {
    console.log('SituationPipe Called');
    const old = 2020 - value;
    if (old === 0) {
      return 'Tá novo';
    }
    if (old >= 1 && old <= 5) {
      return 'Tá usado';
    }
    
    return 'Tá velho';
  }

}
