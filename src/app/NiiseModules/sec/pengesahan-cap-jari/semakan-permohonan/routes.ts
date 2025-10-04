import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: 'semakan-permohonan',
    loadComponent: () =>
      import('../semakan-permohonan/semakan-permohonan.component').then((m) => m.SemakanPermohonanComponent),
    title: `Semakan Permohonan`,
  },

  {
    path: 'maklumat-pemohon',
    loadComponent: () =>
      import('../semakan-permohonan/maklumat-pemohon/maklumat-pemohon.component').then((m) => m.MaklumatPemohonComponent),
    title: `Maklumat Pemohon`,
  },

  {
    path: 'keputusan-permohonan',
    loadComponent: () =>
      import('../semakan-permohonan/keputusan-permohonan/keputusan-permohonan.component').then((m) => m.KeputusanPermohonanComponent),
    title: `Keputusan Permohonan`,
  },
  {
    path: 'dokumen-sokongan',
    loadComponent: () =>
      import('../semakan-permohonan/dokumen-sokongan/dokumen-sokongan.component').then((m) => m.DokumenSokonganComponent),
    title: `Dokumen Sokongan`,
  },

];

