import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';

import { AppMaterialModule } from '../app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosRoutingModule } from './produtos-routing.module';


@NgModule({
  declarations: [ProdutosListComponent, ProdutoEditComponent,
     DialogConfirmComponent,
    ],
  imports: [
    CommonModule,
    AppMaterialModule,  
    SharedModule,
    ProdutosRoutingModule,
    ReactiveFormsModule,
  ],

  entryComponents: [
    DialogConfirmComponent
 ]
})
export class ProdutosModule { }
