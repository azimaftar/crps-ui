import { Routes } from "@angular/router";

export const BeriKelulusanRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'maklumat-pertukaran-cawangan',
        loadChildren: () =>
          import('./maklumat-pertukaran-cawangan/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-profil-pegawai',
        loadChildren: () =>
          import('./maklumat-profil-pegawai/routes').then(m => m.routes)
      },
            {
        path: 'maklumat-penetapan-peranan',
        loadChildren: () =>
          import('./maklumat-penetapan-peranan/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-ptj',
        loadChildren: () =>
          import('./maklumat-ptj/routes').then(m => m.routes)
      },
      {
        path: 'sejarah-id',
        loadChildren: () =>
          import('./sejarah-id/routes').then(m => m.routes)
      }
    ]
  }
];
