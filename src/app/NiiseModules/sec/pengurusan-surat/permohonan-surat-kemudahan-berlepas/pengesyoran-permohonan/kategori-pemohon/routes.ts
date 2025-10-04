import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kategori-pemohon.component').then(m => m.KategoriPemohonComponent),
  },
  {
    path: 'maklumat-pemohon',
    loadComponent: () => import('./maklumat-pemohon/maklumat-pemohon.component').then(m => m.MaklumatPemohonComponent),
  },
  {
    path: 'maklumat-pemohon',
    loadChildren: () =>
      import('./maklumat-pemohon/routes').then(m => m.routes),
  },
];


