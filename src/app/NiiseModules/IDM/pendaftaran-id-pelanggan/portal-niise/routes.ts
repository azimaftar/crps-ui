import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./portal-niise.component').then(m => m.PortalNiiseComponent),
    data: {
      title: `Portal Niise`
    }
  }
];

