import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SecureComponent } from './secure/secure.component';
import { KeycloakAuthGuard } from 'keycloak-angular';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirect to login on load
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomepageComponent },
    {
      path: 'secure',
      component: SecureComponent,
      canActivate: [KeycloakAuthGuard], // Protect this route
    },
];
