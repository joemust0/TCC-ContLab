
export class BalancoSheet {
ativos!: Ativo[];
passivos!:Passivo[];
ativosN!: nAtivo[];
passivosN!:nPassivo[];
patrimonio!: Patrimonio[];
}

export class Ativo {
  nome!: string;
  valor!: number;
}

export class Passivo {
  nome!: string;
  valor!: number;
}

export class nAtivo {
    nome!: string;
    valor!: number;
  }
  
  export class nPassivo {
    nome!: string;
    valor!: number;
  }

export class Patrimonio {
  nome!: string;
  valor!: number;
}