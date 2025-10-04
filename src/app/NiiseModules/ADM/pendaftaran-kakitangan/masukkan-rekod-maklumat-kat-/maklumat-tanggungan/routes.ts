import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-tanggungan.component').then(m => m.MaklumatTanggunganComponent),
    data: {
      title: `Maklumat Keluarga (Tanggungan)`
    }
  }
];