import { Injectable } from '@angular/core';
import { Usuario } from '../../Usuario';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = 'http://localhost:3000/api/usuario';

  constructor(private http: HttpClient) { }

  exibUsuarios(): Observable<Usuario[]> {
    return this.http.get<{ result: Usuario[] }>(`${this.baseURL}`).pipe(
      map(response => response.result),
      tap(data => console.log('Usuários exibidos:', data)),
      catchError(this.handleError)
    );
  }

  buscarUsuario(id: string): Observable<Usuario> {
    return this.http.get<{ result: Usuario }>(`${this.baseURL}/${id}`).pipe(
      map(response => response.result),
      tap(data => console.log('Usuário buscado:', data)),
      catchError(this.handleError)
    );
  }

  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<{ result: Usuario }>(`${this.baseURL}`, usuario).pipe(
      map(response => response.result),
      tap(data => console.log('Usuário criado:', data)),
      catchError(this.handleError)
    );
  }

  alterarDados(id: string, usuario: Usuario): Observable<Usuario> {
    return this.http.put<{ result: Usuario }>(`${this.baseURL}/${id}`, usuario).pipe(
      map(response => response.result),
      tap(data => console.log('Dados do usuário alterados:', data)),
      catchError(this.handleError)
    );
  }

  apagarDados(id: string): Observable<any> {
    return this.http.delete<{ result: any }>(`${this.baseURL}/${id}`).pipe(
      map(response => response.result),
      tap(data => console.log('Dados do usuário apagados:', data)),
      catchError(this.handleError)
    );
  }

  getUsuarioLogado(): Observable<Usuario> {
    return this.http.get<{ result: Usuario }>(`${this.baseURL}/logado`).pipe(
      map(response => response.result),
      tap(data => console.log('Usuário logado:', data)),
      catchError(this.handleError)
    );
  }
  login(email: string, senha: string): Observable<Usuario> {
    return this.http.post<{ result: Usuario }>(`${this.baseURL}/login`, { email, senha }).pipe(
      map(response => response.result),
      tap(data => console.log('Usuário logado:', data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro:', error);
    return throwError(() => new Error('Ocorreu um erro; por favor, tente novamente mais tarde.'));
  }
}
