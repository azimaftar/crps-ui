import {Routes} from "@angular/router";

export const PembatalanAksesPenggunaanRoutes: Routes = [
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
