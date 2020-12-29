import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material/app-material.module';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';


@NgModule({
  declarations: [ProdutosListComponent, ProdutoEditComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    ProdutosRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProdutosModule { }
