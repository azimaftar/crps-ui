import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-permohonan-gantian.component').then(m => m.MaklumatPermohonanGantianComponent),
    data: {
      title: `Maklumat Permohonan Gantian`
    }
  }
];