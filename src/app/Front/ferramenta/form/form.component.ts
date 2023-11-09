import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
numeroLancamento: number = 1;

ngOnInit() {
  const adicionarLinhaButton = document.getElementById('Adicionar') as HTMLButtonElement;
  const adicionarLancamentoInicialButton = document.getElementById('AdicionarLancamentoInicial') as HTMLButtonElement;

  adicionarLinhaButton.addEventListener('click', () => {
    const tabelaBase = document.getElementById('Base') as HTMLTableElement;
    const tabelaNova = document.getElementById('Nova') as HTMLTableElement;
    const ultimaLinhaBase = tabelaBase.querySelector('tr:last-child') as HTMLTableRowElement;
    const novaLinha = ultimaLinhaBase.cloneNode(true) as HTMLTableRowElement;

    // Atualize o número de lançamento na nova linha
    const numLancamentoElement = novaLinha.querySelector('.num-lancamento');
    if (numLancamentoElement) {
      numLancamentoElement.textContent = this.numeroLancamento.toString();
    }

    // Incremente o número de lançamento para a próxima vez
    this.numeroLancamento++;

    tabelaBase.appendChild(novaLinha.cloneNode(true) as HTMLTableRowElement);
    tabelaNova.appendChild(novaLinha);
  });
}
adicionarLancamentoInicial() {
  const tabelaBase = document.getElementById('Base') as HTMLTableElement;
  const novaLinha = document.createElement('tr');
  this.numeroLancamento++;
  tabelaBase.appendChild(novaLinha.cloneNode(true) as HTMLTableRowElement);
}
}
function adicionarLancamento(): void {
  const numLancamento = (document.querySelector("#Base tr:first-child .num-lancamento") as HTMLElement).textContent;
  const tipoEntrada = (document.querySelector("input[type=checkbox]:checked") as HTMLInputElement)?.id;
  const tipagem = (document.querySelector("#Tip-Entrad") as HTMLSelectElement).value;
  const entrada = (document.querySelector("#entrada") as HTMLSelectElement).value;
  const valor = parseFloat((document.querySelector("#Valor") as HTMLInputElement).value);
  console.log("Número de lançamento:", numLancamento);
  console.log("Tipo de entrada:", tipoEntrada);
  console.log("Tipagem:", tipagem);
  console.log("Entrada:", entrada);
  console.log("Valor:", valor);
}