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
    ) {
    for (let i = 1; i <= 5; i++) {
      this.produtos.push({id: i, nome: `Produto ${i}`});
    }
   }

  listAll(): Observable<Produto[]> {
    return of(this.produtos);
  }

  save(produto: Produto): void { 
    if (produto.id === 0) { // create
      produto.id = this.ID_COUNT;
      this.produtos.push(produto);
      this.ID_COUNT++;
    } else {   // edit
      this.produtos.splice(this.produtos.findIndex(item => item.id === produto.id), 1)
      this.produtos.push(produto);
    }
  }

  findProduto(id: number): Produto {
    var result = this.produtos.find(obj => {
        return obj.id == id
    })
    
    return result;
  }
}
