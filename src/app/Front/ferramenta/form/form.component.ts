import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

}
document.addEventListener('DOMContentLoaded', () => {
    const adicionarLinhaButton = document.getElementById('Adicionar') as HTMLButtonElement;
    adicionarLinhaButton.addEventListener('click', () => {
        const tabelaBase = document.getElementById('Base') as HTMLTableElement;
        const ultimaLinhaBase = tabelaBase.querySelector('tr:last-child') as HTMLTableRowElement;
        const novaLinha = ultimaLinhaBase.cloneNode(true) as HTMLTableRowElement;
        const tabelaNova = document.getElementById('Nova') as HTMLTableElement;
        tabelaNova.appendChild(novaLinha);
    });
});