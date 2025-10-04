import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('././kemaskini-nyahaktif-data-takwim.component').then(m => m.kemaskiniNyahaktifTakwimComponent),
    data: {
      title: `Kemaskini/Nyahaktif Data Takwim`
    }
  }
];

