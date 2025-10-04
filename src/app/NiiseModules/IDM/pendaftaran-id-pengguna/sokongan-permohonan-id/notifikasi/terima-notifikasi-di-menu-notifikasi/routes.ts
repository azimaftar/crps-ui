import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./terima-notifikasi-di-menu-notifikasi.component').then(m => m.TerimaNotifikasiDiMenuNotifikasiComponent),
    data: {
      title: `Notifikasi`
    }
  }
];

