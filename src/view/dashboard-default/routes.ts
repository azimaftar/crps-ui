import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./dashboard-default.component').then(m => m.DashboardDefaultComponent),
    data: {
      title: $localize`Dashboard`
    }
  }
];

