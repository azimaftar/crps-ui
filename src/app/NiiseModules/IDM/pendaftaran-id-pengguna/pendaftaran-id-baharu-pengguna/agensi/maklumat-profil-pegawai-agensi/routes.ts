import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./maklumat-profil-pegawai-agensi.component').then(
        (m) => m.MaklumatProfilPegawaiAgensiComponent
      ),
    data: {
      title: `Maklumat Profil Pegawai Agensi`,
    },
  },
];
