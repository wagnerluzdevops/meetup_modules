import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../app-material/app-material.module';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';


import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';

@NgModule({
  declarations: [ProdutosListComponent, ProdutoEditComponent,
     DialogConfirmComponent
    ],
  imports: [
    CommonModule,
    AppMaterialModule,   // APESAR DE TER SIDO IMPORTADO NO app.module, preciso importar aqui também !!
    ProdutosRoutingModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    DialogConfirmComponent
 ]
})
export class ProdutosModule { }
