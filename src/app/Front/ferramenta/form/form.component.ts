import { Component, OnInit } from '@angular/core';
import { SharedTableService } from 'src/app/Dev/processos/shared-tab.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  numeroLancamento: number = 1;
  dadosTabela: any[] = [];
  tipoEntrada: string = 'Ativo'
  entrada: string = 'Imobilizado'

  atualizarTipoEntrada(event: Event) {
    this.tipoEntrada = (event.target as HTMLSelectElement).value;
  }
  atualizarEntrada(event: Event) {
    this.entrada = (event.target as HTMLSelectElement).value;
  }

  constructor(public sharedTableService: SharedTableService) {}


  adicionarLinha() {
    // Lógica para adicionar uma linha à tabela original
    const novaLinha = { /* ... */ };
    this.sharedTableService.adicionarLinhaOriginal(novaLinha);
  }

  adicionarLancamento(): void {
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

  acompanharL() {
    // Coletar as informações do lançamento
    const numLancamento = (document.querySelector("#Base tr:first-child .num-lancamento") as HTMLElement).textContent;
    const tipoEntrada = (document.querySelector("input[type=checkbox]:checked") as HTMLInputElement)?.id;
    const tipagem = (document.querySelector("#Tip-Entrad") as HTMLSelectElement).value;
    const entrada = (document.querySelector("#entrada") as HTMLSelectElement).value;
    const valor = parseFloat((document.querySelector("#Valor") as HTMLInputElement).value);

    // Criar um objeto com as informações
    const novoLancamento = {
      numLancamento,
      tipoEntrada,
      tipagem,
      entrada,
      valor,
    };

    // Usar o serviço SharedTableService para adicionar os dados à lista temporária
    this.sharedTableService.adicionarLinhaEspelhada(novoLancamento);

    // Copiar os dados da lista temporária para a tabela espelhada
    this.sharedTableService.copiarParaTabelaEspelhada();
  }


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
