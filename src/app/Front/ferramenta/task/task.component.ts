import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  nome: string = '';
  descricao: string = '';

  @ViewChild('btnNovo', { static: false }) oc!: ElementRef;
  @ViewChild('criarBalanco', { static: false }) ap!: ElementRef;
  @ViewChild('tabelaB', { static: false }) tabelaB!: ElementRef;

  mostrarBalanco: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.atualizarVisibilidade();
      });
  }
  private atualizarVisibilidade() {
    if (this.oc && this.ap && this.tabelaB) {
      const urlAtual = this.router.url;
      const mostrarTabela = urlAtual === '/balanço' && this.mostrarBalanco;

      this.oc.nativeElement.classList.toggle('ocultar', mostrarTabela);
      this.ap.nativeElement.classList.toggle('ocultar', mostrarTabela);
      this.tabelaB.nativeElement.classList.toggle('ocultar', !mostrarTabela);
    }
  }
ngOnInit(): void {}

newBalanco() {
  console.log("Nome: " + this.nome);
  console.log("Descrição: " + this.descricao);

  // Envia os dados para a tela de lançamentos e navega para lá
  this.router.navigate(['/lançamentos'], {
    state: {
      nome: this.nome,
      descricao: this.descricao
    }
  });
}
  nBalanco() {
    if (this.oc && this.ap) {
      this.oc.nativeElement.classList.add('ocultar');
      this.ap.nativeElement.classList.remove('ocultar');
      console.log("nBanalano aqui");
    }
  }

  ngAfterViewInit(): void {
    this.atualizarVisibilidade();
  }

  gerarBalanco() {
    this.mostrarBalanco = true;
  }

}
