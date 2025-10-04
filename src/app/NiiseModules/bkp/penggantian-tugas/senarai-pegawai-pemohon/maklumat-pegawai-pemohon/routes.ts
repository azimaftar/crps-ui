import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pegawai-pemohon.component').then(m => m.MaklumatPegawaiPemohonComponent),
    data: {
      title: `Maklumat Pegawai Pemohon`
    }
  }
];

