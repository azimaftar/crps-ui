import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-tindakan.component').then(m => m.MaklumatTindakanComponent),
    data: {
      title: `Maklumat-Tindakan`
    }
  }
];

