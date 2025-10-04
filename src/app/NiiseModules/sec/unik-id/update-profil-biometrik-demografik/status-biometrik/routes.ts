import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./status-biometrik.component').then(m => m.StatusBiometrikComponent),
    data: {
      title: `Status Biometrik`
    }
  },
  {
    path: 'maklumat-profil-individu',
    loadChildren: () =>
        import('../maklumat-profil-individu/routes').then((m) => m.routes),
  },
  {
    path: 'face-biometrik',
    loadChildren: () =>
        import('../face-biometrik/routes').then((m) => m.routes),
  },
];

