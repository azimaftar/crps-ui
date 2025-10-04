import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesahan-laporan-siasatan.component').then(m => m.PengesahanLaporanSiasatanComponent),
    data: {
      title: `Pengesahan Laporan Siasatan`
    }
  }
];