import { Routes } from '@angular/router';

export const routes: Routes = [

{
    path: '',
    loadComponent: () => import('./vacc-report.component').then(m => m.VaccReportComponent),
    data: {
      title: 'Jana Vaksin'
    },

  }
]