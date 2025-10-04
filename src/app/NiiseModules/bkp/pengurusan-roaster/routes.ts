import { Routes } from '@angular/router';

export const pengurusanRoasterRoutes: Routes = [
  {
    path: 'dftar-jadual/maklumat-carian',
    loadChildren: () =>
        import('./dftar-jadual/maklumat-carian/routes').then((m) => m.routes),
  },
  {
    path: 'pengagihan-lokasi-bertugas/maklumat-carian-lokasi-tugas',
    loadChildren: () =>
      import('./pengagihan-lokasi-bertugas/maklumat-carian-lokasi-tugas/routes').then((m) => m.routes),
  },
  {
    path: 'Kelulusan-Jadual-Tugas',
    loadChildren: () =>
      import('./Kelulusan-Jadual-Tugas/carian-kelulusan-jadual-tugas/routes').then((m) => m.routes),
  },
  {
    path: 'Kelulusan-Jadual-Tugas/carian-kelulusan-jadual-tugas/maklumat-lokasi',
    loadComponent: () => 
      import('./Kelulusan-Jadual-Tugas/carian-kelulusan-jadual-tugas/maklumat-lokasi/maklumat-lokasi.component')
        .then(m => m.MaklumatLokasiComponent),
    data: {
      title: 'Maklumat Lokasi'
    }
  },
  {
    path: 'terima-jadual-giliran-bertugas',
    loadComponent: () =>
      import('./terima-jadual-giliran-bertugas/terima-jadual-giliran-bertugas.component').then((m) => m.TerimaJadualGiliranBertugasComponent),
    data: {
      title: 'Lokasi Bertugas'
    }
  },
  {
    path: 'penjanaan-surat-pertukaran/maklumat-carian',
    loadChildren: () =>
      import('./penjanaan-surat-pertukaran/maklumat-carian/routes').then((m) => m.routes),
  },
  {
    path: 'setting-paparan-masa-jadual',
    loadChildren: () =>
      import('./setting-paparan-masa-jadual/routes').then((m) => m.routes),
  },
  {
    path: 'konfigurasi-nombor-fail',
    loadChildren: () =>
      import('./konfigurasi-nombor-fail/routes').then((m) => m.routes),
  },
];
