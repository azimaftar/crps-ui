import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-clock-out.component').then(m => m.MaklumatClockOutComponent),
    data: {
      title: `Clock Out GeoTime`
    }
  }
];

