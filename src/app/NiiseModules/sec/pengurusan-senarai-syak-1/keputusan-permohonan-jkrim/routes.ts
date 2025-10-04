import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./keputusan-permohonan-jkrim').then(m => m.KeputusanPermohonanJkrim),
    data: {
      title: `Keputusan Permohonan Jkrim`,
    }
  }
];

