import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tapisan-keselamatan.component').then(m => m.TapisanKeselamatanComponent),
    data: {
      title: `Tapisan Keselamatan`
    }
  }
];
