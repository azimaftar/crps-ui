import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesyoran-permohonan.component').then(m => m.PengesyoranPermohonanComponents),
    data: {
      title: `Pengesyoran Permohonan Pas Perkahwinan Bagi Warga Asing`
    }
  }
];


