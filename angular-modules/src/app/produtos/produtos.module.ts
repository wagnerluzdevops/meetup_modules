import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';

import { AppMaterialModule } from '../app-material/app-material.module';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';


@NgModule({
  declarations: [ProdutosListComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
