import { Injectable } from '@angular/core';
import { BalancoSheet, Ativo, Passivo, nAtivo, nPassivo, Patrimonio } from '../Front/ferramenta/balanco/balancoSheet';

@Injectable()
export class BalancoSheetService {
    private balancoSheet!: BalancoSheet;

    obterBalancoSheet() {
        // Chame a API do backend para buscar os dados do balanco sheet
        // Quando receber os dados, defina-os no `balancoSheet`
        this.balancoSheet = {
            ativos: [
                { nome: 'Caixa', valor: 1 },
                { nome: 'Banco', valor: 2 },
                // Adicione mais ativos conforme necessário
            ],
            passivos: [
                { nome: 'Passivo Circulante', valor: 3 },
                { nome: 'Empréstimo', valor: 4 },
                // Adicione mais passivos conforme necessário
            ],
            ativosN: [
              { nome: 'Caixa', valor: 1 },
              { nome: 'Banco', valor: 2 },
              // Adicione mais ativos conforme necessário
          ],
          passivosN: [
              { nome: 'Passivo Circulante', valor: 3 },
              { nome: 'Empréstimo', valor: 4 },
              // Adicione mais passivos conforme necessário
          ],
            patrimonio: [
                { nome: 'Patrimônio Líquido', valor: 5 },
                // Adicione mais patrimônios conforme necessário
            ]
        };

        return this.balancoSheet;
    }
}