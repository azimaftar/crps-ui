import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-bayaran.component').then(m => m.MaklumatBayaranComponent),
    data: {
      title: `Maklumat Bayaran`
    }
  }
];