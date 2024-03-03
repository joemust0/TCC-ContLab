import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-lancamento',
  templateUrl: './info-lancamento.component.html',
  styleUrls: ['./info-lancamento.component.css']
})
export class InfoLancamentoComponent implements OnInit{
  @Input() lancamentos: any[] = [];
  @Input() columnsToShow: string[] = [];
  @Input() tipoLancamento: string = '';

  constructor(){}

  ngOnInit(): void { }
  
}
