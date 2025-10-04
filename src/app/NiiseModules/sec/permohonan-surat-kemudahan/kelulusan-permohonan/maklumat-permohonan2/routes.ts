import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-permohonan2.component').then(m => m.MaklumatPermohonan2Component),
    data: {
      title: `Maklumat Permohonan`
    }
  }
];



