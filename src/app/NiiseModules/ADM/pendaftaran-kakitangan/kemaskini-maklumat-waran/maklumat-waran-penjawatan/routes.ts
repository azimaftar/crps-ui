import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-waran-penjawatan.component').then(m => m.MaklumatWaranPenjawatanComponent),
    data: {
      title: `Maklumat Waran Penjawatan`
    }
  }
];