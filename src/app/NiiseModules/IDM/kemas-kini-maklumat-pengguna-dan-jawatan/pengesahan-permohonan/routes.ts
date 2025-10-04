import { Routes } from "@angular/router";

export const PengesahanPermohonanRoutes: Routes = [
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
      }
    ]
  }
];
