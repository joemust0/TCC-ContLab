import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componets/main/main.component';
import { LoginComponent } from './componets/login/login.component';
import { CadUsuarioComponent } from './componets/cad-usuario/cad-usuario.component';
import { LancamentosComponent } from './componets/lancamentos/lancamentos.component';
import { BalancoComponent } from './componets/balanco/balanco.component';
import { TestesComponent } from './componets/testes/testes.component';


const routes: Routes = [
  {path: '', component: MainComponent },
  {path: 'login', component: LoginComponent },
  {path: 'cadastro', component: CadUsuarioComponent },
  {path: 'lançamentos', component: LancamentosComponent },
  {path: 'balanço', component: BalancoComponent },
  {path: 'testes', component: TestesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
