import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pemohon-bukan-warganegara.component').then(m => m.MaklumatPemohonBukanWarganegaraComponent),
    data: {
      title: `Maklumat Pemohon Bukan Warganegara`
    }
  }
];

