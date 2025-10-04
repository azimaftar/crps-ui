import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pekeliling-khas.component').then(m => m.PekelilingKhasComponent),
  },
  {
    path: 'papar',
    loadComponent: () => import('../papar-maklumat/papar-maklumat.component').then(m => m.PaparMaklumatComponent),
  }
];
