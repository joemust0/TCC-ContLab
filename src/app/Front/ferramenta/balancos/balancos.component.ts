import { Component, OnInit } from '@angular/core';

interface Lancamento {
  nome: string;
  total: number;
}

@Component({
  selector: 'app-balancos',
  templateUrl: './balancos.component.html',
  styleUrls: ['./balancos.component.css']
})
export class BalancosComponent implements OnInit {
  lancamentosAtivoCirculante: Lancamento[] = [];
  lancamentosAtivoNCirculante: Lancamento[] = [];
  lancamentosPassivoCirculante: Lancamento[] = [];
  lancamentosPassivoNCirculante: Lancamento[] = [];
  lancamentosPatrimonioLiquido: Lancamento[] = [];

  constructor() { }

  ngOnInit(): void {
    // Inicialize seus lançamentos aqui
  }

  agruparLancamentos(lancamentos: Lancamento[]): { [key: string]: number } {
    return lancamentos.reduce((acc: { [key: string]: number }, lancamento: Lancamento) => {
      if (!acc[lancamento.nome]) {
        acc[lancamento.nome] = 0;
      }
      acc[lancamento.nome] += lancamento.total;
      return acc;
    }, {});
  }

  getTotalAtivoCirculante(): number {
    return this.lancamentosAtivoCirculante.reduce((acc, lancamento) => acc + lancamento.total, 0);
  }

  getTotalAtivoNaoCirculante(): number {
    return this.lancamentosAtivoNCirculante.reduce((acc, lancamento) => acc + lancamento.total, 0);
  }

  getTotalPassivoCirculante(): number {
    return this.lancamentosPassivoCirculante.reduce((acc, lancamento) => acc + lancamento.total, 0);
  }

  getTotalPassivoNaoCirculante(): number {
    return this.lancamentosPassivoNCirculante.reduce((acc, lancamento) => acc + lancamento.total, 0);
  }

  getTotalPatrimonioLiquido(): number {
    return this.lancamentosPatrimonioLiquido.reduce((acc, lancamento) => acc + lancamento.total, 0);
  }

  getTotalAtivos(): number {
    return this.getTotalAtivoCirculante() + this.getTotalAtivoNaoCirculante();
  }

  getTotalPassivos(): number {
    return this.getTotalPassivoCirculante() + this.getTotalPassivoNaoCirculante() + this.getTotalPatrimonioLiquido();
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
