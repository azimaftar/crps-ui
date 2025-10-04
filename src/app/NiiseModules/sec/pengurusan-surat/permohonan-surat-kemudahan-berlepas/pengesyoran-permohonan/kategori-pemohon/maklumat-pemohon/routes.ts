import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pemohon.component').then(m => m.MaklumatPemohonComponent),
  },
  {
    path: 'pengesyoran-permohonan-2',
    loadComponent: () => import('./pengesyoran-permohonan-2/pengesyoran-permohonan-2.component').then(m => m.PengesyoranPermohonan2Component),
  }
];


