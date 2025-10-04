import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./adm-dashboard.component').then(m => m.AdmDashboardComponent),
    data: {
      title: `Dashboard`
    }
  }
];