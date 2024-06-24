import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PContas } from 'src/app/Lancamentos';
import { PContasService } from 'src/app/Servicos/planoDeContas/plano-de-contas.service';

@Component({
  selector: 'app-lancamentos-teste',
  templateUrl: './lancamentos-teste.component.html',
  styleUrls: ['./lancamentos-teste.component.css']
})
export class LancamentosTesteComponent implements OnInit {

  pContasList$!: Observable<PContas[]>;

  constructor(private pContasService: PContasService) {}

  ngOnInit() {
    this.buscarPContas();
  }

  buscarPContas() {
    this.pContasList$ = this.pContasService.buscarTodos();
    this.pContasList$.subscribe(
      data => console.log('Dados recebidos:', data),
      error => console.error('Erro ao buscar PContas:', error)
    );
  }

}
