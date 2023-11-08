import { Injectable } from '@angular/core';

@Injectable()
export class TabelaService {
  tabelaData: any[] = [];

  adicionarDados(dados: any[]) {
    this.tabelaData = dados;
  }

  obterDados() {
    return this.tabelaData;
  }
}
