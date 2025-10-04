import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./jana-nombor-perkhidmatan.component').then(m => m.JanaNomborPerkhidmatanComponent),
    data: {
      title: `Jana Nombor Perkhidmatan`
    }
  }
];