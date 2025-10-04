import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kemaskini-subjek.component').then(m => m.KemasKiniSlComponent),
    data: {
      title: `KemasKini SL`
    }
  }
];

