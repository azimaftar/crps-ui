import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'carian-tetapan-kejadian',
    loadComponent: () => import('./carian-tetapan-kejadian/carian-tetapan-kejadian.component').then(m => m.CarianTetapanKejadianComponent),
  },
  {
    path: 'kemasukan-tetapan-kejadian',
    loadComponent: () => import('./kemasukan-tetapan-kejadian/kemasukan-tetapan-kejadian.component').then(m => m.KemasukanTetapanKejadianComponent),
  },
];