import { Routes } from '@angular/router';

export const routes: Routes = [
  {
 
        path: 'maklumat-pemohon',
        loadChildren: () =>
          import('./permohonan-baru/maklumat-pemohon/routes').then((m) => m.routes),
      },
      {
        path: 'dokumen-sokongan',
        loadChildren: () =>
          import('./permohonan-baru/dokumen-sokongan/routes').then((m) => m.routes),
      },
      {
        path: 'permohonan-baru',
        loadChildren: () =>
          import('./permohonan-baru/routes').then((m) => m.routes),
      },
      {
        path: 'paparan',
        loadChildren: () =>
          import('./permohonan-baru/paparan/routes').then((m) => m.routes),
      },
      {
        path: 'pengesyoran-permohonan',
        loadChildren: () =>
          import('./pengesyoran-permohonan/routes').then((m) => m.routes),
      },
      {
        path: 'maklumat-permohonan',
        loadChildren: () =>
          import('./pengesyoran-permohonan/maklumat-permohonan/routes').then((m) => m.routes),
      },
      {
        path: 'pengesyoran-permohonan2',
        loadChildren: () =>
          import('./pengesyoran-permohonan/pengesyoran-permohonan2/routes').then((m) => m.routes),
      },
      {
        path: 'kelulusan-permohonan',
        loadChildren: () =>
          import('./kelulusan-permohonan/routes').then((m) => m.routes),
      },
      {
        path: 'maklumat-permohonan2',
        loadChildren: () =>
          import('./kelulusan-permohonan/maklumat-permohonan2/routes').then((m) => m.routes),
      },
      {
        path: 'kelulusan',
        loadChildren: () =>
          import('./kelulusan-permohonan/kelulusan/routes').then((m) => m.routes),
      },
      {
        path: 'keputusan-jkrim',
        loadChildren: () =>
          import('./keputusan-jkrim/routes').then((m) => m.routes),
      },
      {
        path: 'maklumat-permohonan3',
        loadChildren: () =>
          import('./keputusan-jkrim/maklumat-permohonan3/routes').then((m) => m.routes),
      },
      {
        path: 'jkrim',
        loadChildren: () =>
          import('./keputusan-jkrim/jkrim/routes').then((m) => m.routes),
      },

];
