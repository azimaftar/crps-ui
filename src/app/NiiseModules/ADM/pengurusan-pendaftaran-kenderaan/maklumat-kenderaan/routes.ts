import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-kenderaan.component').then(m => m.MaklumatKenderaanComponent),
    data: {
      title: `Maklumat Kenderaan`
    }
  }
];