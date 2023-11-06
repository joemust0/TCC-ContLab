import { Router } from '@angular/router';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-balanco',
  templateUrl: './balanco.component.html',
  styleUrls: ['./balanco.component.css']
})
export class BalancoComponent {

  @ViewChild('btnNovo') oc!: ElementRef;
  @ViewChild('criarBalanco') ap!: ElementRef;

  constructor(private router: Router) {}

  newBalanco() {
    const nameInput = <HTMLInputElement>document.getElementById("name");
    const descInput = <HTMLTextAreaElement>document.getElementById("description");

    const name = nameInput.value;
    const description = descInput.value;

    // Passando os valores como parâmetros na navegação
    this.router.navigate(['/lançamentos'], {
      queryParams: { nome: name, descricao: description }
    });
  }

  nBalanco() {
    this.oc.nativeElement.classList.add('ocultar');
    this.ap.nativeElement.classList.remove('ocultar');
  }
}
