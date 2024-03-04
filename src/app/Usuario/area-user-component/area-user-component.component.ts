import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicos/usuario.service';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-area-user-component',
  templateUrl: './area-user-component.component.html',
  styleUrls: ['./area-user-component.component.css']
})
export class AreaUserComponentComponent implements OnInit {
 
  usuario!:Usuario;

constructor(private router:Router, private usuarioService: UsuarioService){}

ngOnInit(): void {
  this.usuario = this.usuarioService.getUsuario();
}

Edit(){

  return this.router.navigate(['/editUser']);
}

}
