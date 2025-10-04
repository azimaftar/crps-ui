import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard-pengguna-awam',
    loadComponent: () => import('./dashboard-pengguna-awam.component').then(m => m.DashboardPenggunaAwamComponent),
    data: {
      title: `Dashboard Pengguna Awam`
    }
  }
];

