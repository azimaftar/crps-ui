import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./senarai-permohonan.component').then(m => m.SenaraiPermohonanComponent),
    data: {
      title: `Senarai Permohonan ID Di Submenu ID Pengguna`
    }
  }
];

