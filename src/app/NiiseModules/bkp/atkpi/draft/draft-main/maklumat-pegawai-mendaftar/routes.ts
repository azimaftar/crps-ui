import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./maklumat-pegawai-mendaftar.component').then(
        m => m.MaklumatPegawaiMendaftarComponent),
        title: 'Maklumat Pegawai Mendaftar'
  },
];