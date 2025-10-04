import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard-pengguna-agensi',
    loadComponent: () => import('./dashboard-pengguna-agensi.component').then(m => m.DashboardPenggunaAgensiComponent),
    data: {
      title: `Dashboard Pengguna Agensi`
    }
  }
];

