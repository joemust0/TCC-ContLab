import { Calculator } from "./Calculator";

type Operation="+"| "-"| "*"| "/";

export class CalcExt implements Calculator{
private value: number;

constructor(){
  this.value = 0;
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

