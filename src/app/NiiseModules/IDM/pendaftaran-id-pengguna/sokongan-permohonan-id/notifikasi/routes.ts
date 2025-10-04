import { Routes } from "@angular/router";

export const notifikasiRoutes: Routes = [
  {
    path: '',
    children: [
        {
            path: 'terima-notifikasi-di-menu-notifikasi',
            loadChildren: () =>
              import('./terima-notifikasi-di-menu-notifikasi/routes').then(m => m.routes)
          }
    ]
  }
];
