import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
})
export class ComparadorComponent {
  contaO: number = 0;
  contaD: number= 0;
  diferenca: number = 0;
  campoFaltando: string = ''; // Adicione uma propriedade para o campo que falta valor

  constructor() {}

  compararValores() {
    if (this.contaO === 0 && this.contaD === 0) {
      // Ambos os campos estão vazios
      this.campoFaltando = 'Ambos os campos';
    } else if (this.contaO === 0) {
      // Campo 1 está vazio
      this.campoFaltando = 'Campo 1';
    } else if (this.contaD === 0) {
      // Campo 2 está vazio
      this.campoFaltando = 'Campo 2';
    } else {
      // Ambos os campos estão preenchidos, calcula a diferença
      this.campoFaltando = '';
      this.diferenca = this.contaO - this.contaD;
    }
  }
}
