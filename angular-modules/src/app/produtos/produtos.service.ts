import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private produtos: Produto[] = [
    {id:1, nome:'Piano Yamaha p125', ano: '2000'},
    {id:2, nome:'Piano Yamaha p130', ano: '2015'},
    {id:3, nome:'Teclado Roland E-X20', ano: '2020'},
    {id:4, nome:'Teclado Roland E-X25', ano: '2020'},
    {id:5, nome:'Teclado Roland E-X30', ano: '2020'}
  ];
  public qntProdInic = this.produtos.length;
  private ID_COUNT: number = this.produtos.length + 1;

  constructor(
    ) {
    // for (let i = 1; i <= 5; i++) {
    //   this.produtos.push({id: i, nome: `Produto ${i}`});
    // }
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

  delete(id: number): void {
    this.produtos.splice(this.produtos.findIndex(item => item.id === id), 1)
  }
}
