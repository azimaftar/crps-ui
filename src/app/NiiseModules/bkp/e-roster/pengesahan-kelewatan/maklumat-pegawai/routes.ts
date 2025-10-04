import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-pegawai.component').then(m => m.MaklumatPegawaiComponent),
    data: {
      title: `MAKLUMAT PEGAWAI`
    }
  }
];

