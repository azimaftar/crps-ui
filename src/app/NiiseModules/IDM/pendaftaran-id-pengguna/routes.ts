import {Routes} from "@angular/router";

export const PendaftaranIdPenggunaRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'baharu',
        loadChildren: () =>
          import('./notifikasi-permohonan-id-pengguna/baharu/routes').then(m => m.IdmBaharuRoutes)
      },
      {
        path: 'kakitangan-sedia-ada',
        loadChildren: () =>
          import('./notifikasi-permohonan-id-pengguna/kakitangan-sedia-ada/routes').then(m => m.IdmKakitanganRoutes)
      },
      {
        path: 'agensi',
        loadChildren: () =>
          import('./notifikasi-permohonan-id-pengguna/agensi/routes').then(m => m.IdmAgensiRoutes)
      },
      {
        path: 'pendaftaran-id-baharu-pengguna',
        loadChildren: () =>
          import('./pendaftaran-id-baharu-pengguna/routes').then(m => m.IdmPendaftaranIdBaharuRoutes)
      },
      {
        path: 'pemulangan-permohonan-id',
        loadChildren: () =>
          import('./pemulangan-permohonan-id/routes').then(m => m.IdmPemulanganPermohonanIDRoutes)
      },
      {
        path: 'kelulusan-permohonan-id',
        loadChildren: () =>
          import('./kelulusan-permohonan-id/routes').then(m => m.IdmKelulusanPerhomohonanIDRoutes)
      },
      {
        path: 'permohonan-semula-id',
        loadChildren: () =>
          import('./permohonan-semula-id/routes').then(m => m.IdmPerhomohonanSemulaIDRoutes)
      },
      {
        path: 'sokongan-permohonan-id',
        loadChildren: () =>
          import('./sokongan-permohonan-id/routes').then(m => m.IdmSokonganPermohonanIDRoutes)
      }
    ]
  }
];
