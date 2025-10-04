import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-penetapan-peranan.component').then(m => m.MaklumatPenetapanPerananComponent),
    data: {
      title: `Maklumat Penetapan Peranan`
    }
  }
];

