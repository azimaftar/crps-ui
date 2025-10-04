import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./sejarah-id-agensi.component').then((m) => m.SejarahIdAgensiComponent),
    data: {
      title: `Sejarah ID Agensi`,
    },
  },
];
