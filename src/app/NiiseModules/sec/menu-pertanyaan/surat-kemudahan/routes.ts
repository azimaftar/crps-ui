import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./surat-kemudahan.component').then(m => m.SuratKemudahanComponent),
  },
  {
    path: 'papar',
    loadComponent: () => import('../papar-maklumat/papar-maklumat.component').then(m => m.PaparMaklumatComponent),
  }
];
