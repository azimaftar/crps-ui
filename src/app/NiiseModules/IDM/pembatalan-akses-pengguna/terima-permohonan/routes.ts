import {Routes} from "@angular/router";

export const TerimaPermohonanRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pengesahan-permohonan-pembatalan',
        loadChildren: () =>
          import('./pengesahan-permohonan-pembatalan/routes').then(m => m.routes)
      }
    ]
  }
];
