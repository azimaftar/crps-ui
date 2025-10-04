import {Routes} from "@angular/router";

export const TambahPerananTugasanIdPenggunaRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pengesahan-tambah-peranan-tugasan',
        loadChildren: () =>
          import('./pengesahan-tambah-peranan-tugasan/routes').then(m => m.PengesahanTambahPerananTugasanRoutes)
      },
      {
        path: 'permohonan-tambah-peranan-tugasan',
        loadChildren: () =>
          import('./permohonan-tambah-peranan-tugasan/routes').then(m => m.PermohonanTambahPerananTugasanRoutes)
      },
      {
        path: 'kelulusan-tambah-peranan-tugasan',
        loadChildren: () =>
          import('./kelulusan-tambah-peranan-tugasan/routes').then(m => m.KelulusanTambahPerananTugasanRoutes)
      },
      {
        path: 'permohonan-tidak-lengkap',
        loadChildren: () =>
          import('./permohonan-tidak-lengkap/routes').then(m => m.PermohonanTidakLangkapRoutes)
      },
      {
        path: 'penetapan-peranan-tugasan',
        loadChildren: () =>
          import('./penetapan-peranan-tugasan/routes').then(m => m.PenetapanPerananTugasanRoutes)
      }
    ]
  }
];
