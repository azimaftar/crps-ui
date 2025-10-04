import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-bss.component').then(m => m.CarianbssComponent),
    data: {
      title: `Carian bss`
    }
  },
  {
    path: 'papar-bss',
    loadChildren: () =>
      import('./papar-bss/routes').then((m) => m.routes),
  },
];

