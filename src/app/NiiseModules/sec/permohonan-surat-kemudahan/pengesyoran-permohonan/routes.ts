import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesyoran-permohonan.component').then(m => m.PengesyoranPermohonanComponent),
    data: {
      title: `Pengesyoran Permohonan`
    }
  }
];


