import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./keputusan-permohonan-bss-jkrim.component').then(m => m.KeputusanPermohonanbssJkrimComponent),
    data: {
      title: `Kelulusan Permohonan bss`
    }
  },
  {
    path: 'papar-keputusan',
    loadChildren: () =>
      import('./papar-keputusan/routes').then((m) => m.routes),
  },
];

