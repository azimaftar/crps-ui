import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-profil-individu.component').then(m => m.MaklumatProfilIndividu),
    data: {
      title: `Maklumat Profil Individu`
    }
  },
  {
    path: 'maklumat-terperinci',
    loadChildren: () =>
        import('../maklumat-terperinci/routes').then((m) => m.routes),
  },
  {
    path: 'biometrik',
    loadChildren: () =>
        import('../biometrik/routes').then((m) => m.routes),
  },
];

