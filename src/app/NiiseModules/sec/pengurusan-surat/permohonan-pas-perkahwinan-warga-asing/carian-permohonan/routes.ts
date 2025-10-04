import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-permohonan.component').then(m => m.CarianPermohonanComponents),
    data: {
      title: `Carian Permohonan Pas Perkahwinan Bagi Warga Asing`
    }
  }
];


