import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pengesahan-pergerakan',
        loadChildren: () =>
            import('./pengesahan-pergerakan/routes').then((m) => m.routes),
      },
      {
        path: 'pengesahan-pergerakan/permohonan-baru',
        loadChildren: () =>
            import('./pengesahan-pergerakan/permohonan-baru/routes').then((m) => m.routes),
      },
      {
        path: 'pengesahan-pergerakan/permohonan-baru/dokumen-sokongan',
        loadChildren: () =>
            import('./pengesahan-pergerakan/permohonan-baru/dokumen-sokongan/routes').then((m) => m.routes),
      },
       {
        path: 'pengesahan-pergerakan/semakan-permohonan',
        loadChildren: () =>
            import('./pengesahan-pergerakan/semakan-permohonan/routes').then((m) => m.routes),
      },
      {
        path: 'pengesahan-pergerakan/semakan-permohonan/maklumat-permohonan',
        loadChildren: () =>
            import('./pengesahan-pergerakan/semakan-permohonan/maklumat-permohonan/routes').then((m) => m.routes),
      },
      {
        path: 'pengesahan-pergerakan/semakan-permohonan/keputusan-permohonan',
        loadChildren: () =>
            import('./pengesahan-pergerakan/semakan-permohonan/keputusan-permohonan/routes').then((m) => m.routes),
      },
      {
        path: 'pengesahan-pergerakan/kelulusan-permohonan',
        loadChildren: () =>
            import('./pengesahan-pergerakan/kelulusan-permohonan/routes').then((m) => m.routes),
      },
       {
        path: 'pengesahan-pergerakan/kelulusan-permohonan/maklumat-permohonan',
        loadChildren: () =>
            import('./pengesahan-pergerakan/kelulusan-permohonan/maklumat-permohonan/routes').then((m) => m.routes),
      },
      {
        path: 'pengesahan-pergerakan/kelulusan-permohonan/kelulusan-permohonan',
        loadChildren: () =>
            import('./pengesahan-pergerakan/kelulusan-permohonan/kelulusan-permohonan/routes').then((m) => m.routes),
      },
      {
        path: 'pengesahan-pergerakan/keputusan-permohonan',
        loadChildren: () =>
            import('./pengesahan-pergerakan/keputusan-permohonan/routes').then((m) => m.routes),
      },
       {
        path: 'pengesahan-pergerakan/keputusan-permohonan/maklumat-permohonan',
        loadChildren: () =>
            import('./pengesahan-pergerakan/keputusan-permohonan/maklumat-permohonan/routes').then((m) => m.routes),
      },
      {
        path: 'pengesahan-pergerakan/keputusan-permohonan/keputusan-permohonan',
        loadChildren: () =>
            import('./pengesahan-pergerakan/keputusan-permohonan/keputusan-permohonan/routes').then((m) => m.routes),
      },
    ]
  }, 
];
