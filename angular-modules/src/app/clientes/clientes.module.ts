import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';

import { AppMaterialModule } from '../app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesRoutingModule } from './clientes-routing.module';




@NgModule({
  declarations: [ClientesListComponent,
     DialogConfirmComponent,
    ],
  imports: [
    CommonModule,
    AppMaterialModule,   // APESAR DE TER SIDO IMPORTADO NO app.module, preciso importar aqui também !!
    SharedModule,
    ClientesRoutingModule,
    ReactiveFormsModule,
  ],

  entryComponents: [
    DialogConfirmComponent
 ]
})
export class ClientesModule { }
