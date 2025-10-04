import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./semakan-data-konfigurasi.component').then((m) => m.SemakanDataKonfigurasiComponent),
    data: {
      title: `Semakan Data Konfigurasi`,
    },
  },
];