import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-subjek.component').then(m => m.CarianComponentKP),
    data: {
      title: `Carian Subjek`
    }
  }
];

