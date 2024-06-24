import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicos/usuarios/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  senha: string = '';
  mensagemErro: string = '';

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void {}

  onSubmit() {
    this.usuarioService.login(this.email, this.senha).subscribe({
      next: (usuario) => {
        // Armazene o usuário logado conforme necessário (por exemplo, em um serviço de autenticação)
        this.router.navigate(['/areaUser']);
      },
      error: (error) => {
        this.mensagemErro = 'E-mail ou senha incorretos.';
        console.error('Erro ao fazer login:', error);
      }
    });
  }

  CadUsuario() {
    this.router.navigate(['/cadUsuario']);
  }
}
