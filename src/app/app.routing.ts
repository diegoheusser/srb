import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ScreenUnderConstructionComponent } from './screen-under-construction/screen-under-construction.component';
import { FormInseminadorComponent } from './form-inseminador/form-inseminador.component';
import { FormRebanhoComponent } from './form-rebanho/form-rebanho.component';
import { ReportInseminacaoComponent } from './report-inseminacao/report-inseminacao.component';
import { ReportRebanhoComponent } from './report-rebanho/report-rebanho.component';
import { CadastradoComponent } from './cadastrado/cadastrado.component';
import { ImpressoComponent } from './impresso/impresso.component';
import { AuthGuard } from './guards/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'screen-under-construction', component: ScreenUnderConstructionComponent, canActivate: [AuthGuard] },
    { path: 'inseminador/novo', component: FormInseminadorComponent, canActivate: [AuthGuard] },
    { path: 'rebanho', component: ReportRebanhoComponent, canActivate: [AuthGuard] },
    { path: 'rebanho/novo', component: FormRebanhoComponent, canActivate: [AuthGuard] },
    { path: 'inseminacao', component: ReportInseminacaoComponent, canActivate: [AuthGuard] },
    { path: 'cadastrado', component: CadastradoComponent, canActivate: [AuthGuard] },
    { path: 'impresso', component: ImpressoComponent, canActivate: [AuthGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);