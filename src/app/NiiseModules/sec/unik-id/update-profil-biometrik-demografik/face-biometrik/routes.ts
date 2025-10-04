import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./face-biometrik.component').then(m => m.FaceBiometrikComponent),
    data: {
      title: `Face Biometrik`
    }
  },
  // {
  //   path: 'status-biometrik',
  //   loadChildren: () =>
  //       import('../status-biometrik/routes').then((m) => m.routes),
  // },
];

