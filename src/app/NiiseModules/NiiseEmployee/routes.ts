import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./niise-employee.component').then(m => m.NiiseEmployeeComponent),
    data: {
      title: `Immigration Employee`
    }
  }
];

