import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-maklumat-kenderaan.component').then(m => m.CarianMaklumatKenderaanComponent),
    data: {
      title: `Carian Maklumat Kenderaan`
    }
  }
];