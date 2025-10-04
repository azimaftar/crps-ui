import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./semakan-data-rujukan.component').then((m) => m.SemakanDataRujukanComponent),
    data: {
      title: `Semakan Data Rujukan`,
    },
  },
];