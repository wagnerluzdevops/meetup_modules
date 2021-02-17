import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Cliente } from './cliente.model';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private clientes: Cliente[] = [
    {id:1, nome:'Renata Silveira', empresa: 'Honda',  anoContrato: '2000'},
    {id:2, nome:'Alberto Xavier', empresa: 'Apple', anoContrato: '2015'},
    {id:3, nome:'Viviane Soares', empresa: 'Ford', anoContrato: '2020'},
    {id:4, nome:'Mauro Serra', empresa: 'Vivo', anoContrato: '2020'},
    {id:5, nome:'Wilson das Neves', empresa: 'Tim', anoContrato: '2020'}
  ];
  public qntClientesInic = this.clientes.length;
  private ID_COUNT: number = this.clientes.length + 1;

  constructor(
    ) {
    // for (let i = 1; i <= 5; i++) {
    //   this.clientes.push({id: i, nome: `Cliente ${i}`});
    // }
   }

  listAll(): Observable<Cliente[]> {
    return of(this.clientes);
  }

  save(cliente: Cliente): void { 
   
    if (cliente.id === 0) { // create
      cliente.id = this.ID_COUNT;
      this.clientes.push(cliente);
      this.ID_COUNT++;
    } else {   // edit
      this.clientes.splice(this.clientes.findIndex(item => item.id === cliente.id), 1)
      this.clientes.push(cliente);
    }
  }

  findCliente(id: number): Cliente {
    var result = this.clientes.find(obj => {
        return obj.id == id
    })
    
    return result;
  }

  delete(id: number): void {
    this.clientes.splice(this.clientes.findIndex(item => item.id === id), 1)
  }
}
