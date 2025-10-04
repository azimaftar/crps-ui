import { Routes } from "@angular/router";

export const PenetapanPerananTugasanRoutes: Routes = [
  {
    path: '',
    children: [
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
        path: 'permohonan-tambah-peranan',
        loadChildren: () =>
          import('./permohonan-tambah-peranan/routes').then(m => m.routes)
      }
    ]
  }
];
