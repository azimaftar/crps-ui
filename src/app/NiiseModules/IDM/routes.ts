import {Routes} from "@angular/router";

export const idmRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pendaftaran-id-pengguna',
        loadChildren: () =>
          import('./pendaftaran-id-pengguna/routes').then(m => m.PendaftaranIdPenggunaRoutes)
      },
      {
        path: 'tambah-peranan-tugasan-id-pengguna',
        loadChildren: () =>
          import('./tambah-peranan-tugasan-id-pengguna/routes').then(m => m.TambahPerananTugasanIdPenggunaRoutes)
      },
      {
        path: 'pendaftaran-id-pentadbir-utama',
        loadChildren: () =>
          import('./pendaftaran-id-pentadbir-utama/routes').then(m => m.PendaftaranIdPenggunaRoutes)
      },
      {
        path: 'pendaftaran-id-pelanggan',
        loadChildren: () =>
          import('./pendaftaran-id-pelanggan/routes').then(m => m.PendaftaranIdPelangganRoutes)
      },
      {
        path: 'tambah-peranan-tugasan-pegawai-bantuan',
        loadChildren: () =>
          import('./tambah-peranan-tugasan-pegawai-bantuan/routes').then(m => m.TambahPerananTugasanPegawaiBantuanRoutes)
      },
      {
        path: 'kemas-kini-maklumat-pengguna-dan-jawatan',
        loadChildren: () =>
          import('./kemas-kini-maklumat-pengguna-dan-jawatan/routes').then(m => m.KemasKiniMaklumatPenggunaDanJawatanRoutes)
      },
      {
        path: 'pembatalan-akses-pengguna',
        loadChildren: () =>
          import('./pembatalan-akses-pengguna/routes').then(m => m.PembatalanAksesPenggunaRoutes)
      },
      {
        path: 'nyahaktif-akses-pengguna',
        loadChildren: () =>
          import('./nyahaktif-akses-pengguna/routes').then(m => m.NyahaktifAsesPenggunaRoutes)
      },
      {
        path: 'shared',
        loadChildren: () =>
          import('./shared/routes').then(m => m.SharedRoutes)
      },
      {
        path: 'agihan-peranan-tugasan',
        loadChildren: () =>
          import('./agihan-peranan-tugasan/routes').then(m => m.IdmAgihanPerananDanTugasanRoutes)
      },
    ]
  }
];
