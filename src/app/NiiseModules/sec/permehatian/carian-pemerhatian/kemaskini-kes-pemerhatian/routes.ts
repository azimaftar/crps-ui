import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'kemaskini-kes-pemerhatian-imigresen',
        loadChildren: () =>
            import('../kemaskini-kes-pemerhatian/kemaskini-kes-pemerhatian-imigresen/routes').then((m) => m.routes),
      },
      {
        path: 'kemaskini-kes-pemerhatian-kastam',
        loadChildren: () =>
            import('../kemaskini-kes-pemerhatian/kemaskini-kes-pemerhatian-kastam/routes').then((m) => m.routes),
      },
      {
        path: 'kemaskini-kes-pemerhatian-lhdn',
        loadChildren: () =>
            import('../kemaskini-kes-pemerhatian/kemaskini-kes-pemerhatian-lhdn/routes').then((m) => m.routes),
      },
    ]
  }
  
];

