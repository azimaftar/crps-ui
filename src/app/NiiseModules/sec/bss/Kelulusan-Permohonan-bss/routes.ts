import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Kelulusan-Permohonan-bss.component').then(m => m.KelulusanPermohonanbssComponent),
    data: {
      title: `Kelulusan Permohonan bss`
    }
  },
  {
    path: 'papar-Kelulusan',
    loadChildren: () =>
      import('./papar-kelulusan/routes').then((m) => m.routes),
  },
];

