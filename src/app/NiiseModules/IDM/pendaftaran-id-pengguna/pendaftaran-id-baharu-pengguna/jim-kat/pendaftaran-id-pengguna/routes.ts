import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pendaftaran-id-pengguna.component').then(
        (m) => m.PendaftaranIdPenggunaComponent
      ),
    data: {
      title: `Pendaftaran ID Pengguna`,
    },
  },
];
