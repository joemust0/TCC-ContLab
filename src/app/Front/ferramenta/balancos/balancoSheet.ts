export class BalancoSheet {
  ativosCirculantes: Ativo[] = [];
  ativosNaoCirculantes: AtivoNaoCirculante[] = [];
  passivosCirculantes: Passivo[] = [];
  passivosNaoCirculantes: PassivoNaoCirculante[] = [];
  patrimonio: Patrimonio[] = [];
  lancamentosAtivoCirculante: any[] = [];
  lancamentosAtivoNCirculante: any[] = [];
  lancamentosPassivoCirculante: any[] = [];
  lancamentosPassivoNCirculante: any[] = [];
  lancamentosPatrimonioLiquido: any[] = [];
  };


export class Ativo {
  nome!: string;
  valor!: number;
}

export class AtivoNaoCirculante {
  nome!: string;
  valor!: number;
}
export class Passivo {
  nome!: string;
  valor!: number;
}

export class PassivoNaoCirculante {
  nome!: string;
  valor!: number;
}

export class Patrimonio {
  nome!: string;
  valor!: number;
}
