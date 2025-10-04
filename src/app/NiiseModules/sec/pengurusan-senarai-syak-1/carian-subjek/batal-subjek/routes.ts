import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./batal.component').then(m => m.BatalSlComponent),
    data: {
      title: `Batal SL`
    }
  }
];

