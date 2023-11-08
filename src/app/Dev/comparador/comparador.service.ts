import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ComparadorService {

  constructor(private http: HttpClient) {}

  compararValores(contaO:number, contaD: number){
    return this.http.get<boolean>('/api/comparar?contaO=${contaO}&contaD=${contaD}');
  }



}
