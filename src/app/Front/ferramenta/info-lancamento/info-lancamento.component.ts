import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-lancamento',
  templateUrl: './info-lancamento.component.html',
  styleUrls: ['./info-lancamento.component.css']
})
export class InfoLancamentoComponent {
  @Input() lancamentos: any[] = [];
  @Input() columnsToShow: string[] = [];
  @Input() tipoLancamento: string = '';
}
