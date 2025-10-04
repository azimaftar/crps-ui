import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pendaftaran-profil.component').then(m => m.PendaftaranProfilComponent),
    data: {
      title: `Pendaftaran Profil`
    }
  },
  {
    path: 'biometrik',
    loadChildren: () =>
        import('./biometrik/routes').then((m) => m.routes),
  },
  {
    path: 'face-biometrik',
    loadChildren: () =>
        import('./face-biometrik/routes').then((m) => m.routes),
  },
];

