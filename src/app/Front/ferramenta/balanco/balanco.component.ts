import { Component, Input, OnInit } from '@angular/core';
import { BalancoSheetService } from 'src/app/Servicos/balanco-sheet-service.service';
import { BalancoSheet } from './balancoSheet';

@Component({
  selector: 'app-balanco',
  template: `
  <h1>Balanço Patrimonial</h1>
  <table>
  <thead>
    <tr>
      <th colspan="2" class="title">Ativo</th>
      <th colspan="2" class="title">Passivo</th>
    </tr>
    <tr>
      <th class="name">Conta</th>
      <th class="value">Valor</th>
      <th class="name">Conta</th>
      <th class="value">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4" class="sub-title">Ativo Circulante</td>
    </tr>
    <tr *ngFor="let ativo of balancoSheet.ativosCirculantes">
      <td>{{ ativo.nome }}</td>
      <td>{{ ativo.valor }}</td>
    </tr>
    <tr>
      <td colspan="2" class="sub-title">Total Ativo Circulante</td>
      <td colspan="2" class="sub-total-value">{{ getTotalAtivoCirculante() }}</td>
    </tr>
    <tr>
      <td colspan="4" class="sub-title">Ativo Não Circulante</td>
    </tr>
    <tr *ngFor="let ativoNaoCirculante of balancoSheet['ativosNaoCirculantes']">
       <td>{{ ativoNaoCirculante.nome }}</td>
      <td>{{ ativoNaoCirculante.valor }}</td>
    </tr>
    <tr>
      <td colspan="2" class="sub-title">Total Ativo Não Circulante</td>
      <td colspan="2" class="sub-total-value">{{ getTotalAtivoNaoCirculante() }}</td>
    </tr>
    <tr>
      <td colspan="2" class="total-title">Total Ativo</td>
      <td colspan="2" class="total-value">{{ getTotalAtivos() }}</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="2">Passivo Circulante</th>
      <th colspan="2">Passivo Não Circulante</th>
    </tr>
    <tr>
      <th class="name">Conta</th>
      <th class="value">Valor</th>
      <th class="name">Conta</th>
      <th class="value">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="4" class="sub-title">Passivo Circulante</td>
    </tr>
    <tr *ngFor="let passivo of balancoSheet.passivosCirculantes">
      <td>{{ passivo.nome }}</td>
      <td>{{ passivo.valor }}</td>
    </tr>
    <tr>
      <td colspan="2" class="sub-title">Total Passivo Circulante</td>
      <td colspan="2" class="sub-total-value">{{ getTotalPassivoCirculante() }}</td>
    </tr>
    <tr>
      <td colspan="4" class="sub-title">Passivo Não Circulante</td>
    </tr>
    <tr *ngFor="let passivoNaoCirculante of balancoSheet['passivosNaoCirculantes']">
       <td>{{ passivoNaoCirculante.nome }}</td>
      <td>{{ passivoNaoCirculante.valor }}</td>
    </tr>
    <tr>
      <td colspan="2" class="sub-title">Total Passivo Não Circulante</td>
      <td colspan="2" class="sub-total-value">{{ getTotalPassivoNaoCirculante() }}</td>
    </tr>
    <tr>
      <td colspan="2" class="total-title">Total Passivo</td>
      <td colspan="2" class="total-value">{{ getTotalPassivos() }}</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th colspan="2">Patrimônio Líquido</th>
    </tr>
    <tr>
      <th class="name">Conta</th>
      <th class="value">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let patrimonio of balancoSheet.patrimonio">
      <td>{{ patrimonio.nome }}</td>
      <td>{{ patrimonio.valor }}</td>
    </tr>
    <tr>
      <td colspan="2" class="total-title">Total Patrimônio Líquido</td>
      <td colspan="2" class="total-value">{{ getTotalPatrimonioLiquido() }}</td>
    </tr>
  </tbody>
</table>

<div class="balanco-btn">
  <button (click)="saveBalanco()">Salvar Balanço</button>
  <button (click)="imprimirBalanco()">Imprimir</button>
</div>
      <!-- Exiba as outras seções do balance sheet (passivo e patrimônio) da mesma forma -->
  `
})

export class BalancoComponent implements OnInit{
balancoSheet!: BalancoSheet;

  @Input() lancamentosAtivoCirculante: any[] = [];
  @Input() lancamentosAtivoNCirculante: any[] = [];
  @Input() lancamentosPassivoCirculante: any[] = [];
  @Input() lancamentosPassivoNCirculante: any[] = [];
  @Input() lancamentosPatrimonioLiquido: any[] = [];
  @Input() lancamentos: any[] = [];

  constructor(private balancoSheetService: BalancoSheetService){}
 
ngOnInit(): void {
  this.balancoSheet = this.balancoSheetService.obterBalancoSheet();
}
  getTotalAtivoCirculante(): number {
    return this.balancoSheet.ativosCirculantes
      .filter(a => a.nome === 'ativoCirculante')
      .reduce((total, ativo) => total + ativo.valor, 0);
  }
  
  getTotalAtivoNaoCirculante(): number {
    return this.balancoSheet.ativosNaoCirculantes
      .filter(a => a.nome === 'ativoNaoCirculante')
      .reduce((total, ativo) => total + ativo.valor, 0);
  }
  
  getTotalPassivoCirculante(): number {
    return this.balancoSheet.passivosCirculantes
      .filter(p => p.nome === 'passivoCirculante')
      .reduce((total, passivo) => total + passivo.valor, 0);
  }
  
  getTotalPassivoNaoCirculante(): number {
    return this.balancoSheet.passivosNaoCirculantes
      .filter(p => p.nome === 'passivoNaoCirculante')
      .reduce((total, passivo) => total + passivo.valor, 0);
  }
  
  getTotalPatrimonioLiquido(): number {
    return this.balancoSheet.patrimonio
      .filter(p => p.nome === 'patrimonioLiquido')
      .reduce((total, patrimonio) => total + patrimonio.valor, 0);
  }
   
  getTotalAtivos(): number {
    return (
      this.getTotalAtivoCirculante() +
      this.getTotalAtivoNaoCirculante()
    );
  }

  getTotalPassivos(): number {
    return (
      this.getTotalPassivoCirculante() +
      this.getTotalPassivoNaoCirculante() +
      this.getTotalPatrimonioLiquido()
    );
  }

  saveBalanco(){
    return alert("Balanço Salvo");
  }

  imprimirBalanco(){
    window.print()
  }

}
