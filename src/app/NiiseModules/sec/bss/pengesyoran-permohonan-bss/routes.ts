import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengesyoran-permohonan-bss.component').then(m => m.PengesyoranPermohonanbssComponent),
    data: {
      title: `Pengesyoran Permohonan bss`
    }
  },
  {
    path: 'papar-syor',
    loadChildren: () =>
      import('./papar-syor/routes').then((m) => m.routes),
  },
];

