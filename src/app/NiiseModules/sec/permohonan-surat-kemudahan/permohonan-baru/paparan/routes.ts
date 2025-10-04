import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./paparan.component').then(m => m.PaparanComponent),
    data: {
      title: `Paparan`
    }
  }
];

