import { Component, OnInit } from '@angular/core';

const LIST_DE_PESSOAS = [
  {
    id:1,
    nome:"Paula",
    cpf:"123456789",
    foto: "/assets/kirby.gif"
  },
  {
    id:2,
    nome:"Arlindo",
    cpf:"125789",
    foto: "/assets/kirby2.gif"

  }

];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaDePessoas = LIST_DE_PESSOAS;

  constructor() { }

  ngOnInit(): void {
  }

}
