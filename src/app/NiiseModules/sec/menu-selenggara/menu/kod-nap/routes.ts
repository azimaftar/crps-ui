import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./kod-nap.component').then(m => m.KodNapComponent),
    data: { title: 'Kod NAP' }
  }
];
