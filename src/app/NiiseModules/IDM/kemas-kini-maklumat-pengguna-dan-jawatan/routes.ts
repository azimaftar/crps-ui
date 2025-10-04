import {Routes} from "@angular/router";

export const KemasKiniMaklumatPenggunaDanJawatanRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'terima-notifikasi-pertukaran-cawangan',
        loadChildren: () =>
          import('./terima-notifikasi-pertukaran-cawangan/routes').then(m => m.TerimaNotifikasiPertukaranCawanganRoutes)
      },
      {
        path: 'pengesahan-permohonan',
        loadChildren: () =>
          import('./pengesahan-permohonan/routes').then(m => m.PengesahanPermohonanRoutes)
      },
      {
        path: 'penetapan-peranan-dan-tugasan-baharu',
        loadChildren: () =>
          import('./penetapan-peranan-dan-tugasan-baharu/routes').then(m => m.PenetapanPerananDanTugasanBaharuRoutes)
      },
      {
        path: 'beri-kelulusan',
        loadChildren: () =>
          import('./beri-kelulusan/routes').then(m => m.BeriKelulusanRoutes)
      },
    ]
  }
];
