import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-tanpa-kebenaran.component').then(m => m.MaklumatTanpaKebenaranComponent),
    data: {
      title: `Clock Out GeoTime Location`
    }
  }
];

