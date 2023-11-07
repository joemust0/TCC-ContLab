import {funcaoCont} from "./funcaoCont";

type Operation = "+"| "-"| "*"| "/";

export class contFuncao implements funcaoCont {
  private value: number;


  constructor(){
    this.value = 0;
  }

  private contabLogic (contaO: number, Operation, contaD:number): number{


    switch (Operation) {
      case "btn-Debito":

      contaDebito(contaO: number, contaD: number): number {
        throw new Error("Method not implemented.");
      }
      contaCredito(contaO: number, contaD: number): number {
        throw new Error("Method not implemented.");
      }
      contaPL(contaO: number, contaD: number): number {
        throw new Error("Method not implemented.");
      }
      showValue(): void {
        throw new Error("Method not implemented.");
      }
        break;

      default:
        break;
    }



}


  //1
  private calcLogic(frist:number, operarion:Operation, last:number):number{
  switch (operarion) {
    case "+":
      return this.sum(frist, last);
      case "-":
      return this.subtract(frist, last);
      case "*":
      return this.multiply(frist, last);
      case "/":
      return this.divide(frist, last);
      default:
      break;
  }
  return 0;
  }
  //2
  public calculate(frist:number, operarion:Operation, last:number){
  let result = this.calcLogic(frist, operarion, last);
  this.value = result;
  }

    sum(frist: number, last: number): number {
      return frist + last;
    }
    subtract(frist: number, last: number): number {
      return frist - last;
    }
    multiply(frist: number, last: number): number {
      return frist * last;
    }
    divide(frist: number, last: number): number {
      return frist / last;
    }
    showValue(): number {
      return this.value;
    }

  }

