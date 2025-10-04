import { Routes } from "@angular/router";

export const DaftarIdPenggunaKataLaluanRoutes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'dokumen-sokongan',
      //   loadChildren: () =>
      //     import('./dokumen-sokongan/routes').then(m => m.routes)
      // },
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
        path: 'dokumen-sokongan',
        loadChildren: () =>
          import('./dokumen-sokongan/routes').then(m => m.routes)
      },
      {
        path: 'sejarah-id',
        loadChildren: () =>
          import('./sejarah-id/routes').then(m => m.routes)
      },
      {
        path: 'notifikasi',
        loadChildren: () =>
          import('./notifikasi/routes').then(m => m.routes)
      }
    ]
  }
];
