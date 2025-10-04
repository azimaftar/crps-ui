import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./buat-carian-data-konfigurasi.component').then((m) => m.BuatCarianDataKonfigurasiComponent),
    data: {
      title: `Buat Carian Data Konfigurasi`,
    },
  },
];
