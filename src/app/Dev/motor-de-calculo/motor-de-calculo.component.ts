import { Component } from '@angular/core';
import { CalcExt } from './CalcExt';


@Component({
  selector: 'app-motor-de-calculo',
  templateUrl: './motor-de-calculo.component.html',
  styleUrls: ['./motor-de-calculo.component.css']
})
export class MotorDeCalculoComponent {
  private calc: CalcExt;
  resultados: number [] = [];
  fristV: number =0;
  lastV: number =0;

  constructor() {
  this.calc = new CalcExt();
  }

  executarCalculos(){
  this.resultados =[];

  this.calc.calculate(this.fristV, "+", this.lastV);
  this.resultados.push(this.calc.showValue());

  this.calc.calculate(this.fristV, "-", this.lastV);
  this.resultados.push(this.calc.showValue());

  this.calc.calculate(this.fristV, "*", this.lastV);
  this.resultados.push(this.calc.showValue());

  this.calc.calculate(this.fristV, "/", this.lastV);
  this.resultados.push(this.calc.showValue());
  }

  }

