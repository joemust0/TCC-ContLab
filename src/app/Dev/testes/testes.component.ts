import { Component } from '@angular/core';
import { CalcExt } from './CalcExt';

@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent {
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
