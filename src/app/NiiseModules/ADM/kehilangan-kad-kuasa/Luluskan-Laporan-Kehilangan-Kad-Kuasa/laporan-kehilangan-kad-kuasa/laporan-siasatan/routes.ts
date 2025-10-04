import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./laporan-siasatan.component').then(m => m.LaporanSiasatanComponent),
    data: {
      title: `Laporan Siasatan`
    }
  }
];