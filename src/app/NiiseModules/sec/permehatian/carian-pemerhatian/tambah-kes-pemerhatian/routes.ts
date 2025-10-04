import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tambah-kes-pemerhatian-imigresen',
        loadChildren: () =>
            import('../tambah-kes-pemerhatian/tambah-kes-pemerhatian-imigresen/routes').then((m) => m.routes),
      },
      {
        path: 'tambah-kes-pemerhatian-kastam',
        loadChildren: () =>
            import('../tambah-kes-pemerhatian/tambah-kes-pemerhatian-kastam/routes').then((m) => m.routes),
      },
      {
        path: 'tambah-kes-pemerhatian-lhdn',
        loadChildren: () =>
            import('../tambah-kes-pemerhatian/tambah-kes-pemerhatian-lhdn/routes').then((m) => m.routes),
      },
    ]
  }
  
];

