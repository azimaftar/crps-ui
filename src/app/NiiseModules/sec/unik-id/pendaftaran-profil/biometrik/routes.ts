import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./biometrik.component').then(m => m.BiometrikComponent),
    data: {
      title: `Biometrik`
    }
  },
  {
    path: 'status-biometrik',
    loadChildren: () =>
        import('../status-biometrik/routes').then((m) => m.routes),
  },
];

