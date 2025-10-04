import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./senarai-semakan-data-rujukan.component').then((m) => m.SenaraiSemakanDataRujukanComponent),
    data: {
      title: `Senarai Semakan Data Rujukan`,
    },
  },
];
