import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./keputusan-permohonan.component').then((m) => m.KeputusanPermohonanComponent),
    data: {
        title: "Keputusan Permohonan"
    }
  }
];

