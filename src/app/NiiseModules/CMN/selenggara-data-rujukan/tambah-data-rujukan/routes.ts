import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tambah-data-rujukan.component').then((m) => m.TambahDataRujukanComponent),
    data: {
      title: `Tambah Data Rujukan`,
    },
  },
];
