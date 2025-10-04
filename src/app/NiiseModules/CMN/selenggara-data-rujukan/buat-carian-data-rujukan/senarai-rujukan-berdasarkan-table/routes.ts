import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./senarai-rujukan-berdasarkan-table.component').then(m => m.SenaraiRujukanBerdasarkanTableComponent),
    data: {
      title: `Senarai Rujukan Berdasarkan Table`
    },
  },
];