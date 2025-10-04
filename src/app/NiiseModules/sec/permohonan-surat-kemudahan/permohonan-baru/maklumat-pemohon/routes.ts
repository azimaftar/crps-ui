import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pemohon.component').then(m => m.MaklumatPemohonComponent),
    data: {
      title: `Maklumat Pemohon`
    }
  }
];

