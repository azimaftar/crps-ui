import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-keluar-awal.component').then(m => m.MaklumatkeluarAwalComponent),
    data: {
      title: `Maklumat Keluar Awal`
    }
  }
];

