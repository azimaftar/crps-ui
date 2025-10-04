import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./senarai-id-pengguna.component').then(m => m.SenaraiIDPenggunaComponent),
    data: {
      title: `Senarai ID Pengguna`
    }
  }
];

