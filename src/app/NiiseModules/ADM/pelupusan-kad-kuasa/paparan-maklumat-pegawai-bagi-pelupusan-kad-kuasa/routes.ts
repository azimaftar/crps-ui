import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import(
        './paparan-maklumat-pegawai-bagi-pelupusan-kad-kuasa.component'
      ).then((m) => m.PaparanMaklumatPegawaiBagiPelupusanKadKuasaComponent),
    data: {
      title: `Paparan Maklumat Pegawai Bagi Pelupusan Kad Kuasa`,
    },
  },
];
