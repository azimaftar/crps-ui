import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pegawai-pengganti.component').then(m => m.MaklumatPegawaiPenggantiComponent),
    data: {
      title: `Maklumat Pegawai Pengganti`
    }
  }
];

