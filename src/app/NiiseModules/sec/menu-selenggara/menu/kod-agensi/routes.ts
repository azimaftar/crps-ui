import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./kod-agensi.component').then(m => m.KodAgensiComponent),
    data: { title: 'Kod Agensi' }
  }
];
