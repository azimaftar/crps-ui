import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '404',
    loadComponent: () => import('./page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('../../../../app/NiiseModules/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'landing',
    loadComponent: () => import('../../../../app/NiiseModules/landing/landing.component').then(m => m.LandingComponent),
    data: {
      title: 'Landing Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('../../../../app/NiiseModules/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  }
];
