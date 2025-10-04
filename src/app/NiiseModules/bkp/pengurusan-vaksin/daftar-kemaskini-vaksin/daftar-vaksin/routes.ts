import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./daftar-vaksin.component').then(m => m.DaftarVaksinComponent),
    data: {
      title: `Daftar Maklumat Vaksin`
    }
  }
];

