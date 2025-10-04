import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./permohonan-edaran-notis.component').then(m => m.PermohonanEdaranNotisComponent),
    data: {
      title: `Permohonan Edaran Notis`
    }
  },
  {
    path: 'permohonan-baru',
    loadComponent: () => import('./permohonan-baru/permohonan-baru.component').then(m => m.PermohonanBaruComponent),
    data: {
      title: `Permohonan Baru`
    }
  }
];


