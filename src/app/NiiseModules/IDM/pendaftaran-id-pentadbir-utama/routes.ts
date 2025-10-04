import {Routes} from "@angular/router";

export const PendaftaranIdPenggunaRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'daftar-id-pengguna-kata-laluan',
        loadChildren: () =>
          import('./daftar-id-pengguna-kata-laluan/routes').then(m => m.DaftarIdPenggunaKataLaluanRoutes)
      },
      {
        path: 'pendaftaran-id-pentadbir-utama',
        loadChildren: () =>
          import('./pendaftaran-id-pentadbir-utama/routes').then(m => m.PendaftaranIdTadbirUtamaRoutes)
      },
      {
        path: 'pengaktifan-pentadbir-utama',
        loadChildren: () =>
          import('./pengaktifan-pentadbir-utama/routes').then(m => m.PengaktifanPentadbirUtamaRoutes)
      }
      
    ]
  }
];
