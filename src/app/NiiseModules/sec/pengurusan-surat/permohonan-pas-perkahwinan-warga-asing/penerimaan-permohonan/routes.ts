import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./penerimaan-permohonan.component').then(m => m.PenerimaanPermohonanComponents),
    data: {
      title: `Penerimaan Permohonan Pas Perkahwinan Bagi Warga Asing`
    }
  },
  {
    path: 'Maklumat-Permohonan',
    loadChildren: () => import('./maklumat-pemohon/routes').then(m => m.routes),
    data: {
      title: `Maklumat Permohonan Pas Perkahwinan Bagi Warga Asing`
    }
  },
  {

  }
];


