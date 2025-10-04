import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'pengurusan-kenderaan-dashboard',
        loadChildren: () =>
          import('./pengurusan-kenderaan-dashboard/routes').then((m) => m.routes),
      },
    ],
  },

  {
    path: '',
    children: [
      {
        path: 'carian-maklumat-kenderaan',
        loadChildren: () =>
          import('./carian-maklumat-kenderaan/routes').then((m) => m.routes),
      },
    ],
  },

  {
    path: '',
    children: [
      {
        path: 'maklumat-borang-kew.pa-3',
        loadChildren: () =>
          import('./maklumat-borang-kew.pa-3/routes').then((m) => m.routes),
      },
    ],
  },

  {
    path: '',
    children: [
      {
        path: 'maklumat-kenderaan',
        loadChildren: () =>
          import('./maklumat-kenderaan/routes').then((m) => m.routes),
      },
    ],
  },

  {
    path: '',
    children: [
      {
        path: 'maklumat-sewaan',
        loadChildren: () =>
          import('./maklumat-sewaan/routes').then((m) => m.routes),
      },
    ],
  },

  {
    path: '',
    children: [
      {
        path: 'maklumat-ketua-jabatan',
        loadChildren: () =>
          import('./maklumat-ketua-jabatan/routes').then((m) => m.routes),
      },
    ],
  },

  //Kemaskini Maklumat Pendaftaran Kenderaan

  {
    path: '',
    children: [
      {
        path: 'kemaskini-maklumat-pendaftaran-kenderaan',
        loadChildren: () =>
          import('./kemaskini-maklumat-pendaftaran-kenderaan/routes').then((m) => m.routes),
      },
    ],
  },

  //Sahkan Maklumat Pendaftaran Kenderaan

  {
    path: '',
    children: [
      {
        path: 'sahkan-maklumat-pendaftaran-kenderaan/carian-maklumat-kenderaan',
        loadChildren: () =>
          import('./sahkan-maklumat-pendaftaran-kenderaan/carian-maklumat-kenderaan/routes').then((m) => m.routes),
      },
    ],
  },

  {
    path: '',
    children: [
      {
        path: 'sahkan-maklumat-pendaftaran-kenderaan/maklumat-borang-kew.pa-3',
        loadChildren: () =>
          import('./sahkan-maklumat-pendaftaran-kenderaan/maklumat-borang-kew.pa-3/routes').then((m) => m.routes),
      },
    ],
  },

  {
    path: '',
    children: [
      {
        path: 'sahkan-maklumat-pendaftaran-kenderaan/maklumat-kenderaan',
        loadChildren: () =>
          import('./sahkan-maklumat-pendaftaran-kenderaan/maklumat-kenderaan/routes').then((m) => m.routes),
      },
    ],
  },

  {
    path: '',
    children: [
      {
        path: 'sahkan-maklumat-pendaftaran-kenderaan/maklumat-sewaan',
        loadChildren: () =>
          import('./sahkan-maklumat-pendaftaran-kenderaan/maklumat-sewaan/routes').then((m) => m.routes),
      },
    ],
  },

  {
    path: '',
    children: [
      {
        path: 'sahkan-maklumat-pendaftaran-kenderaan/maklumat-ketua-jabatan',
        loadChildren: () =>
          import('./sahkan-maklumat-pendaftaran-kenderaan/maklumat-ketua-jabatan/routes').then((m) => m.routes),
      },
    ],
  },

  {
    path: '',
    children: [
      {
        path: 'sahkan-maklumat-pendaftaran-kenderaan/maklumat-touch-n-go',
        loadChildren: () =>
          import('./sahkan-maklumat-pendaftaran-kenderaan/maklumat-touch-n-go/routes').then((m) => m.routes),
      },
    ],
  },

];