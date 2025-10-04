import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan-permohonan.component').then(m => m.KelulusanPermohonanComponent),
  },
  {
    path: 'kategori-pemohon',
    loadComponent: () => import('./kategori-pemohon/kategori-pemohon.component').then(m => m.KategoriPemohonComponent),
  },
  {
    path: 'kategori-pemohon',
    loadChildren: () =>
      import('./kategori-pemohon/routes').then(m => m.routes),
  },
];


