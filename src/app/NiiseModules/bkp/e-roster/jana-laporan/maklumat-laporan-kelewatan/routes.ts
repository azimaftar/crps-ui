import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-laporan-kelewatan.component').then(m => m.MaklumatLaporanLewatComponent),
    data: {
      title: `Laporan`
    }
  }
];

