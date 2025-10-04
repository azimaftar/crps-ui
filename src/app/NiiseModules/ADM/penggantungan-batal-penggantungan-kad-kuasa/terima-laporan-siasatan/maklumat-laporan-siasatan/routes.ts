import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-laporan-siasatan.component').then(m => m.MaklumatLaporanSiasatanComponent),
    data: {
      title: `Maklumat Laporan Siasatan`
    }
  }
];