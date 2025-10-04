import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'carian-profil',
        loadChildren: () =>
          import('./carian-profil/routes').then((m) => m.routes),
      },
      {
        path: 'pendaftaran-profil',
        loadChildren: () =>
          import('./pendaftaran-profil/routes').then((m) => m.routes),
      },
      {
        path: 'ambil-biometrik',
        loadChildren: () =>
          import('./ambil-biometrik/routes').then((m) => m.routes),
      },
      {
        path: 'update-profil-biometrik-demografik',
        loadChildren: () =>
          import('./update-profil-biometrik-demografik/routes').then((m) => m.routes),
      },
    ]
  }
];




