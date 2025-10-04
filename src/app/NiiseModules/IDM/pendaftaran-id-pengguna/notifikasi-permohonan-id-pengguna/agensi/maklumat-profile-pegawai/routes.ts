import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./maklumat-profile-pegawai.component').then(m => m.MaklumatProfilPegawaiComponent),
    data: {
      title: `Maklumat Profile Pegawai`
    }
  }
];

