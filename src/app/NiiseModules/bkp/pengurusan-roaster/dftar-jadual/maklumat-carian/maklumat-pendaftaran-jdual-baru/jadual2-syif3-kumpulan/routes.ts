import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./jadual2-syif3-kumpulan.component').then(m => m.Jadual2Syif3KumpulanComponent),
    data: {
      title: ``
    }
  }
];

