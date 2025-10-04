import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./maklumat-individu.component').then(m => m.MaklumatIndividuComponent),
    data: { title: 'Maklumat Individu' }
  }
];
