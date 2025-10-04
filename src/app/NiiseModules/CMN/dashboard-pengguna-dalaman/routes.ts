import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard-pengguna-dalaman',
    loadComponent: () => import('./dashboard-pengguna-dalaman.component').then(m => m.DashboardPenggunaDalamanComponent),
    data: {
      title: `Dashboard Pengguna Dalaman`
    }
  }
];

