import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan-permohonan.component').then(m => m.KelulusanPermohonanComponents),
    data: {
      title: `Kelulusan Permohonan Pas Perkahwinan Bagi Warga Asing`
    }
  }
];


