import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-anugerah.component').then(m => m.MaklumatAnugerahComponent),
    data: {
      title: `Maklumat Anugerah`
    }
  }
];