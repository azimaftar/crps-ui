import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./permohonan-pegawai-bantuan.component').then(m => m.PermohonanPegawaiBantuanComponent),
    data: {
      title: `Maklumat-Penatapan-Peranan`
    }
  }
];

