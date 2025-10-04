import { Routes } from '@angular/router';

export const admRoutes: Routes = [
  //UC 01.0- (Yng ni yang ikut menu tree official)
  {
    path: 'pengurusan-kakitangan',
    loadChildren: () =>
      import('./pengurusan-kakitangan/routes').then((m) => m.routes),
  },
  //UC 01.1- (Yng ni yang ikut menu tree official)
  {
    path: 'pengurusan-kad-kuasa',
    loadChildren: () =>
      import('./pengurusan-kad-kuasa/routes').then((m) => m.routes),
  },
  //UC 01.0-
  {
    path: '',
    children: [
      {
        path: 'pendaftaran-kakitangan',
        loadChildren: () =>
          import('./pendaftaran-kakitangan/routes').then((m) => m.routes),
      },
    ],
  },
  //UC 01.1-
  {
    path: '',
    children: [
      {
        path: 'permohonan-kad-kuasa',
        loadChildren: () =>
          import('./permohonan-kad-kuasa/routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'kehilangan-kad-kuasa',
        loadChildren: () =>
          import('./kehilangan-kad-kuasa/routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'gantian-kad-kuasa',
        loadChildren: () =>
          import('./gantian-kad-kuasa/routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'penggantungan-batal-penggantungan-kad-kuasa',
        loadChildren: () =>
          import('./penggantungan-batal-penggantungan-kad-kuasa/routes').then(
            (m) => m.routes
          ),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'pelupusan-kad-kuasa',
        loadChildren: () =>
          import('./pelupusan-kad-kuasa/routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'pemulangan-perampasan-kad-kuasa',
        loadChildren: () =>
          import('./pemulangan-perampasan-kad-kuasa/routes').then(
            (m) => m.routes
          ),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'pendaftaran-pejabat',
        loadChildren: () =>
          import('./pendaftaran-pejabat/routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'pengurusan-e-occurence',
        loadChildren: () =>
          import('./pengurusan-e-occurence/routes').then((m) => m.routes),
      },
    ],
  },
  {
    path: '',
    children: [
      {
        path: 'pengurusan-pendaftaran-kenderaan',
        loadChildren: () =>
          import('./pengurusan-pendaftaran-kenderaan/routes').then(
            (m) => m.routes
          ),
      },
    ],
  },
];
