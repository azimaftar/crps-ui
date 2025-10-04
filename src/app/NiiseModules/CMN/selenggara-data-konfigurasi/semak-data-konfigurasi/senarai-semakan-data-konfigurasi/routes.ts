import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./senarai-semakan-data-konfigurasi.component').then((m) => m.SenaraiSemakanDataKonfigurasiComponent),
    data: {
      title: `Senarai Semakan Data Konfigurasi`,
    },
  },
];
