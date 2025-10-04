import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengurusan-audit-trail.component').then(m => m.PengurusanAuditTrailComponent),
    data: {
      title: `Pengurusan Audit Trail`
    }
  }
];

