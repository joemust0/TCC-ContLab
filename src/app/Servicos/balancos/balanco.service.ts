import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Balanco } from 'src/app/Balanco';
import { BalancoSheet } from 'src/app/Front/Ferramenta/balancos/balancoSheet';
import { Lancamento, PContas } from 'src/app/Lancamentos';

@Injectable({
  providedIn: 'root'
})
export class BalancoService {

  private baseURL = 'http://localhost:3000/api/balancos';

  constructor(private http: HttpClient) { }

  criarBalanco(balancos: Balanco): Observable<any> {
    return this.http.post<{ result: any }>(`${this.baseURL}`, balancos).pipe(
      map(response => response.result),
      tap(data => console.log('Balanço criado:', data)),
      catchError(this.handleError)
    );
  }

  listarBalancos(id_usuario: string): Observable<Balanco[]> {
    return this.http.get<{ result: Balanco[] }>(`${this.baseURL}/${id_usuario}`).pipe(
      map(response => response.result),
      tap(data => console.log('Balanços listados:', data)),
      catchError(this.handleError)
    );
  }

  buscarBalanco(id_usuario: string): Observable<any> {
    return this.http.get<{ result: any }>(`${this.baseURL}/${id_usuario}`).pipe(
      map(response => response.result),
      tap(data => console.log('Balanço buscado:', data)),
      catchError(this.handleError)
    );
  }

  buscarBalancoAtiv(id_usuario: string, num_balanco: string): Observable<BalancoSheet> {
    return this.http.get<{ result: BalancoSheet }>(`${this.baseURL}/balancos/${id_usuario}/${num_balanco}`).pipe(
      map(response => response.result),
      tap(data => console.log('Balanço ativo buscado:', data)),
      catchError(this.handleError)
    );
  }

  atualizarBalanco(id_usuario: string, num_balanco: string, balanco: BalancoSheet): Observable<any> {
    return this.http.put<{ result: any }>(`${this.baseURL}/balancos/${id_usuario}/${num_balanco}`, balanco).pipe(
      map(response => response.result),
      tap(data => console.log('Balanço atualizado:', data)),
      catchError(this.handleError)
    );
  }

  apagarBalanco(id_usuario: string, num_balanco: string): Observable<any> {
    return this.http.delete<{ result: any }>(`${this.baseURL}/${id_usuario}/${num_balanco}`).pipe(
      map(response => response.result),
      tap(data => console.log('Balanço apagado:', data)),
      catchError(this.handleError)
    );
  }

  buscarLancamentos(num_balanco: number): Observable<Lancamento[]> {
    return this.http.get<{ result: Lancamento[] }>(`${this.baseURL}/${num_balanco}/lancamentos`).pipe(
      map(response => response.result),
      tap(data => console.log('Lançamentos buscados:', data)),
      catchError(this.handleError)
    );
  }

  salvarLancamentos(id_usuario: string, num_balanco: string, lancamentos: Lancamento[]): Observable<any> {
    return this.http.post<{ result: any }>(`${this.baseURL}/balancos/${id_usuario}/${num_balanco}/lancamentos`, lancamentos).pipe(
      map(response => response.result),
      tap(data => console.log('Lançamentos salvos:', data)),
      catchError(this.handleError)
    );
  }

  buscarPContas(id_usuario: string, num_balanco: string): Observable<PContas[]> {
    return this.http.get<{ result: PContas[] }>(`${this.baseURL}/balancos/${id_usuario}/${num_balanco}/pcontas`).pipe(
      map(response => response.result),
      tap(data => console.log('PContas buscados:', data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro:', error);
    return throwError(() => new Error('Ocorreu um erro; por favor, tente novamente mais tarde.'));
  }
}
