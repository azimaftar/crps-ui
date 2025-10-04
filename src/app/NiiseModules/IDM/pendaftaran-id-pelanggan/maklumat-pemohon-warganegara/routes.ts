import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pemohon-warganegara.component').then(m => m.MaklumatPemohonWarganegaraComponent),
    data: {
      title: `Maklumat Pemohon Warganegara`
    }
  }
];

