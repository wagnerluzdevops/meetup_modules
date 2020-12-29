import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private ID_COUNT = 11;

  private produtos: Produto[] = [];

  constructor(
    // private http: HttpClient
    ) {
    for (let i = 1; i <= 5; i++) {
      this.produtos.push({id: i, nome: `Produto ${i}`});
    }
   }

  listAll(): Observable<Produto[]> {
    return of(this.produtos);
  }

  save(produto: Produto): void { // TODO: mudar retorno para Observable
    if (produto.id === 0) { // create
      produto.id = this.ID_COUNT;
      this.produtos.push(produto);
      this.ID_COUNT++;
    } else {
      // edit
    }
  }
}
