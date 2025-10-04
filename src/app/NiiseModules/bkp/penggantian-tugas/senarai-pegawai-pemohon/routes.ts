import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./senarai-pegawai-pemohon.component').then(m => m.SenaraiPegawaiPemohonComponent),
    data: {
      title: `Senarai Pegawai Pemohon`
    }
  },
  // {
  //   path: 'maklumat-pegawai-pemohon',
  //   loadChildren: () =>
  //       import('./maklumat-pegawai-pemohon/routes').then((m) => m.routes),
  // },
  {
    path: 'maklumat-pegawai-pengganti',
    loadChildren: () =>
        import('./maklumat-pegawai-pengganti/routes').then((m) => m.routes),
  },
];

