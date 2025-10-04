import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-ptj.component').then(m => m.MaklumatPtjComponent),
    data: {
      title: `Maklumat PTJ`
    }
  }
];