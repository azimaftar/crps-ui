import { Routes } from '@angular/router';
import { LayoutComponent } from './layout';

export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../view/dashboard/routes').then(m => m.routes)
  },
  {
    path: 'niise-employee',
    loadChildren: () => import('../app/NiiseModules/NiiseEmployee/routes').then(m => m.routes)
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
    loadChildren: () => import('../others/views/dev-references/theme/routes').then((m) => m.routes)
  },
  {
    path: 'base',
    loadChildren: () => import('../others/views/dev-references/base/routes').then((m) => m.routes)
  },
  {
    path: 'buttons',
    loadChildren: () => import('../others/views/dev-references/buttons/routes').then((m) => m.routes)
  },
  {
    path: 'forms',
    loadChildren: () => import('../others/views/dev-references/forms/routes').then((m) => m.routes)
  },
  {
    path: 'icons',
    loadChildren: () => import('../others/views/dev-references/icons/routes').then((m) => m.routes)
  },
  {
    path: 'notifications',
    loadChildren: () => import('../others/views/dev-references/notifications/routes').then((m) => m.routes)
  },
  {
    path: 'widgets',
    loadChildren: () => import('../others/views/dev-references/widgets/routes').then((m) => m.routes)
  },
  {
    path: 'charts',
    loadChildren: () => import('../others/views/dev-references/charts/routes').then((m) => m.routes)
  },
  {
    path: 'pages',
    loadChildren: () => import('../others/views/dev-references/pages/routes').then((m) => m.routes)
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
    loadComponent: () => import('../others/views/dev-references/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('../others/views/dev-references/pages/page500/page500.component').then(m => m.Page500Component),
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
