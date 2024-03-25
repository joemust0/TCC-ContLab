import { Component, Input, OnInit } from '@angular/core';
import { BalancoSheetService } from 'src/app/Servicos/balanco-sheet-service.service';
import { BalancoSheet } from './balancoSheet';

@Component({
  selector: 'app-balanco',
  templateUrl: './balanco.component.html',
  styleUrls: ['./balanco.component.css']
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
