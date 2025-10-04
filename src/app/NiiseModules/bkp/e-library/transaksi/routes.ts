import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./transaksi.component').then(m => m.TransaksiComponent),
    data: {
      title: `Transaksi`
    }
  }
];

