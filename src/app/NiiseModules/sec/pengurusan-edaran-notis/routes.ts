import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'kemas-kini-edaran-notis',
    loadChildren: () =>
      import('./kemas-kini-edaran-notis/routes').then((m) => m.routes),
  },
  {
    path: 'permohonan-edaran-notis',
    loadChildren: () =>
      import('./permohonan-edaran-notis/routes').then((m) => m.routes),
  }
];
