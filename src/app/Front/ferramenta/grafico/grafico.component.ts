import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedTableService } from '../../../Dev/processos/shared-tab.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit, OnDestroy {
  tabelaEspelhada: any[] = [];
  tabelaEspelhadaSubscription: Subscription = new Subscription();
  tipoEntrada: string = '';
  entrada: string = '';


  constructor(private sharedTableService: SharedTableService) {}

  ngOnInit() {
    this.tabelaEspelhada = this.sharedTableService.obterTabelaEspelhada();
    this.tabelaEspelhadaSubscription = this.sharedTableService.tabelaEspelhadaSubject.subscribe((tabela: any[]) => {
      this.tabelaEspelhada = tabela;
      this.tabelaEspelhada = this.sharedTableService.obterTabelaOriginal();
    });
  }

  ngOnDestroy() {
    this.tabelaEspelhadaSubscription.unsubscribe();
  }
}
