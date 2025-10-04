import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan-laporan-kejadian.component').then(m => m.KelulusanLaporanKejadianComponent),
  },
  {
    path: 'kelulusan',
    loadComponent: () => import('./kelulusan/kelulusan.component').then(m => m.KelulusanComponent),
  },
];