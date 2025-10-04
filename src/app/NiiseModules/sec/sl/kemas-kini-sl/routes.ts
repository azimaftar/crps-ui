import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kemas-kini-sl.component').then(m => m.KemasKiniSlComponent),
    data: {
      title: `KemasKini SL`
    }
  }
];

