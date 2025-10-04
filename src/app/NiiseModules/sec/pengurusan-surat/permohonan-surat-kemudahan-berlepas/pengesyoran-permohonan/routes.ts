import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesyoran-permohonan.component').then(m => m.PengesyoranPermohonanComponent),
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


