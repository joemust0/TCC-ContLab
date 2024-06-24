import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-exibir-balanco',
  templateUrl: './exibir-balanco.component.html',
  styleUrls: ['./exibir-balanco.component.css']
})
export class ExibirBalancoComponent implements OnInit {
  @Input() lancamentos: any[] = [];
  @Input() tipoLancamento: string = '';
  mostrarBalanco: boolean = false;

  constructor(){}

  ngOnInit(): void {  }

  adicionarLancamento(novoLancamento: any) {
    this.lancamentos.push(novoLancamento);
  }

  handleMostrarBalancoChange(event: any) {
    this.mostrarBalanco = event;
  }
}
