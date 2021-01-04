import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto-edit',
  templateUrl: './produto-edit.component.html',
  styleUrls: ['./produto-edit.component.css']
})
export class ProdutoEditComponent implements OnInit {

  form: FormGroup;
  id = 0;
  produto: Produto;
  anoFabList: string[] = [
    '2010','2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'
  ];

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private service: ProdutosService) {
    this.form = this.fb.group({
      id: this.fb.control(''),
      nome: this.fb.control('', [Validators.required]),
      ano: this.fb.control('')
    });
  }

  ngOnInit(): void {
    if (this.route.snapshot.params.id) {
      this.id = this.route.snapshot.params.id;
      this.produto = this.service.findProduto(this.id);
      this.form.setValue({
        id: this.produto.id,
        nome: this.produto.nome,
        ano: this.produto.ano
      });

    }

  }

  onSubmit(): void {
    if (this.form.valid) {
      const Produto: Produto = this.form.value;
      if (this.form.get('id').value == '') {
        // create
        Produto.id = 0;
      }
      this.service.save(Produto);
      this.onCancel();
    } else {
      this.form.markAllAsTouched();
    }
  }

  onCancel(): void {
    this.location.back();
  }

  isFieldRequired(fieldName: string): boolean {
    return this.form.get(fieldName).hasError('required') ? true : false;
  }

}
