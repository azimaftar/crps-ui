import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./penetapan-koordinasi-pegawai.component').then(
        (m) => m.PenetapanKoordinasiPegawaiComponent
      ),
    data: {
      title: `Penetapan Koordinasi Pegawai`,
    },
  },
  {
    path: 'maklumat-pegawai',
    loadComponent: () =>
      import('./maklumat-pegawai/maklumat-pegawai.component').then(
        (m) => m.MaklumatPegawaiComponent
      ),
    data: {
      title: `Maklumat Pegawai`,
    },
  },
  {
    path: 'maklumat-radius',
    loadComponent: () =>
      import('./maklumat-radius/maklumat-radius.component').then(
        (m) => m.MaklumatRadiusComponent
      ),
    data: {
      title: `Maklumat Pegawai`,
    },
  },
];
