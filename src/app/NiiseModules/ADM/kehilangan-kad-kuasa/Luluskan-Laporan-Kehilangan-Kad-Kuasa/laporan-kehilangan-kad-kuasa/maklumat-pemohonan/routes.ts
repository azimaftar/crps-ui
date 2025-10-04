import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pemohonan.component').then(m => m.MaklumatPemohonanComponent),
    data: {
      title: `Maklumat Pemohonan`
    }
  }
];