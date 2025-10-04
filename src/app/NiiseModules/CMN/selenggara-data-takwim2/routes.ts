import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'data-takwim',
    loadComponent: () => import('./data-takwim.component').then(m => m.DataTakwimComponent),
    data: {
      title: `Selenggara Data Takwim`
    }
  }
];

