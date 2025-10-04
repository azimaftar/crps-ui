import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./maklumat-agensi.component').then(m => m.MaklumatAgensiComponent),
    data: { title: 'Maklumat Agensi' }
  }
];
