import { Injectable } from '@angular/core';
import { Usuario } from '../Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
private usuario!: Usuario

  constructor() { }

  setUsuario(usuario: Usuario){
    this.usuario = usuario;
  }

  getUsuario(): Usuario {
    return this.usuario;
  }
  atualizarUsuario(novosDados: Usuario) {
    if (this.usuario) {
      // Atualiza apenas os campos definidos nos novos dados do usuário
      this.usuario = { ...this.usuario, ...novosDados };
    }
  }
}
