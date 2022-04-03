import { CadastroService } from './../../services/cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  //produtos: Produtos[];
  constructor(private cadastro: CadastroService) {
    //this.produto = Produto.as
   }

  ngOnInit(): void {

    this.cadastro.listarProdutos().subscribe(produtos => {
      console.log(produtos);
    });

    //buscarPorId()

    //Incluir()

    //Atualizar()

    //Excluir()

  }

}


