import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';

export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../others/views/dashboard/routes').then(m => m.routes)
  },
  {
    path: 'employee',
    loadChildren: () => import('./_jpj-modules/employee/routes').then(m => m.routes)
  },
  {
    path: 'perlesenanKenderaan',
    loadChildren: () => import('./_jpj-modules/employee/routes').then(m => m.routes)
  },
  {
    path: 'theme',
    loadChildren: () => import('../others/views/theme/routes').then((m) => m.routes)
  },
  {
    path: 'base',
    loadChildren: () => import('../others/views/base/routes').then((m) => m.routes)
  },
  {
    path: 'buttons',
    loadChildren: () => import('../others/views/buttons/routes').then((m) => m.routes)
  },
  {
    path: 'forms',
    loadChildren: () => import('../others/views/forms/routes').then((m) => m.routes)
  },
  {
    path: 'icons',
    loadChildren: () => import('../others/views/icons/routes').then((m) => m.routes)
  },
  {
    path: 'notifications',
    loadChildren: () => import('../others/views/notifications/routes').then((m) => m.routes)
  },
  {
    path: 'widgets',
    loadChildren: () => import('../others/views/widgets/routes').then((m) => m.routes)
  },
  {
    path: 'charts',
    loadChildren: () => import('../others/views/charts/routes').then((m) => m.routes)
  },
  {
    path: 'pages',
    loadChildren: () => import('../others/views/pages/routes').then((m) => m.routes)
  }
];

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    data: {
      title: 'Home'
    },
    children: childRoutes
  },
  {
    path: '404',
    loadComponent: () => import('../others/views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('../others/views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./_jpj-modules/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'landing',
    loadComponent: () => import('./_jpj-modules/landing/landing.component').then(m => m.LandingComponent),
    data: {
      title: 'Landing Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./_jpj-modules/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
