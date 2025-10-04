import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-penempatan.component').then(m => m.MaklumatPenempatanComponent),
    data: {
      title: `Maklumat Penempatan`
    }
  }
];