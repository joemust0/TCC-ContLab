import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SharedTableService {
  private tabelaOriginal: any[] = [];
  private tabelaEspelhada: any[] = [];
  private listaTemporaria: any[] = [];

  tabelaEspelhadaSubject: Subject<any[]> = new Subject<any[]>();

  adicionarLinhaOriginal(linha: any) {
    this.tabelaOriginal.push(linha);
  }

  obterTabelaOriginal() {
    return this.tabelaOriginal;
  }

  adicionarLinhaEspelhada(linha: any) {
    this.listaTemporaria.push(linha);
  }

  copiarParaTabelaEspelhada() {
    this.tabelaEspelhada = [...this.listaTemporaria];
    this.listaTemporaria = [];
    // Notificar os assinantes (componentes) sobre a atualização da tabela espelhada
    this.tabelaEspelhadaSubject.next(this.tabelaEspelhada);
  }

  obterTabelaEspelhada() {
    return this.tabelaEspelhada;
  }
}
