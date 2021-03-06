import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ScreenUnderConstructionComponent } from './screen-under-construction/screen-under-construction.component';
import { FormInseminadorComponent } from './form-inseminador/form-inseminador.component';
import { FormRebanhoComponent } from './form-rebanho/form-rebanho.component';
import { ReportInseminacaoComponent } from './report-inseminacao/report-inseminacao.component';
import { ReportRebanhoComponent } from './report-rebanho/report-rebanho.component';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CadastradoComponent } from './cadastrado/cadastrado.component';
import { ImpressoComponent } from './impresso/impresso.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent,
    HomeComponent,
    ScreenUnderConstructionComponent,
    FormInseminadorComponent,
    FormRebanhoComponent,
    ReportInseminacaoComponent,
    ReportRebanhoComponent,
    CadastradoComponent,
    ImpressoComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    routing
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }