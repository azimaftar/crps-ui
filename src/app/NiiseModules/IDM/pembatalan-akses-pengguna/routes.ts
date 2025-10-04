import {Routes} from "@angular/router";

export const PembatalanAksesPenggunaRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'terima-notifikasi-pembatalan-akses-pengguna',
        loadChildren: () =>
          import('./terima-notifikasi-pembatalan-akses-pengguna/routes').then(m => m.TerimaNotifikasiPembatalanAksesPenggunaRoutes)
      },
      {
        path: 'terima-permohonan',
        loadChildren: () =>
          import('./terima-permohonan/routes').then(m => m.TerimaPermohonanRoutes)
      },
      {
        path: 'senarai-id-pengguna',
        loadChildren: () =>
          import('./senarai-id-pengguna/routes').then(m => m.SenaraiIDPenggunaRoutes)
      },
      {
        path: 'carian-id-pengguna',
        loadChildren: () =>
          import('./carian-id-pengguna/routes').then(m => m.CarianIDPenggunaRoutes)
      },
      {
        path: 'pembatalan-akses-pengguna',
        loadChildren: () =>
          import('./pembatalan-akses-pengguna/routes').then(m => m.PembatalanAksesPenggunaanRoutes)
      },
      {
        path: 'kelulusan-batal-akses-pengguna',
        loadChildren: () =>
          import('./kelulusan-batal-akses-pengguna/routes').then(m => m.KelulusanBatalAksesPenggunaanRoutes)
      }
    ]
  }
];
