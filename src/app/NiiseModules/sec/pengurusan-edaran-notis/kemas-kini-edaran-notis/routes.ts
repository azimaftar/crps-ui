import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./kemas-kini-edaran-notis.component').then(
        (m) => m.KemasKiniEdaranNotisComponent
      ),
  },
  {
    path: 'maklumat-pemohon',
    loadComponent: () =>
      import('./maklumat-pemohon/maklumat-pemohon.component').then(
        (m) => m.MaklumatPemohonComponent
      ),
  },
  {
    path: 'kelulusan-permohonan',
    loadComponent: () =>
      import('./kelulusan-permohonan/kelulusan-permohonan.component').then(
        (m) => m.KelulusanPermohonanComponent
      ),
  },
];
