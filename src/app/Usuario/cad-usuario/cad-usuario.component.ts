import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {


  constructor(private router: Router) {  }

  ngOnInit(): void {  }

  CadastrarUsuario() {
    alert('Cadastro realizado com sucesso!');
    return this.router.navigate(['/areaUser']);
    }

    CancelarCadUser() {
      return this.router.navigate(['/']);
      }

}
