import { Injectable } from '@angular/core';
import { BalancoSheet } from '../../Front/Ferramenta/balancos/balancoSheet';


@Injectable({
  providedIn: 'root'
})
export class BalancoSheetService {
  private balancoSheet!: BalancoSheet;

  obterBalancoSheet() {
      // Chame a API do backend para buscar os dados do balanco sheet
      // Quando receber os dados, defina-os no `balancoSheet`
      this.balancoSheet = {
        ativosCirculantes: [],
        ativosNaoCirculantes: [],
        passivosCirculantes: [],
        passivosNaoCirculantes: [],
        patrimonio: [],
        lancamentosAtivoCirculante: [],
        lancamentosAtivoNCirculante: [],
        lancamentosPassivoCirculante: [],
        lancamentosPassivoNCirculante: [],
        lancamentosPatrimonioLiquido: []
      };

      return this.balancoSheet;
  }
}
