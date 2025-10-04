import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'laman-utama-pengurusan-kad-kuasa',
    loadChildren: () =>
      import('./laman-utama-pengurusan-kad-kuasa/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'maklumat-pelupusan-kad-kuasa',
    loadChildren: () =>
      import('./maklumat-pelupusan-kad-kuasa/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'paparan-maklumat-pegawai-bagi-pelupusan-kad-kuasa',
    loadChildren: () =>
      import(
        './paparan-maklumat-pegawai-bagi-pelupusan-kad-kuasa/routes'
      ).then((m) => m.routes),
  },
  {
    path: 'senarai-pelupusan-kad-kuasa',
    loadChildren: () =>
      import('./senarai-pelupusan-kad-kuasa/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'paparan-dan-cetakan-surat-permohonan-pelupusan-ke-cgso',
    loadChildren: () =>
      import('./paparan-dan-cetakan-surat-permohonan-pelupusan-ke-cgso/routes').then(
        (m) => m.routes
      ),
  },
  {
    path: 'kemas-kini-maklumat-pelupusan-keputusan-cgso',
    loadChildren: () =>
      import('./kemas-kini-maklumat-pelupusan-keputusan-cgso/routes').then(
        (m) => m.routes
      ),
  },
];
