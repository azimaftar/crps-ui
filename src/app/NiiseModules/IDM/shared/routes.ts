import { Routes } from "@angular/router";

export const SharedRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'laman-utama',
        loadChildren: () =>
          import('./laman-utama/routes').then(m => m.routes)
      },
      {
        path: 'terima-notifikasi-di-menu-notifikasi',
        loadChildren: () =>
          import('./terima-notifikasi-di-menu-notifikasi/routes').then(m => m.routes)
      },
      {
        path: 'senarai-permohonan-id',
        loadChildren: () =>
          import('./senarai-permohonan-id/routes').then(m => m.routes)
      },
      {
        path: 'pertanyaan-carian',
        loadChildren: () =>
          import('./pertanyaan-carian/routes').then(m => m.routes)
      }
    ]
  }
];
