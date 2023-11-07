export interface funcaoCont{

  contaDebito(contaO:number, contaD: number): number;
  contaCredito(contaO:number, contaD: number): number;
  contaPL(contaO:number, contaD: number): number;

  showValue(): void;


}

