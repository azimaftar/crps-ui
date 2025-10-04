import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pinda.component').then(m => m.PindaSlComponent),
    data: {
      title: `Pinda SL`
    }
  }
];

