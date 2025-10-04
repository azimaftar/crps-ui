import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-pemerhatian.component').then(m => m.CarianPemerhatianComponent),
    data: {
      title: `Carian Pemerhatian`
    }
  },
  {
    path: 'tambah-kes-pemerhatian',
    loadChildren: () =>
      import('./tambah-kes-pemerhatian/routes').then((m) => m.routes),
  },

   {
    path: 'papar-kes-pemerhatian',
    loadChildren: () =>
      import('./papar-kes-pemerhatian/routes').then((m) => m.routes),
  },

   {
    path: 'pinda-kes-pemerhatian',
    loadChildren: () =>
      import('./pinda-kes-pemerhatian/routes').then((m) => m.routes),
  },

     {
    path: 'kemaskini-kes-pemerhatian',
    loadChildren: () =>
      import('./kemaskini-kes-pemerhatian/routes').then((m) => m.routes),
  },

       {
    path: 'batal-kes-pemerhatian',
    loadChildren: () =>
      import('./batal-kes-pemerhatian/routes').then((m) => m.routes),
  },
];

