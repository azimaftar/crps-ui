import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./clock-out-geo-time.component').then(m => m.ClockOutGeoTimeComponent),
    data: {
      title: `Clock Out GeoTime`
    }
  },
  {
    path: 'maklumat-clock-out',
    loadChildren: () =>
        import('./maklumat-clock-out/routes').then((m) => m.routes),
  },
  {
    path: 'maklumat-clock-out-location',
    loadChildren: () =>
        import('./maklumat-clock-out-location/routes').then((m) => m.routes),
  },
  {
    path: 'maklumat-keluar-awal',
    loadChildren: () =>
        import('./maklumat-keluar-awal/routes').then((m) => m.routes),
  },
   {
    path: 'maklumat-tanpa-kebenaran',
    loadChildren: () =>
        import('./maklumat-tanpa-kebenaran/routes').then((m) => m.routes),
  }
  
];

