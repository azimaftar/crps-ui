import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-harta.component').then(m => m.MaklumatHartaComponent),
    data: {
      title: `Maklumat Harta`
    }
  }
];