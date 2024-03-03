import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-balanco',
  templateUrl: './balanco.component.html',
  styleUrls: ['./balanco.component.css']
})
export class BalancoComponent implements AfterViewInit{

  @Input() lancamentosAtivoCirculante: any[] = [];
  @Input() lancamentosAtivoNCirculante: any[] = [];
  @Input() lancamentosPassivoCirculante: any[] = [];
  @Input() lancamentosPassivoNCirculante: any[] = [];
  @Input() lancamentosPatrimonioLiquido: any[] = [];
  @Input() lancamentos: any[] = [];

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

  gerarBalanco() {
    this.mostrarBalanco = true;
  }

  ngAfterViewInit(): void {
    this.atualizarVisibilidade();
  }

  getTotalAtivos(): number {
    return (
      this.getAtivoCirculante() +
      this.getAtivoNCirculante()
    );
  }

  getTotalPassivos(): number {
    return (
      this.getPassivoCirculante() +
      this.getPassivoNCirculante() +
      this.getPatrimonioLiquido()
    );
  }

  private getAtivoCirculante(): number {
    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Caixa' || lanc.conta === 'Banco' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Caixa' || lanc.conta === 'Banco' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return debito - credito;
  }

  private getAtivoNCirculante(): number {
    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Imobilizado' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Imobilizado' || lanc.conta === 'Estoque'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return debito - credito;
  }

  private getPassivoCirculante(): number {
    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return credito - debito;
  }

  private getPassivoNCirculante(): number {
    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && (lanc.conta === 'Fornecedor' || lanc.conta === 'Empréstimo'))
      .reduce((acc, curr) => acc + curr.valor, 0);

    return credito - debito;
  }

  private getPatrimonioLiquido(): number {
    const credito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Crédito' && lanc.conta === 'Capital Social') || [];

    const debito = this.lancamentos
      .filter(lanc => lanc.tipo === 'Débito' && lanc.conta === 'Capital Social') || [];

    const creditoTotal = credito.reduce((acc, curr) => acc + (curr.valor || 0), 0);
    const debitoTotal = debito.reduce((acc, curr) => acc + (curr.valor || 0), 0);

    return creditoTotal - debitoTotal;
  }
}
