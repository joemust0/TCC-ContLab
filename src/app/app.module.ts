import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './componets/main/main.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { LoginComponent } from './componets/login/login.component';
import { CadUsuarioComponent } from './componets/cad-usuario/cad-usuario.component';
import { LancamentosComponent } from './componets/lancamentos/lancamentos.component';
import { BalancoComponent } from './componets/balanco/balanco.component';
import { NavComponent } from './componets/nav/nav.component';
import { CadastroComponent } from './componets/tabelas/cadastro/cadastro.component';
import { GraficoComponent } from './componets/tabelas/grafico/grafico.component';
import { ScriptComponent } from './componets/php/script/script.component';
import { TestesComponent } from './componets/testes/testes.component';
import { MonologComponent } from './componets/php/monolog/monolog.component';
import { SlimComponent } from './componets/php/slim/slim.component';


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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
