import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pendaftaran-id-pengguna-agensi.component').then(
        (m) => m.PendaftaranIdPenggunaAgensiComponent
      ),
    data: {
      title: `Pendaftaran ID Pengguna Agensi`,
    },
  },
];
