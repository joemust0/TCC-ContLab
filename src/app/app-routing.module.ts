import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Front/main/main.component';
import { LoginComponent } from './Usuario/login/login.component';
import { CadUsuarioComponent } from './Usuario/cad-usuario/cad-usuario.component';
import { LancamentosComponent } from './Front/ferramenta/lancamentos/lancamentos.component';
import { BalancoComponent } from './Front/ferramenta/balanco/balanco.component';
import { TestesComponent } from './Dev/testes/testes.component';
import { MotorDeCalculoComponent } from './Dev/motor-de-calculo/motor-de-calculo.component';
import { GraficoComponent } from './Front/ferramenta/grafico/grafico.component';
import { AreaUserComponentComponent } from './Usuario/area-user-component/area-user-component.component';
import { LogComponent } from './Usuario/log/log.component';

const routes: Routes = [
  {path: '', component: MainComponent },
  {path: 'login', component: LoginComponent },
  {path: 'lançamentos', component: LancamentosComponent },
  {path: 'balanço', component: BalancoComponent },
  {path: 'testes', component: TestesComponent },
  {path: 'motor', component: MotorDeCalculoComponent },
  {path: 'Graf-balanço', component: GraficoComponent },
  {path: 'cadUsuario', component: CadUsuarioComponent},
  {path: 'areaUser', component: AreaUserComponentComponent},
  {path: 'log', component: LogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
