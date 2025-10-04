import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pengurusan-tetapan-kaedah-aliran-kerja.component').then(m => m.PengurusanTetapanKaedahAliranKerjaComponent),
    data: {
      title: `Pengurusan Tetapan Kaedah Aliran Kerja`
    },
  },
];