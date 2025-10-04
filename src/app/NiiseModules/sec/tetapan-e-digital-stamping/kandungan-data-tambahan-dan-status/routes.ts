import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kandungan-data-tambahan-dan-status.component').then(m => m.KandunganDataTambahanDanStatusComponent),
    data: {
      title: `Tetapan e-Digital Stamping`
    }
  }
];

