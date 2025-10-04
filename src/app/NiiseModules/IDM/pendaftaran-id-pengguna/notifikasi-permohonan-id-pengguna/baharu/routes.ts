import { Routes } from "@angular/router";

export const IdmBaharuRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dokumen-sokongan',
        loadChildren: () =>
          import('./dokumen-sokongan/routes').then(m => m.routes)
      },
      {
        path: 'laman-utama',
        loadChildren: () =>
          import('./laman-utama/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-ptj',
        loadChildren: () =>
          import('./maklumat-ptj/routes').then(m => m.routes)
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
        path: 'sejarah-id',
        loadChildren: () =>
          import('./sejarah-id/routes').then(m => m.routes)
      },
      {
        path: 'senarai-permohonan-id',
        loadChildren: () =>
          import('./senarai-permohonan-id/routes').then(m => m.routes)
      },
    ]
  }
];
