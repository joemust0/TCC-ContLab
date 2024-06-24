import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PContas } from 'src/app/Lancamentos';

@Injectable({
  providedIn: 'root'
})
export class PContasService {
  baseURL = 'http://localhost:3000/api/pcontas';

  constructor(private http: HttpClient) {}

  buscarTodos(): Observable<PContas[]> {
    return this.http.get<{ result: PContas[] }>(this.baseURL).pipe(
      map(response => response.result),
      tap(data => console.log('Dados recebidos:', data)),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro ao acessar a API:', error);
    return throwError('Ocorreu um erro ao acessar a API. Por favor, tente novamente mais tarde.');
  }
}
