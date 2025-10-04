import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tambah-data-konfigurasi.component').then((m) => m.TambahDataKonfigurasiComponent),
    data: {
      title: `Tambah Data Konfigurasi`,
    },
  },
];