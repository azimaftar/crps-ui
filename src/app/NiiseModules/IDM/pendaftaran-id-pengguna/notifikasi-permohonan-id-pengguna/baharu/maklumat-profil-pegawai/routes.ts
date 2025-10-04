import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: ':docNo',
    loadComponent: () => import('./maklumat-profil-pegawai.component').then(m => m.MaklumatProfilPegawaiComponent),
    data: {
      title: `Maklumat-Profil-Pegawai`
    }
  }
];

