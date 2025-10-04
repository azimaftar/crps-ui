import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kelulusan-status.component').then(m => m.KelulusanStatusComponent),
    data: {
      title: `status kelulusan ketua unit`
    },
  },
];

