import {Routes} from "@angular/router";

export const TambahPerananTugasanPegawaiBantuanRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pilih-senarai-nama-pegawai-bantuan',
        loadChildren: () =>
          import('./pilih-senarai-nama-pegawai-bantuan/routes').then(m => m.PilihSenaraiNamaPegawaiBantuanRoutes)
      },
      {
        path: 'kelulusan-permohonan-pegawai-bantuan',
        loadChildren: () =>
          import('./kelulusan-permohonan-pegawai-bantuan/routes').then(m => m.kelulusanPermohonanPegawaiBantuanRoutes)
      },
      {
        path: 'pengesahan-permohonan-pegawai-bantuan',
        loadChildren: () =>
          import('./pengesahan-permohonan-pegawai-bantuan/routes').then(m => m.PengesahanPermohonanPegawaiBantuanRoutes)
      },
      {
        path: 'tambah-cawangan-tugasan-baru',
        loadChildren: () =>
          import('./tambah-cawangan-tugasan-baru/routes').then(m => m.TambahCawanganTugasanBaruRoutes)
      },
      {
        path: 'lulus-tambah-cawangan-tugasan-baru',
        loadChildren: () =>
          import('./lulus-tambah-cawangan-tugasan-baru/routes').then(m => m.LulusTambahCawanganTugasanBaruRoutes)
      },
    ]
  }
];
