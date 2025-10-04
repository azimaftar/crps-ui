import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumattindakan.component').then(m => m.MaklumatTindakanComponent),
    data: {
      title: `Pinda SL`
    }
  }
];

