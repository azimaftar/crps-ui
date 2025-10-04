import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./visa-pas-permit.component').then(m => m.VisaPasPermitComponent),
  },
  {
    path: 'papar',
    loadComponent: () => import('../papar-maklumat/papar-maklumat.component').then(m => m.PaparMaklumatComponent),
  }
];
