import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-balanco',
  templateUrl: './balanco.component.html',
  styleUrls: ['./balanco.component.css']
})
export class BalancoComponent implements OnInit{

  @Input() lancamentosAtivoCirculante: any[] = [];
  @Input() lancamentosAtivoNCirculante: any[] = [];
  @Input() lancamentosPassivoCirculante: any[] = [];
  @Input() lancamentosPassivoNCirculante: any[] = [];
  @Input() lancamentosPatrimonioLiquido: any[] = [];
  @Input() lancamentos: any[] = [];



  mostrarBalanco: boolean = false;

  constructor(){}
 
ngOnInit(): void {}


  gerarBalanco() {
    this.mostrarBalanco = true;
  }

 

  getTotalAtivos(): number {
    return (
      this.getAtivoCirculante() +
      this.getAtivoNCirculante()
    );
  }

  getTotalPassivos(): number {
    return (
      this.getPassivoCirculante() +
      this.getPassivoNCirculante() +
      this.getPatrimonioLiquido()
    );
  }

  private getAtivoCirculante(): number {
    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Caixa' || lanc.conta === 'Banco' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Caixa' || lanc.conta === 'Banco' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return debito - credito;
  }

  private getAtivoNCirculante(): number {
    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Imobilizado' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Imobilizado' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return debito - credito;
  }

  private getPassivoCirculante(): number {
    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return credito - debito;
  }

  private getPassivoNCirculante(): number {
    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return credito - debito;
  }

  private getPatrimonioLiquido(): number {
    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && lanc.conta === 'Capital Social') || [];

    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && lanc.conta === 'Capital Social') || [];

    const creditoTotal = credito.reduce((acc, curr) => acc + (curr.valor || 0), 0);
    const debitoTotal = debito.reduce((acc, curr) => acc + (curr.valor || 0), 0);

    return creditoTotal - debitoTotal;
  }
}
