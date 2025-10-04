import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./e-reporting.component').then(m => m.EReportingComponent),
    data: {
      title: 'e-Reporting'
    }
  },
  {
    path: 'jana-laporan-carian',
    loadChildren: () => import('./jana-laporan-carian/routes').then(m => m.routes),
  },
  {
    path: 'vacc-report',   // ✅ new route
    loadComponent: () => import('./vacc-report/vacc-report.component').then(m => m.VaccReportComponent),
    data: {
      title: 'Vaccination Report'
    }
  }
];
