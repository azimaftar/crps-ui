import { Routes } from '@angular/router';

export const routes: Routes = [
  //All use case in this business process use this as first page.
  {
    path: 'maklumat-permohonan',
    loadChildren: () =>
      import('./maklumat-pemohonan/routes').then((m) => m.routes),
  },
  {
    path: 'dokumen-sokongan',
    loadChildren: () =>
      import('./dokumen-sokongan/routes').then((m) => m.routes),
  },
  {
    path: 'maklumat-laporan',
    loadChildren: () =>
      import('./maklumat-laporan/routes').then((m) => m.routes),
  },
];
