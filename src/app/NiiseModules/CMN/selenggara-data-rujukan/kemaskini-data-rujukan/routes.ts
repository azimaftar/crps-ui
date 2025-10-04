import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kemaskini-data-rujukan.component').then(m => m.KemaskiniDataRujukanComponent),
    data: {
      title: `Kemaskini Data Rujukan`
    },
  },
];