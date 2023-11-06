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

  // Adicione os elementos da linha (células) para o lançamento inicial
  novaLinha.innerHTML = `
  <tr>
  <td class="num-lancamento"></td>
    <td id="Tipo-entrada">
        <button class="DebCre" id="Crédito" onclick="toggleCheckBox('Crédito')"><label
                for="Crédito">C</label></button>
        <button class="DebCre" id="Débito" onclick="toggleCheckBox('Crédito')"><label
                for="Débito">D</label></button>
        <input type="checkbox" id="hiddenCrédito" style="display: none">
        <input type="checkbox" id="hiddenDébito" style="display: none">
       </td>
    <td id="bah">
        <label>Qual</label><br>
        <select id="Bah">
            <option id="Bah"></option>
            <option id="Bah">Ativo</option>
            <option id="Bah">Passivo</option>
            <option id="Bah">Patrimonio Líquido</option>
        </select>
    </td>
    <td id="Entrar">
        <label for="entrada">Escolha sua entrada</label><br>
        <select id="entrada">
            <option id="entrada"></option>
            <option id="entrada">Caixa</option>
            <option id="entrada">Banco</option>
            <option id="entrada">Imobilizado</option>
            <option id="entrada">Estoque</option>
        </select>
    </td>
    <td id="Valores">
        <label for="Valor">Digite seu valor</label><br>
        <input type="number" id="Valor" min="0" placeholder="0.00">
    </td>
</tr>
<tr>
<td class="num-lancamento"></td>
  <td id="Tipo-entrada">
      <button class="DebCre" id="Crédito" onclick="toggleCheckBox('Crédito')"><label
              for="Crédito">C</label></button>
      <button class="DebCre" id="Débito" onclick="toggleCheckBox('Crédito')"><label
              for="Débito">D</label></button>
      <input type="checkbox" id="hiddenCrédito" style="display: none">
      <input type="checkbox" id="hiddenDébito" style="display: none">
     </td>
  <td id="bah">
      <label>Qual</label><br>
      <select id="Bah">
          <option id="Bah"></option>
          <option id="Bah">Ativo</option>
          <option id="Bah">Passivo</option>
          <option id="Bah">Patrimonio Líquido</option>
      </select>
  </td>
  <td id="Entrar">
      <label for="entrada">Escolha sua entrada</label><br>
      <select id="entrada">
          <option id="entrada"></option>
          <option id="entrada">Caixa</option>
          <option id="entrada">Banco</option>
          <option id="entrada">Imobilizado</option>
          <option id="entrada">Estoque</option>
      </select>
  </td>
  <td id="Valores">
      <label for="Valor">Digite seu valor</label><br>
      <input type="number" id="Valor" min="0" placeholder="0.00">
  </td>
</tr>
  `;

  // Incremente o número de lançamento para a próxima vez
  this.numeroLancamento++;

  // Adicione a nova linha à tabela
  tabelaBase.appendChild(novaLinha.cloneNode(true) as HTMLTableRowElement);

}
}

