import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-cuti-semasa.component').then(m => m.MaklumatCutiSemasaComponent),
    data: {
      title: `Maklumat Cuti Semasa`
    }
  }
];