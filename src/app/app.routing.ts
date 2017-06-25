import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ScreenUnderConstructionComponent } from './screen-under-construction/screen-under-construction.component';
import { FormInseminadorComponent } from './form-inseminador/form-inseminador.component';
import { FormRebanhoComponent } from './form-rebanho/form-rebanho.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'screen-under-construction', component: ScreenUnderConstructionComponent },
    { path: 'inseminador/novo', component: FormInseminadorComponent },
    { path: 'rebanho/novo', component: FormRebanhoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);