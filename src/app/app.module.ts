import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Front/main/main.component';
import { HeaderComponent } from './Front/header/header.component';
import { FooterComponent } from './Front/footer/footer.component';
import { LoginComponent } from './Usuario/login/login.component';
import { CadUsuarioComponent } from './Usuario/cad-usuario/cad-usuario.component';
import { LancamentosComponent } from './Front/ferramenta/lancamentos/lancamentos.component';
import { BalancoComponent } from './Front/ferramenta/balanco/balanco.component';
import { NavComponent } from './Front/nav/nav.component';
import { CadastroComponent } from './Front/ferramenta/cadastro/cadastro.component';
import { GraficoComponent } from './Front/ferramenta/grafico/grafico.component';
import { ScriptComponent } from './Dev/PHP/script/script.component';
import { TestesComponent } from './Dev/testes/testes.component';
import { MonologComponent } from './Dev/PHP/monolog/monolog.component';
import { SlimComponent } from './Dev/PHP/slim/slim.component';
import { MotorDeCalculoComponent } from './Dev/motor-de-calculo/motor-de-calculo.component';
import { FormComponent } from './Front/ferramenta/form/form.component';
import { ComparadorComponent } from './Dev/comparador/comparador.component';
import { SharedTableService } from './Dev/processos/shared-tab.service';
import { AreaUserComponentComponent } from './Usuario/area-user-component/area-user-component.component';
import { Login2Component } from './Usuario/login2/login2.component';
import { InfoLancamentoComponent } from './Front/ferramenta/info-lancamento/info-lancamento.component';
import { ExibirBalancoComponent } from './Front/ferramenta/exibir-balanco/exibir-balanco.component';
import { EdicaoUserComponent} from './Usuario/edicao-user/edicao-user.component'; 


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CadUsuarioComponent,
    LancamentosComponent,
    BalancoComponent,
    NavComponent,
    CadastroComponent,
    GraficoComponent,
    ScriptComponent,
    TestesComponent,
    MonologComponent,
    SlimComponent,
    MotorDeCalculoComponent,
    FormComponent,
    ComparadorComponent,
    AreaUserComponentComponent,
    Login2Component,
    InfoLancamentoComponent,
    ExibirBalancoComponent,
    EdicaoUserComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [SharedTableService],
  bootstrap: [AppComponent, FormComponent]
})
export class AppModule { }
