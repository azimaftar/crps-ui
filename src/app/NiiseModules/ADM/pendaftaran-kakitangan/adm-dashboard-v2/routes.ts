import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./adm-dashboard-v2.component').then(m => m.AdmDashboardV2Component),
    data: {
      title: `Dashboard`
    }
  }
];