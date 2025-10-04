import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./daftar-maklumat-waran-penjawatan.component').then(m => m.DaftarMaklumatWaranPenjawatanComponent),
    data: {
      title: `Daftar Maklumat Penjawatan Waran`
    }
  }
];