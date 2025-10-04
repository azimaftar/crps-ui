import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./menu.component').then(m => m.MenuComponent),
    data: {
      title: `Menu`
    }
  }
];


