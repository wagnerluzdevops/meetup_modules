import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfirmComponent } from 'src/app/shared/dialog-confirm/dialog-confirm.component';
import { Produto } from '../produto.model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  produtos: Produto[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];
  countProdInic: number;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: ProdutosService,
              public dialog: MatDialog
              ) { }

  ngOnInit(): void {
    this.countProdInic = this.service.qntProdInic;
    this.loadData();
    
  }

  loadData() {
    this.service.listAll().subscribe(prods => {
      console.log(prods);
      this.produtos = prods;
    });
}

  onRemove(produto: Produto): void {
    console.log(produto);
    this.service.delete(produto.id);
    this.table.renderRows(); // Usado pois estamos trabalhando com um array!
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Resultado do Diálogo: ${result}`);
    });
  }

}
