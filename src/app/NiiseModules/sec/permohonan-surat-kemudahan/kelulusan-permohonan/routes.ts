import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan-permohonan.component').then(m => m.KelulusanPermohonanComponent),
    data: {
      title: `Kelulusan Permohonan`
    }
  }
];


