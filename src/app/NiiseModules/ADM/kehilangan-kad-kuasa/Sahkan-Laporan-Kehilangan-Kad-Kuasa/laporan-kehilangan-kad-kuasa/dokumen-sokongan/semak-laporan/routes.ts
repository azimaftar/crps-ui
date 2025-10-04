import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./semak-laporan.component').then(m => m.SemakLaporanComponent),
    data: {
      title: `Semak Laporan`
    }
  }
];