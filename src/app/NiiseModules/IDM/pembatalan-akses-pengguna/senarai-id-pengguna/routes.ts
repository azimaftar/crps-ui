import {Routes} from "@angular/router";

export const SenaraiIDPenggunaRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'senarai-id-pengguna',
        loadChildren: () =>
          import('./senarai-id-pengguna/routes').then(m => m.routes)
      }
    ]
  }
];
