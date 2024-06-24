export interface PContas {
  id?: number;
  tipo: string;
  periodo_c: string;
  modelo: string;
  conta: string;
}

export interface Lancamento {
  id_plano_de_contas?: number;
  conta_analitica?: string;
  c_debito?: string;
  v_debito?: number;
  c_credito?: string;
  v_credito?: number;
  tipo?: string;
  periodo_c?: string;
  titulo?: string;
  conta?: string;
}

export interface LancamentoDetalhe {
  selecionado: boolean;
  tipos: any;
  tipoCredito: any;
  camposDinamicos: any;
  periodo_cs: any;
  modelo: any;
  conta: any;
  valor: string | number;
  contrapartida: any;
  chave_nf: string;
  num_nf: string;
  serie_nf: string;
  data_criacao: string;
  data_entrada: string;
  periodoCredito: any;  // Adicione esta linha
  debito: {
    c_debito: string;
    v_debito: number;
    id_plano_de_contas?: number;
    conta_analitica?: string;
  }[];
  credito: {
    c_credito: string;
    v_credito: number;
    id_plano_de_contas?: number;
    conta_analitica?: string;
  }[];
}
