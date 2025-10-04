import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./surat-kemudahan-berlepas.component').then(m => m.SuratKemudahanBerlepasComponent),
  },
  {
    path: 'papar',
    loadComponent: () => import('../papar-maklumat/papar-maklumat.component').then(m => m.PaparMaklumatComponent),
  }
];
