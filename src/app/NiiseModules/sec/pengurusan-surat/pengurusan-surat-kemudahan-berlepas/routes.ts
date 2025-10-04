import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pengurusan-surat-kemudahan-berlepas.component').then(m => m.PengurusanSuratKemudahanBerlepasComponent),
    data: {
      title: `Permohonan Surat Kemudahan Berlepas`
    }
  },
  {
    path: 'permohonan-baru',
    loadComponent: () => import('./permohonan-baru/permohonan-baru.component').then(m => m.PermohonanBaruComponent),
    data: {
      title: `Permohonan Baru`
    }
  },
  {
    path: 'maklumat-pemohon',
    loadComponent: () => import('./maklumat-pemohon/maklumat-pemohon.component').then(m => m.MaklumatPemohonComponent),
    data: {
      title: `Maklumat Pemohon`
    }
  }  
];


