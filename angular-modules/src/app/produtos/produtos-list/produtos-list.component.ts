import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  produtos: Produto[] = [];
  displayedColumns: string[] = ['id', 'name', 'actions'];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: ProdutosService) { }

  ngOnInit(): void {
    this.service.listAll().subscribe(prods => {
      console.log(prods);
      this.produtos = prods;
    });
  }

  // onAdd(): void {
  //   this.router.navigate(['add'], { relativeTo: this.route });
  // }

  onEdit(produto: Produto): void {
    console.log(produto);
    // this.router.navigate([{ id: produto.id }, 'edit'], { relativeTo: this.route });
    // this.router.navigate(['/produtos', { id: produto.id }]);
  }

  onRemove(produto: Produto): void {
    console.log(produto);
  }

}
