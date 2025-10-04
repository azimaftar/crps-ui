import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-clock-out-location.component').then(m => m.MaklumatClockOutLocationComponent),
    data: {
      title: `Clock Out GeoTime Location`
    }
  }
];

