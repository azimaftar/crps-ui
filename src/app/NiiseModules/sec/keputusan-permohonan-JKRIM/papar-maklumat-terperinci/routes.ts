import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./papar-maklumat-terperinci.component').then(m => m.paparmaklumatterperinciComponent),
    data: {
      title: `paparmaklumatterperinciComponent`
    }
  }
];

