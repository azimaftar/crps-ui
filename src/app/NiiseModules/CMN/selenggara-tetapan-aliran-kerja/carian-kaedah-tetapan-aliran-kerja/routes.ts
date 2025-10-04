import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./carian-kaedah-tetapan-aliran-kerja.component').then(m => m.CarianKaedahTetapanAliranKerjaComponent),
    data: {
      title: `Carian Kaedah Tetapan Aliran Kerja`
    },
  },
];