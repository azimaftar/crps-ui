import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-sewaan.component').then(m => m.MaklumatSewaanComponent),
    data: {
      title: `Maklumat Sewaan`
    }
  }
];