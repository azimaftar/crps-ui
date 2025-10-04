import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pemohon.component').then(m => m.MaklumatPemohonComponent),
  },
  {
    path: 'kelulusan-permohonan-2',
    loadComponent: () => import('./kelulusan-permohonan-2/kelulusan-permohonan-2.component').then(m => m.KelulusanPermohonan2Component),
  }
];


