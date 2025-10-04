import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'buat-carian-data-takwim',
        loadChildren: () =>
          import('./buat-carian-data-takwim/selenggara-takwim/routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'kemaskini-nyahaktif-data-takwim',
        loadChildren: () =>
          import('./kemaskini-nyahaktif-data-takwim/routes').then(
            (m) => m.routes
          ),
      },
      {
        path: 'tambah-data-takwim',
        loadChildren: () =>
          import('./tambah-data-takwim/routes').then(
            (m) => m.routes
          ),
      },
    ],
  },
];
