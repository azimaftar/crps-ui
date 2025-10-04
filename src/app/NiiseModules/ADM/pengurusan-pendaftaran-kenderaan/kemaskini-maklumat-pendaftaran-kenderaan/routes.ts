import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./kemaskini-maklumat-pendaftaran-kenderaan.component').then(m => m.KemaskiniMaklumatPendaftaranKenderaanComponent),
    data: {
      title: `Kemaskini Maklumat Pendaftaran Kenderaan`
    }
  }
];