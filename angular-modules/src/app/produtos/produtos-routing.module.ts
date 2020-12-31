import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutoEditComponent } from './produto-edit/produto-edit.component';

const routes: Routes = [
  { path: '', component: ProdutosListComponent },
  {path: ':id/edit', component: ProdutoEditComponent},
  {path: 'add', component: ProdutoEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
