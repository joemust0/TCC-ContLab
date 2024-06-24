import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Front/nav/nav.component';
import { HeaderComponent } from './Front/header/header.component';
import { FooterComponent } from './Front/footer/footer.component';
import { MainComponent } from './Front/main/main.component';
import { LancamentosComponent } from './Front/Ferramenta/lancamentos/lancamentos.component';
import { BalancosComponent } from './Front/Ferramenta/balancos/balancos.component';
import { InfoLancamentoComponent } from './Front/Ferramenta/info-lancamento/info-lancamento.component';
import { LoginComponent } from './Usuario/login/login.component';
import { CadUsuarioComponent } from './Usuario/cad-usuario/cad-usuario.component';
import { AreaUserComponent } from './Usuario/area-user/area-user.component';
import { TaskComponent } from './Front/Ferramenta/task/task.component';
import { FormComponent } from './Front/Ferramenta/form/form.component';
import { ExibirBalancoComponent } from './Front/Ferramenta/exibir-balanco/exibir-balanco.component';
import { SharedTableService } from './Dev/processos/shared-tab.service';
import { BalancoSheetService } from './Servicos/balancos/balanco-sheet.service';
import { UsuarioService } from './Servicos/usuarios/usuario.service';
import { EdicaoUserComponent } from './Usuario/edicao-user/edicao-user.component';
import { LancamentosService } from './Servicos/lancamentos/lancamentos.service';
import { PContasService } from './Servicos/planoDeContas/plano-de-contas.service';
import { LancamentosTesteComponent } from './Front/Ferramenta/teste/lancamentos-teste/lancamentos-teste.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LancamentosComponent,
    BalancosComponent,
    InfoLancamentoComponent,
    LoginComponent,
    CadUsuarioComponent,
    AreaUserComponent,
    TaskComponent,
    FormComponent,
    ExibirBalancoComponent,
    EdicaoUserComponent,
    LancamentosTesteComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [SharedTableService, BalancoSheetService, UsuarioService, LancamentosService, PContasService],
  bootstrap: [AppComponent, FormComponent]
})
export class AppModule { }
