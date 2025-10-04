import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-ptj.component').then(m => m.MaklumatPtjSelepasDataDihapusComponent),
    data: {
      title: `Maklumat_PTJ`
    }
  }
];

