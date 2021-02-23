import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

import { Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css']
})
export class ClientesListComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  clientes: Cliente[] = [];
  displayedColumns: string[] = ['id', 'nome', 'empresa', 'ano', 'status'];
  countClienteInic: number;

  constructor(private service: ClientesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.countClienteInic = this.service.qntClientesInic;
    this.loadData();

  }

  loadData() {
    this.service.listAll().subscribe(clientes => {
      console.log(clientes);
      this.clientes = clientes;
    });
  }

 
}
