import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-permohonan3.component').then(m => m.MaklumatPermohonan3Component),
    data: {
      title: `Maklumat Permohonan`
    }
  }
];



