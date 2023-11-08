import { Component } from '@angular/core';
import { ComparadorService } from './comparador.service';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
})
export class ComparadorComponent {
  contaO: number = 0;
  contaD: number = 0;
  temDiferenca: boolean = false;

  constructor(private comparadorService: ComparadorService) {}

  compararValores() {
    this.comparadorService.compararValores(this.contaO, this.contaD).subscribe(result => {
      this.temDiferenca = result;
      if(result){
        this.contaD++;
      }
      else{
        this.contaO++;
      }
    });
  }
}
