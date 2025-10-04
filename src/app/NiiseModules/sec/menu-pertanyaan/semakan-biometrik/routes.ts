import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./semakan-biometrik.component').then(m => m.SemakanBiometrikComponent),
  },
  {
    path: 'papar',
    loadComponent: () => import('../papar-maklumat/papar-maklumat.component').then(m => m.PaparMaklumatComponent),
  }
];
