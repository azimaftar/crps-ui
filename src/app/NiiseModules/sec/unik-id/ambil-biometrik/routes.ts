import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-profil.component').then(m => m.CarianProfilComponent),
    data: {
      title: `Carian Profil`
    }
  },
  {
    path: 'maklumat-profil-individu',
    loadChildren: () =>
        import('./maklumat-profil-individu/routes').then((m) => m.routes),
  },
  {
    path: 'biometrik',
    loadChildren: () =>
        import('./biometrik/routes').then((m) => m.routes),
  },
];

