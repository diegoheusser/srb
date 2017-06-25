import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ScreenUnderConstructionComponent } from './screen-under-construction/screen-under-construction.component';
import { FormInseminadorComponent } from './form-inseminador/form-inseminador.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'screen-under-construction', component: ScreenUnderConstructionComponent },
    { path: 'inseminador/novo', component: FormInseminadorComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);