import { Routes } from '@angular/router';

export const routes: Routes = [
  
  {
    path: 'kelulusan',
    loadComponent: () =>
      import('../kelulusan/kelulusan.component').then((m) => m.KelulusanComponent),
    title: `Semakan Permohonan`,
  },

  {
    path: 'maklumat-pemohon',
    loadComponent: () =>
      import('../kelulusan/maklumat-pemohon/maklumat-pemohon.component').then((m) => m.MaklumatPemohonComponent),
    title: `Maklumat Pemohon`,
  },

  {
    path: 'keputusan-permohonan',
    loadComponent: () =>
      import('../kelulusan/keputusan-permohonan/keputusan-permohonan.component').then((m) => m.KeputusanPermohonanComponent),
    title: `Keputusan Permohonan`,
  },
   
  {
    path: 'dokumen-sokongan',
    loadComponent: () =>
      import('../kelulusan/dokumen-sokongan/dokumen-sokongan.component').then((m) => m.DokumenSokonganComponent),
    title: `Dokumen Sokongan`,
  },

];

