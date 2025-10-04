import {Routes} from "@angular/router";

export const KelulusanBatalAksesPenggunaanRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'kelulusan-permohonan-pembatalan',
        loadChildren: () =>
          import('./kelulusan-permohonan-pembatalan/routes').then(m => m.routes)
      }
    ]
  }
];
