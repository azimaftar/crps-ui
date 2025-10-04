import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'buat-carian-data-konfigurasi',
        loadChildren: () =>
          import('./buat-carian-data-konfigurasi/routes').then((m) => m.routes),
      },
      {
        path: 'tambah-data-konfigurasi',
        loadChildren: () =>
          import('./tambah-data-konfigurasi/routes').then((m) => m.routes),
      },
      {
        path: 'senarai-semakan-data-konfigurasi',
        loadChildren: () =>
          import('./semak-data-konfigurasi/senarai-semakan-data-konfigurasi/routes').then((m) => m.routes),
      },
      {
        path: 'semakan-data-konfigurasi',
        loadChildren: () =>
          import('./semak-data-konfigurasi/semakan-data-konfigurasi/routes').then((m) => m.routes),
      },
      {
        path: 'kemas-kini-data-konfigurasi',
        loadChildren: () =>
          import('./kemas-kini-data-konfigurasi/routes').then((m) => m.routes),
      }
    ]
  }
];




