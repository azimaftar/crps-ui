import { Routes } from "@angular/router";

export const IdmAgensiRoutes: Routes = [
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
        path: 'terima-notifikasi-di-menu-notifikasi',
        loadChildren: () =>
          import('./terima-notifikasi-di-menu-notifikasi/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-ptj-selepas-data-dihapus',
        loadChildren: () =>
          import('./maklumat-ptj/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-profil-pegawai',
        loadChildren: () =>
          import('./maklumat-profile-pegawai/routes').then(m => m.routes)
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
          import('./senarai-permohonan/routes').then(m => m.routes)
      },
    ]
  }
];
