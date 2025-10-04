import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   loadComponent: () => import('./permohonan-pas-perkahwinan-warga-asing.component').then(m => m.PermohonanPasPerkahwinanComponent),
  //   data: {
  //     title: `Permohonan Pas Perkahwinan Bagi Warga Asing`
  //   }
  // },
    {
    path: 'dokumen-sokongan',
    loadComponent: () => import('./dokumen-sokongan.component').then(m => m.DokumenSokonganComponent),
    data: {
      title: `Dokumen Sokongan`
    }
  }
];


