import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-laporan.component').then(m => m.MaklumatLaporanComponent),
    data: {
      title: `Maklumat Laporan`
    }
  }
];