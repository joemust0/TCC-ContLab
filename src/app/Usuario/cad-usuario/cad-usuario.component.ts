import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/Servicos/usuarios/usuario.service';
import { Usuario } from 'src/app/Usuario';

@Component({
  selector: 'app-cad-usuario',
  templateUrl: './cad-usuario.component.html',
  styleUrls: ['./cad-usuario.component.css']
})
export class CadUsuarioComponent implements OnInit {
  usuario: Usuario = {
    id: null,
    nome: '',
    nickname: '',
    email: '',
    senha: '',
    instituicao: '',
    responsavel: ''
  };
  confirmaEmail: string = '';
  confirmaSenha: string = '';
  mensagemErro: string = '';

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit(): void { }

  onSubmit() {
    if (this.usuario.email !== this.confirmaEmail) {
      this.mensagemErro = 'Os e-mails não são iguais!';
      return;
    }
    if (this.usuario.senha !== this.confirmaSenha) {
      this.mensagemErro = 'As senhas não são iguais!';
      return;
    }

    this.usuarioService.criarUsuario(this.usuario).subscribe({
      next: () => {
        alert('Cadastro realizado com sucesso!');
        this.router.navigate(['/areaUser']);
      },
      error: (error) => {
        this.mensagemErro = 'Ocorreu um erro ao cadastrar. Tente novamente mais tarde.';
        console.error('Erro ao cadastrar usuário:', error);
      }
    });
  }

  CancelarCadUser() {
    this.router.navigate(['/']);
  }
}
