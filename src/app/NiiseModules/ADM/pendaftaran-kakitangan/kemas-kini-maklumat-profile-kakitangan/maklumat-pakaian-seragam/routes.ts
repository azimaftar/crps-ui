import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pakaian-seragam.component').then(m => m.MaklumatPakaianSeragamComponent),
    data: {
      title: `Maklumat Pakaian Seragam`
    }
  }
];