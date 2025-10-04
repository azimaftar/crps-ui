import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-lokasi.component').then(m => m.MaklumatLokasiComponent),
    data: {
      title: ``
    }
  }
];

  