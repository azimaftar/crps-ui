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
    loadComponent: () => import('../../../app/_jpj-modules/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'landing',
    loadComponent: () => import('../../../app/_jpj-modules/landing/landing.component').then(m => m.LandingComponent),
    data: {
      title: 'Landing Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('../../../app/_jpj-modules/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  }
];
