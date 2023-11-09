import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Front/main/main.component';
import { LoginComponent } from './Front/Usuario/login/login.component';
import { CadUsuarioComponent } from './Front/Usuario/cad-usuario/cad-usuario.component';
import { LancamentosComponent } from './Front/ferramenta/lancamentos/lancamentos.component';
import { BalancoComponent } from './Front/ferramenta/balanco/balanco.component';
import { TestesComponent } from './Dev/testes/testes.component';
import { MotorDeCalculoComponent } from './Dev/motor-de-calculo/motor-de-calculo.component';
import { GraficoComponent } from './Front/ferramenta/grafico/grafico.component';

const routes: Routes = [
  {path: '', component: MainComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadUsuarioComponent },
  {path: 'lançamentos', component: LancamentosComponent },
  {path: 'balanço', component: BalancoComponent },
  {path: 'testes', component: TestesComponent },
  {path: 'motor', component: MotorDeCalculoComponent },
  {path: 'Graf-balanço', component: GraficoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
