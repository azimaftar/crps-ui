import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-vaksin.component').then(m => m.MaklumatVaksinComponent),
    data: {
      title: `Pengurusan Vaksin`
    }
  }
];