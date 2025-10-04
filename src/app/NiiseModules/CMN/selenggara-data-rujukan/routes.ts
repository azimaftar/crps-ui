import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'carian-table-rujukan',
        loadChildren: () =>
          import('./buat-carian-data-rujukan/carian-table-rujukan/routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'senarai-rujukan-berdasarkan-table',
        loadChildren: () =>
          import('./buat-carian-data-rujukan/senarai-rujukan-berdasarkan-table/routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'pilih-jenis-selenggara',
        loadChildren: () =>
          import('./pilih-jenis-selenggara/routes').then((m) => m.routes),
      },
      {
        path: 'tambah-data-rujukan',
        loadChildren: () =>
          import('./tambah-data-rujukan/routes').then((m) => m.routes),
      },
      {
        path: 'kemaskini-data-rujukan',
        loadChildren: () =>
          import('./kemaskini-data-rujukan/routes').then((m) => m.routes),
      },
      {
        path: 'senarai-semakan-data-rujukan',
        loadChildren: () =>
          import(
            './semak-data-rujukan/senarai-semakan-data-rujukan/routes'
          ).then((m) => m.routes),
      },
      {
        path: 'semakan-data-rujukan',
        loadChildren: () =>
          import('./semak-data-rujukan/semakan-data-rujukan/routes').then(
            (m) => m.routes
          ),
      },
    ],
  },
];
