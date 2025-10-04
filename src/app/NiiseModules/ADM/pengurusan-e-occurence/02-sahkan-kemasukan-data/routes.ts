import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'carian-tetapan-kejadian',
    loadComponent: () => import('./carian-tetapan-kejadian/carian-tetapan-kejadian.component').then(m => m.CarianTetapanKejadianComponent),
  },
  {
    path: 'pengesahan-tetapan-kejadian',
    loadComponent: () => import('./pengesahan-tetapan-kejadian/pengesahan-tetapan-kejadian.component').then(m => m.PengesahanTetapanKejadianComponent),
  },
];
