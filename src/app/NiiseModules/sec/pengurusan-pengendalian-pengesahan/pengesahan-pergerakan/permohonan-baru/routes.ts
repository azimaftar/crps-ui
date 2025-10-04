import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./permohonan-baru.component').then( (m) => m.PermohonanBaruComponent),
    data: {
      title: `Permohonan Baru`
    }
  }
];
