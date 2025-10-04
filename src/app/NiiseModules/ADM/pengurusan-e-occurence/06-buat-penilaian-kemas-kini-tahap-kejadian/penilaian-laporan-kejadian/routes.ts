import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./penilaian-laporan-kejadian.component').then(m => m.PenilaianLaporanKejadianComponent),
  },
  {
    path: 'penilaian',
    loadComponent: () => import('./penilaian/penilaian.component').then(m => m.PenilaianComponent),
  },
];