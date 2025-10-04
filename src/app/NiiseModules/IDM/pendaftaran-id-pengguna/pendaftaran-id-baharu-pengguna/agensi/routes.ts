import { Routes } from "@angular/router";

export const agensiRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dokumen-sokongan-agensi',
        loadChildren: () =>
          import('./dokumen-sokongan-agensi/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-penetapan-peranan-agensi',
        loadChildren: () =>
          import('./maklumat-penetapan-peranan-agensi/routes').then(m => m.routes)
      },
      {
        path: 'maklumat-profil-pegawai-agensi',
        loadChildren: () =>
          import('./maklumat-profil-pegawai-agensi/routes').then(m => m.routes)
      },
      {
        path: 'pendaftaran-id-pengguna-agensi',
        loadChildren: () =>
          import('./pendaftaran-id-pengguna-agensi/routes').then(m => m.routes)
      },
      {
        path: 'sejarah-id-agensi',
        loadChildren: () =>
          import('./sejarah-id-agensi/routes').then(m => m.routes)
      }
    ]
  }
];
