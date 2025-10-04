import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./carian-table-rujukan.component').then(m => m.CarianTableRujukanComponent),
    data: {
      title: `Carian Table Rujukan`
    },
  },
];