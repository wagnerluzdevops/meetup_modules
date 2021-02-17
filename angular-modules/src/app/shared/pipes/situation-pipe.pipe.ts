import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'situation'
})
export class SituationPipe implements PipeTransform {

  @memo()  
  // @memo() Evita utilização redudante do pipe
  transform(value: number): any {
    console.log('SituationPipe chamado!');
    const old = 2020 - value;
    if (old === 0) {
      return 'Recente!';
    }
    if (old >= 1 && old <= 5) {
      return 'Algum tempo...';
    }
    
    return 'Muito tempo!';
  }

}
