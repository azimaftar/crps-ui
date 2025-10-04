import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./laman-utama.component').then(m => m.LamanUtamaComponent),
    data: {
      title: `Notifikasi`
    }
  }
];

