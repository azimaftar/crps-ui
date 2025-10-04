import {Routes} from "@angular/router";

export const PendaftaranIdPelangganRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./portal-niise/routes').then(m => m.routes)
      },
      {
        path: '',
        loadChildren: () =>
          import('./login/routes').then(m => m.routes)
      },
      {
        path: '',
        loadChildren: () =>
          import('./pendaftaran-id-warganegara/routes').then(m => m.routes)
      },
      {
        path: '',
        loadChildren: () =>
          import('./maklumat-pemohon-warganegara/routes').then(m => m.routes)
      },
    ]
  }
];
