import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./kod-tco.component').then(m => m.KodTcoComponent),
    data: { title: 'Kod TCO' }
  }
];
