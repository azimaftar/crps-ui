import { Routes } from "@angular/router";

export const jimKatRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'kakitangan-sedia-ada',
        loadChildren: () =>
          import('./dashboard-pendaftaran-id-baharu/routes').then(m => m.routes)
      },
      {
        path: 'dokumen-sokongan',
        loadChildren: () =>
          import('./dokumen-sokongan/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-penetapan-peranan',
        loadChildren: () =>
          import('./maklumat-penetapan-peranan/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-profil-pegawai',
        loadChildren: () =>
          import('./maklumat-profil-pegawai/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-ptj',
        loadChildren: () =>
          import('./maklumat-ptj/routes').then(m => m.routes)
      },
      {
        path: 'pendaftaran-id-pengguna',
        loadChildren: () =>
          import('./pendaftaran-id-pengguna/routes').then(m => m.routes)
      },
      {
        path: 'sejarah-id',
        loadChildren: () =>
          import('./sejarah-id/routes').then(m => m.routes)
      }
    ]
  }
];
