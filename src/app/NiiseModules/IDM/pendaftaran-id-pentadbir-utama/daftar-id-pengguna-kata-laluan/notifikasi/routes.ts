import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./notifikasi.component').then(m => m.NotifikasiComponent),
    data: {
      title: `Sejarah ID`
    }
  }
];

