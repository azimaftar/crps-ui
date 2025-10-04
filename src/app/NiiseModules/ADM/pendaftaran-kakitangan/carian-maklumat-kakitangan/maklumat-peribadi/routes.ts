import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-peribadi.component').then(m => m.MaklumatPeribadiComponent),
    data: {
      title: `Maklumat Peribadi`
    }
  }
];