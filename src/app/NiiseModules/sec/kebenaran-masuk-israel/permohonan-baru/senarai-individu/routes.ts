import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./senarai-individu.component').then(m => m.SenaraiIndividuComponent),
    data: { title: 'Senarai Individu' }
  }
];
