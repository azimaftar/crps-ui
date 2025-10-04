import {Routes} from "@angular/router";

export const NyahaktifAsesPenggunaRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'terima-notifikasi-permohonan',
        loadChildren: () =>
          import('./terima-notifikasi-permohonan/maklumat-profil-pegawai/maklumat-profil-pegawai/routes').then(m => m.MaklumatProfilePegawaiRoutes)
      },
      {
        path: 'terima-permohonan',
        loadChildren: () =>
          import('./terima-permohonan/routes').then(m => m.TerimaPermohonanRoutes)
      },
      {
        path: 'senarai-pengguna',
        loadChildren: () =>
          import('./senarai-pengguna/routes').then(m => m.SenaraiPenggunaComponentRoutes),
      },
      {
        path: 'nyahaktif',
        loadChildren: () =>
          import('./nyahaktif/routes').then(m => m.NyahakftifComponentRoutes),
      },
      {
        path: 'kelulusan-nyahaktif',
        loadChildren: () =>
          import('./kelulusan-nyahaktif/routes').then(m => m.KelulusanComponentRoutes),
      },
    ]
  }
];
