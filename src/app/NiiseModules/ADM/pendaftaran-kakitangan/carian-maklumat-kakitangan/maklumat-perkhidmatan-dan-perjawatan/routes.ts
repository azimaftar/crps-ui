import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-perkhidmatan-dan-perjawatan.component').then(m => m.MaklumatPerkhidmatanDanPerjawatanComponent),
    data: {
      title: `Maklumat Perkhidmatan Dan Perjawatan`
    }
  }
];