import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengurusan-kenderaan-dashboard.component').then(m => m.PengurusanKenderaanDashboardComponent),
    data: {
      title: `Pengurusan Kenderaan Dashboard`
    }
  }
];