import { Routes } from '@angular/router';
import { MaklumatPegawaiPemohonComponent } from './maklumat-pegawai-pemohon.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
          import('./maklumat-pegawai-pemohon.component')
            .then(m => m.MaklumatPegawaiPemohonComponent),
    data: { title: `Maklumat Pegawai Pemohon` }
  },
  {
    path: 'maklumat-pegawai-pengganti',
    loadChildren: () =>
      import('./maklumat-pegawai-pengganti/routes')
        .then(m => m.routes),
  }
];





