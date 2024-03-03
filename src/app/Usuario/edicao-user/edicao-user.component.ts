import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Usuario';


@Component({
  selector: 'app-edicao-user',
  templateUrl: './edicao-user.component.html',
  styleUrls: ['./edicao-user.component.css']
})
export class EdicaoUserComponent implements OnInit{
  usuario: Usuario = {
    Nome: '',
    Email: '',
    Password: ''
  };
  editavel: boolean = false;
  botaoTexto:string = 'Alterar';

  constructor(){}

  ngOnInit(): void { }

  alterarCampo() {
    this.editavel = !this.editavel
    this.botaoTexto = this.editavel ? 'Salvar':'Alterar';

  }
}
