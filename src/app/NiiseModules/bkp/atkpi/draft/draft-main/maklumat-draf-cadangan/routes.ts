import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./maklumat-draf-cadangan.component').then(
        m => m.MaklumatDrafCadanganComponent),
        title: 'Maklumat Draf Cadangan'
  },
];