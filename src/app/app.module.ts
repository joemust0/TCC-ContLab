import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Front/main/main.component';
import { HeaderComponent } from './Front/header/header.component';
import { FooterComponent } from './Front/footer/footer.component';
import { LoginComponent } from './Front/Usuario/login/login.component';
import { CadUsuarioComponent } from './Front/Usuario/cad-usuario/cad-usuario.component';
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



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
