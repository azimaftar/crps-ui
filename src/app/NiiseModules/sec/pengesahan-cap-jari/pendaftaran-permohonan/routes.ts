import { Routes } from '@angular/router';

export const routes: Routes = [

{
    path: 'pendaftaran-permohonan',
    loadComponent: () =>
      import('../pendaftaran-permohonan/pendaftaran-permohonan.component')
        .then(m => m.PendaftaranPermohonanComponent),
    title: 'Pendaftaran Permohonan',
  },
  {
    path: 'maklumat-pemohon',
    loadComponent: () =>
      import('../pendaftaran-permohonan/maklumat-pemohon/maklumat-pemohon.component')
        .then(m => m.MaklumatPemohonComponent),
    title: 'Maklumat Pemohon',
  },
  {
    path: 'dokumen-sokongan',
    loadComponent: () =>
      import('../pendaftaran-permohonan/dokumen-sokongan/dokumen-sokongan.component')
        .then(m => m.DokumenSokonganComponent),
    title: 'Dokumen Sokongan',
  },

];

