import {Routes} from "@angular/router";

export const TerimaNotifikasiPembatalanAksesPenggunaRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'maklumat-profil-pegawai',
        loadChildren: () =>
          import('./maklumat-profil-pegawai/routes').then(m => m.routes)
      }
    ]
  }
];
