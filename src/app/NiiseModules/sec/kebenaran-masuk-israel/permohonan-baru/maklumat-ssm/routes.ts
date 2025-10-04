import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./maklumat-ssm.component').then(m => m.MaklumatSsmComponent),
    data: { title: 'Maklumat SSM' }
  }
];
