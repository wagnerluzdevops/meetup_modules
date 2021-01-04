import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SituationPipe } from './pipes/situation-pipe.pipe';

@NgModule({
   imports: [
    CommonModule, ReactiveFormsModule,
   ],
   declarations: [
      SituationPipe
   ],
   exports: [ 
      SituationPipe
   ]
})
export class SharedModule { }
