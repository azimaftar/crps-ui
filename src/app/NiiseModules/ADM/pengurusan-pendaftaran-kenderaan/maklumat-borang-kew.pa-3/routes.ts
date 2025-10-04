import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-borang-kew.pa-3.component').then(m => m.MaklumatBorangKEWPA3Component),
    data: {
      title: `Carian Maklumat Kenderaan`
    }
  }
];