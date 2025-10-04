import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mesej-notifikasi',
    loadComponent: () => import('./mesej-notifikasi.component').then(m => m.MesejNotifikasiComponent),
    data: {
      title: `Selenggara Mesej Notifikasi`
    }
  }
];

