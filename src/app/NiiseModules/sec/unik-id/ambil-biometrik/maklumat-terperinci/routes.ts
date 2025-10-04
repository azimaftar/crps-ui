import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-terperinci.component').then(m => m.MaklumatTerperinci),
    data: {
      title: `Maklumat Terperinci`
    }
  },
  {
    path: 'face-biometrik',
    loadChildren: () =>
        import('../face-biometrik/routes').then((m) => m.routes),
  },
];

