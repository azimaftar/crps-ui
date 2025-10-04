import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesahan-laporan-kejadian.component').then(m => m.PengesahanLaporanKejadianComponent),
  },
  {
    path: 'pengesahan',
    loadComponent: () => import('./pengesahan/pengesahan.component').then(m => m.PengesahanComponent),
  },
];