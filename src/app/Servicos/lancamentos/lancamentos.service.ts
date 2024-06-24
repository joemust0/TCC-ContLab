import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { LancamentoDetalhe, PContas } from 'src/app/Lancamentos';

@Injectable({
  providedIn: 'root'
})
export class LancamentosService {

  private baseURL = 'http://localhost:3000/api/lancamentos';

  constructor(private http: HttpClient) {}

  adicionarBalanco(balancoData: any): Observable<any> {
    return this.http.post<{ result: any }>(`${this.baseURL}/balanco`, balancoData).pipe(
      map(response => response.result),
      tap(data => console.log('Balanco adicionado:', data)),
      catchError(this.handleError)
    );
  }


  listarLancamentos(num_balanco: string): Observable<any> {
    return this.http.get<{ result: any }>(`${this.baseURL}/${num_balanco}`).pipe(
      map(response => response.result),
      tap(data => console.log('Lancamentos listados:', data)),
      catchError(this.handleError)
    );
  }

  buscarLancamentosNf(num_balanco: string, num_nf: string): Observable<any> {
    return this.http.get<{ result: any }>(`${this.baseURL}/${num_balanco}/${num_nf}`).pipe(
      map(response => response.result),
      tap(data => console.log('Lancamentos buscados:', data)),
      catchError(this.handleError)
    );
  }

  atualizarLancamentos(num_balanco: string, num_nf: string, lancamento: any): Observable<any> {
    return this.http.put<{ result: any }>(`${this.baseURL}/${num_balanco}/${num_nf}`, lancamento).pipe(
      map(response => response.result),
      tap(data => console.log('Lancamento atualizado:', data)),
      catchError(this.handleError)
    );
  }

  apagarLancamento(num_balanco: string, num_nf: string): Observable<any> {
    return this.http.delete<{ result: any }>(`${this.baseURL}/${num_balanco}/${num_nf}`).pipe(
      map(response => response.result),
      tap(data => console.log('Lancamento apagado:', data)),
      catchError(this.handleError)
    );
  }

  apagarLancamentos(num_balanco: string): Observable<any> {
    return this.http.delete<{ result: any }>(`${this.baseURL}/${num_balanco}`).pipe(
      map(response => response.result),
      tap(data => console.log('Lancamentos apagados:', data)),
      catchError(this.handleError)
    );
  }

  getPContas(): Observable<PContas[]> {
    return this.http.get<{ result: PContas[] }>(`${this.baseURL}/pcontas`).pipe(
      map(response => response.result),
      tap(data => console.log('Dados de PContas recebidos:', data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro:', error);
    return throwError(() => new Error('Ocorreu um erro; por favor, tente novamente mais tarde.'));
  }
}
